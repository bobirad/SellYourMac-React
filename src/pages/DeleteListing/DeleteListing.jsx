import './deleteListing.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../config/firebase';

export function DeleteListing() {

    const navigate = useNavigate();
    const { id } = useParams();
    const itemRef = doc(db, "items", id);
    console.log(itemRef.imageUrl)
    const handleDelete = async (event) => {
        event.preventDefault();
        const itemDoc = await getDoc(itemRef);

        if (auth.currentUser.email === itemDoc.data().owner) {
            await deleteDoc(itemRef)
            .then(() => {
                alert("Document successfully deleted!");
                navigate(-2);
            })
            .catch((error) => {
                alert("Error removing item: ", error);
            });
            return (
                <div className='delete-form'>
                    <h1>Item successfully deleted!</h1>
                    <Link to={-1}>Go back.</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>You are not the owner of this item!</h1>
                    <Link to={-1}>Go back.</Link>
                </div>
            )
        }

    };
    return (
        <form className="delete-form">
            <div className="form-group">
                <label>Are you sure you want to delete this item?</label>
            </div>
           
            <div>
                <button onClick={handleDelete} className='btn-yes btn'>Yes</button>
                <Link to={-1}>
                    <button className='btn-no btn'>No</button>
                </Link>
            </div>

        </form>
    )
}

