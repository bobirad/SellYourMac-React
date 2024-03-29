import { useEffect, useState } from 'react';
import './profile.css';
import { collection, query, getDocs, where } from "firebase/firestore";
import { db, auth } from '../../config/firebase';
import { Navigate, Link } from 'react-router-dom';

export function Profile() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!auth.currentUser) {
            Navigate('/login');
        }
        const getUserItems = async () => {

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
        getUserItems();
    }, [items])

    if (loading) {
        return <h1 className='profile-title'>Loading...</h1>;
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
            <h1 className="profile-title"> My Listings</h1>
            {items.map((item) => (
                <div key={item.id} id={item.id} className="profile-items">
                    <div className="profile-item-group img">
                        <img src={item.imageUrl} alt="item-pic"></img>
                    </div>
                    <div>
                        <h1 className="profile-item-group title" htmlFor="">
                            {item.model}
                        </h1>
                    </div>
                    <div className="profile-item-group">
                        <label htmlFor="year">Year:</label>
                    </div>
                    <div className="profile-item-group">
                        <label htmlFor="year">{item.year}</label>
                    </div>
                    <div className="divider-profile"></div>

                    <div className="profile-item-group">
                        <label htmlFor="price">Price:</label>
                    </div>
                    <div className="profile-item-group">
                        <label htmlFor="price">{item.price.toLocaleString('en-US', { style: 'currency', currency: 'BGN' })}</label>
                    </div>
                    <div className="divider-profile"></div>

                    <div className="profile-item-group">
                        <label htmlFor="description">Description:</label>
                    </div>
                    <div className="profile-item-group">
                        <label htmlFor="description">{item.description}</label>
                    </div>
                    <div>
                        <Link to={`/catalog/${item.id}/edit`}>
                            <button className="btn-edit btn">Edit</button>
                        </Link>
                        <Link to={`/catalog/${item.id}/delete`}>
                            <button className="btn-delete btn">Delete</button>
                        </Link>
                    </div>

                </div>
            ))
            }
        </div>
    )
}
