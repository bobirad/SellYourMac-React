import './editListing.css'
import { Link } from "react-router-dom";
import { db, auth } from '../../config/firebase';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export function EditListing() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    //const [itemData, setItemData] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const [model, setModel] = useState("");
    const [year, setYear] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const navigate = useNavigate();
    const itemRef = doc(db, "items", id);
    useEffect(() => {
        async function getItem() {
            const itemDoc = await getDoc(itemRef);
            if (itemDoc.exists) {
                //setItemData(itemDoc.data());
                setModel(itemDoc.data().model);
                setYear(itemDoc.data().year);
                setPrice(itemDoc.data().price);
                setDescription(itemDoc.data().description);
                setImageUrl(itemDoc.data().imageUrl);
            } else {
                alert('Error getting item!')
            }
            if (itemDoc.data().owner === auth.currentUser.email) {
                setIsOwner(true);
            }
            setLoading(false);
        };   
        getItem();        
    }, [])
   
    const handleEditListing = async (event) => {
        event.preventDefault();

        try {
            
            await updateDoc(itemRef, {
                model: model,
                year: year,
                price: price,
                description: description,
                imageUrl: imageUrl
            });

            navigate(-1);
        } catch (error) {
            alert("Error editing document: " + error);
        }
    }


    if (loading) {
        return <div>Loading...</div>;
    }

    if (isOwner) {
        return (
            <>
                <form className="addlisting-form" onSubmit={handleEditListing}>
                    <h1>Edit your listing</h1>
                    <div className="form-group">
                        <label htmlFor="model">Model:</label>
                        <input type="text"
                            name="model"
                            placeholder="MacBook Pro "
                            required
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Year:</label>
                        <input type="number"
                            name="year"
                            placeholder="2022"
                            required
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Price:</label>
                        <input type="number"
                            name="price"
                            placeholder="2500"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input type="text"
                            name="description"
                            className="devise-description"
                            placeholder="Very good used condition"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            minLength="10" 
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgUrl">Image Url:</label>
                        <input type="url"
                            name="imageUrl"
                            placeholder="Image Url"
                            required
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                    <div className="btn-container">
                        <button type="submit" className="addlisting-btn btn">Submit changes</button>
                        <Link to={-1} className="cancel-btn btn">Cancel</Link>

                    </div>
                </form>
            </>

        )
    }else {
        alert('You are not the owner of the content!');
        navigate(`/catalog/${id}`);
    }

}



