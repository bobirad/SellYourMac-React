import './editListing.css'
import { Link } from "react-router-dom";
import { db, auth } from '../../config/firebase';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export function EditListing() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [itemData, setItemData] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const [model, setModel] = useState();
    const [year, setYear] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [imageUrl, setImageUrl] = useState(itemData);

    const navigate = useNavigate();
    const itemRef = doc(db, "items", id);

    async function getItem() {
        const itemDoc = await getDoc(itemRef);
        if (itemDoc.exists) {
            setItemData(itemDoc.data());
            setModel(itemData.model);
            setYear(itemData.year);
            setPrice(itemData.price);
            setDescription(itemData.description);
            setImageUrl(itemData.imageUrl);

        } else {
            alert('Error getting item!')
        }
        if (itemDoc.data().owner === auth.currentUser.email) {
            setIsOwner(true);
        }

        setLoading(false);
    };

    getItem();

    const [editedModel, setEditedModel] = useState(model);
    const [editedYear, setEditedYear] = useState(year);
    const [editedPrice, setEditedPrice] = useState(price);
    const [editedDescription, setEditedDescription] = useState(description);
    const [editedImageUrl, setEditedImageUrl] = useState(imageUrl);

    const handleEditListing = async (event) => {
        event.preventDefault();
        const editedItem = {
            model: editedModel,
            year: editedYear,
            price: editedPrice,
            description: editedDescription,
            imageUrl: editedImageUrl,
        };

        try {
            console.log(itemRef)
            console.log(editedItem.model)

            await updateDoc(itemRef, editedItem );

            navigate('/catalog');
        } catch (error) {
            alert("Error editing document: " + error);
        }
    }


    if (loading) {
        return <div>Loading...</div>;
    }

    if (itemData && isOwner) {
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
                            defaultValue={model}
                            value={editedModel}
                            onChange={(e) => setEditedModel(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Year:</label>
                        <input type="number"
                            name="year"
                            placeholder="2022"
                            required
                            defaultValue={year}
                            value={editedYear}
                            onChange={(e) => setEditedYear(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Price:</label>
                        <input type="number"
                            name="price"
                            placeholder="2500"
                            required
                            defaultValue={price}
                            value={editedPrice}
                            onChange={(e) => setEditedPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input type="text"
                            name="description"
                            className="devise-description"
                            placeholder="Very good used condition"
                            required
                            defaultValue={description}
                            value={editedDescription}

                            onChange={(e) => setEditedDescription(e.target.value)}
                            minLength="10" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgUrl">Image Url:</label>
                        <input type="url"
                            name="imageUrl"
                            placeholder="Image Url"
                            required
                            defaultValue={imageUrl}
                            value={editedImageUrl}

                            onChange={(e) => setEditedImageUrl(e.target.value)}
                        />
                    </div>
                    <div className="btn-container">
                        <button type="submit" className="addlisting-btn btn">Submit changes</button>
                        <Link to={`/catalog/${id}`} className="cancel-btn btn">Cancel</Link>

                    </div>
                </form>
            </>

        )
    }else {
        alert('You are not the owner of the content!');
        navigate(`/catalog/${id}`);
    }

}



