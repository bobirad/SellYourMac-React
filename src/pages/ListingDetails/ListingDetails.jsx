import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../../config/firebase';
import './listingDetails.css'
export function ListingDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [itemData, setItemData] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    useEffect(() => {
        const getItem = async () => {
            const itemRef = doc(db, "items", id);
            const itemDoc = await getDoc(itemRef);
            if (itemDoc.exists) {
                setItemData(itemDoc.data());

            } else {
                alert('Error getting item!')
            }
            if (itemDoc.data().owner === auth.currentUser.email) {
                setIsOwner(true);
            }

            setLoading(false);
        };

        getItem();
    }, []);
    
    if (loading) {
        return <div>Loading...</div>;
    }
        return (
            <div key={id} className="item-details">
                <div className="details-group img">
                    <img src={itemData.imageUrl} alt="item-pic"></img>
                </div>
                <div>
                    <label className="details-group title" htmlFor="">
                        {itemData.model}
                    </label>
                </div>
                <div className="details-group">
                    <label htmlFor="year">Year:</label>
                </div>
                <div className="details-group">
                    <label htmlFor="year">{itemData.year}</label>
                </div>
                <div className="divider-details"></div>

                <div className="details-group">
                    <label htmlFor="price">Price:</label>
                </div>
                <div className="details-group">
                    <label htmlFor="price">{itemData.price.toLocaleString('en-US', { style: 'currency', currency: 'BGN' })}</label>
                </div>
                <div className="divider-details"></div>

                <div className="details-group">
                    <label htmlFor="description">Description:</label>
                </div>
                <div className="details-group">
                    <label htmlFor="description">{itemData.description}</label>
                </div>

                {isOwner ?
                    <div>
                        <Link to={`/catalog/${id}/edit`}>
                            <button className="btn-edit btn">Edit</button>
                        </Link >
                        <Link to={`/catalog/${id}/delete`}>
                            <button className="btn-delete btn">Delete</button>
                        </Link>
                    </div>
                    : <div className="details-group">
                        <label htmlFor="contacs">Contact: {itemData.owner}</label>
                    </div>
                }
            </div>
        )
}


