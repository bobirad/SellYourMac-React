import './editListing.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../config/firebase';

export const EditListing = () => {
    const [model, setModel] = useState("");
    const [year, setYear] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const navigate = useNavigate();
    const handleEditListing = async (event) => {
        event.preventDefault();
        //const ownerEmail = currentUser ? currentUser.email : 'unknown';
        const collectionRef = collection(db, "items")
        const newItem = {
                id :'',
                model: model,
                year: Number(year),
                price: Number(price),
                description: description,
                imageUrl: imageUrl,
                //owner
          };
      
        try {
            await addDoc(collection(db, "items"), newItem);
            navigate('/profile');
        } catch (error) {
            alert("Error adding document: " + error);

        }
    }
    
    return (
        <form className="addlisting-form" onSubmit={handleEditListing}>
            <h1>Add your listing</h1>
            <div className="form-group">
                <label htmlFor="model">Model:</label>
                <input type="text"
                name="model" 
                placeholder="MacBook Pro " 
                value={model}
                required
                onChange={(e) => setModel(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="username">Year:</label>
                <input type="number"
                name="year" 
                placeholder="2022" 
                value={year}
                required
                onChange={(e) => setYear(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="username">Price:</label>
                <input type="number"
                name="price" 
                placeholder="2500" 
                value={price}
                required
                onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text"
                name="description"
                className="devise-description" 
                placeholder="Very good used condition"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                minLength="10" />
            </div>
            <div className="form-group">
                <label htmlFor="imgUrl">Image Url:</label>
                <input type="url" 
                name="password" 
                placeholder="Image Url"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
            <div className="btn-container">
                <button type="submit" className="addlisting-btn btn">Add Listing</button>
                <Link to="/" className="cancel-btn btn">Cancel</Link>

            </div>
        </form>
    )
}

