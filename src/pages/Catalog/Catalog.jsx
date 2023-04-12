import React, { useEffect, useState } from 'react';
import './catalog.css';
import './../global.css'
import { collection, query, getDocs } from "firebase/firestore";
import { db, auth } from '../../config/firebase';
import { Link } from 'react-router-dom'
export function Catalog() {
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
            {items.map((item) => (
                <div key={item.id} className="item-card">
                    <div className="form-group">
                        <img className="img-item"src={item.imageUrl} alt="item-pic"></img>
                    </div>
                    <h1>{item.model}</h1>
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
                                <button className="btn-login-for-details" >Log in for more details.</button>
                            </Link>
                        </div>
                    }

                </div>
            ))
            }
        </div>

    )
}


