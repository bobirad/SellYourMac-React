import './catalog.css';
import { useEffect, useState } from 'react';
import { collection, query, getDocs, where } from "firebase/firestore";
import { db, auth } from '../../config/firebase';
import { Link } from 'react-router-dom'
export function Catalog() {
    const [ items, setItems ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ searchResult, setSearchResult ] = useState([]);

    useEffect(() => {

        const getItems = async () => {
            items.splice(0);

            const itemsRef = query(collection(db, "items"));

            try {
                const querySnapshot = await getDocs(itemsRef);
                querySnapshot.forEach((item) => {
                    items.push({ id: item.id, ...item.data() });
                })
            } catch (error) {
                alert('Error getting items: ' + error);
            }
            setLoading(false);

        }
        getItems();
        

    }, [])
    const handleSearch = async () => {
        console.log(`Searching for "${searchTerm}"...`);
        if(searchTerm){
            console.log(searchTerm)
            const result = items.find(item => item.model === searchTerm);
            console.log(result)
            setSearchResult(result);
        }
        setLoading(false);
    }
    const sortedItems = items.sort((a, b) => { return b.timeStamp - a.timeStamp });
    if (loading) {
        return <h1 className='catalog-title'>Loading...</h1>;
    }

    if (items.length === 0) {
        return (
            <h1 className='catalog-title'> No Listings!</h1>
        )
    }
    return (
        <div >
            <h1 className='catalog-title'>Items for sale</h1>
            <div className='search-container'>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {sortedItems.map((item) => (
                <div key={item.id} className="item-card">
                    <div className="form-group">
                        <img className="img-item" src={item.imageUrl} alt="item-pic"></img>
                    </div >
                    <div>
                        <h1 className="form-group title" htmlFor="">
                            {item.model}
                        </h1>
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year: {item.year}</label>
                    </div>
                    <div className="divider-catalog"></div>
                    {auth.currentUser ?
                        <>
                            <div className="form-group">
                                <label htmlFor="price">Price: {item.price.toLocaleString('en-US', { style: 'currency', currency: 'BGN' })}</label>
                            </div>
                            <div className="btn-container">
                                <Link to={`/catalog/${item.id}`} type="" className="btn-details btn">Details</Link>
                            </div>
                        </>
                        :
                        <div className='not-logged-in-box'>
                            <Link to='/login'>
                                <button className="btn-login-for-details btn" >Log in for more details.</button>
                            </Link>
                        </div>
                    }

                </div>
            ))
            }
        </div>

    )
}


