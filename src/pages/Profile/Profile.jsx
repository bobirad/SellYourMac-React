import React, { useEffect, useState } from 'react';
import './profile.css';
import { collection, query, getDocs,where } from "firebase/firestore";
import { db,auth } from '../../config/firebase';
export function Profile() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getItems = async () => {
            const itemsRef = query(collection(db, "items"));

            try {
                const q = query(collection(db, "items"), where("owner", "==", auth.currentUser.email));
                const querySnapshot = await getDocs(q);

                querySnapshot.forEach((doc) => {
                    items.push({ id: doc.id, ...doc.data() });
                })
            } catch (error) {
                alert('Error getting items: ' + error);
            }
            setLoading(false);

        }
        getItems();
    }, [items])

    if (loading) {
        return <div className='loading'>Loading...</div>;
    }



    if (items.length === 0) {
        return (
            <div>
                <label> No Listings!</label>
            </div>
        )
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item.id} id={item.id} className="item-details">
                    <div className="details-group img">
                        <img src={item.imageUrl} alt="item-pic"></img>
                    </div>
                    <div>
                        <label className="details-group title" htmlFor="">
                            {item.model}
                        </label>
                    </div>
                    <div className="details-group">
                        <label htmlFor="year">Year:</label>
                    </div>
                    <div className="details-group">
                        <label htmlFor="year">{item.year}</label>
                    </div>
                    <div className="divide"></div>

                    <div className="details-group">
                        <label htmlFor="price">Price:</label>
                    </div>
                    <div className="details-group">
                        <label htmlFor="price">{item.price.toLocaleString('en-US', { style: 'currency', currency: 'BGN' })}</label>
                    </div>
                    <div className="divide"></div>

                    <div className="details-group">
                        <label htmlFor="description">Description:</label>
                    </div>
                    <div className="details-group">
                        <label htmlFor="description">{item.description}</label>
                    </div>
                    <div>
                        <button className="btn-edit btn">Edit</button>
                        <button className="btn-delete btn">Delete</button>
                    </div>
                
                </div>
            ))
            }
        </div>

    )
}
