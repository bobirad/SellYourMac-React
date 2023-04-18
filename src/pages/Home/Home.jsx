import './home.css';
import { useEffect, useState } from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../config/firebase';
import { Link } from 'react-router-dom';


export function Home() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const getItems = async () => {
            const itemsRef = query(collection(db, "items"));

            try {
                const querySnapshot = await getDocs(itemsRef);
                querySnapshot.forEach((doc) => {
                    items.push({ id: doc.id, ...doc.data() });
                })
            } catch (error) {
                alert('Error getting items: ' + error);
            }
            setLoading(false);

        }
        getItems();
    }, [])
    console.log(items);
    const sortedItems = items.sort((a,b) => {return b.timeStamp - a.timeStamp});
    console.log(sortedItems);
    sortedItems.splice(3);
    console.log(sortedItems);
    if (loading) {
        return <h1 className='catalog-title'>Loading...</h1>;
    }

    if (sortedItems.length === 0) {
        return (
            <h1 className='catalog-title'> No Listings!</h1>
        )
    }

    return (
        <>
            <div>
            </div>
            <article className='article-1'>
                <h1 className='article-1-title titles'>Best place to buy and sell used Apple devices</h1>
                <div className="macbooks products">
                    <div>
                        <img src="https://www.crn.com/resources/0275-1520b9e2c8fa-d29b8e38b211-1000/slide1-macbooks.jpeg" alt="" />

                    </div>
                    <div className='product-title-box'>
                        <label className="product-title" htmlFor="macbooks">Laptops</label>
                    </div>
                </div>

                <div className="imacs products">
                    <div>
                        <img src="https://www.apple.com/newsroom/images/product/imac/standard/apple_new-imac-spring21_hero_04202021.jpg.landing-big_2x.jpg" alt="" />

                    </div>
                    <div className='product-title-box'>
                        <label className="product-title" htmlFor="macbooks">iMacs</label>
                    </div>
                </div><div className="iphones products">
                    <div>
                        <img src="https://i.ytimg.com/vi/o6wkuQ_Iruo/maxresdefault.jpg" alt="" />

                    </div>
                    <div className='product-title-box'>
                        <label className="product-title" htmlFor="macbooks">iPhones</label>
                    </div>
                </div><div className="watches products">
                    <div>
                        <img src="https://www.apple.com/v/watch/bc/images/meta/gps-lte__b0yvr61u8ws2_og.png?202303280925" alt="" />

                    </div>
                    <div className='product-title-box'>
                        <label className="product-title" htmlFor="macbooks">Apple watches</label>
                    </div>
                </div>
            </article>
            <div className='articles-divider'></div>
            <Link to="/catalog">
                <h1 to="/catalog" className='article-2-title titles'>Featured devices for sale</h1>

            </Link>
            {loading ?
                <h1 className='catalog-title'>Loading...</h1>
                :
                (sortedItems.map((item) => (
                        <div key={item.id} className="macbooks products">
                            <div>
                                <img src={item.imageUrl} alt="" />

                            </div>
                            <div className='product-title-box'>
                                <label className="product-title">{item.model}</label>
                            </div>
                         
                        </div>
                )))
                        
                    


            }

        </>
    )
}
