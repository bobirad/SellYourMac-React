import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { collection, query, getDocs, where } from "firebase/firestore";

export const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useState("");
    const { items, setItems } = useState([]);
    const { loading, setLoading} = useState(true)


    useEffect(() => {

        const getSearchedItems = async () => {
            if(searchTerm){
                console.log(searchTerm)
                try {
                    const q = query(collection(db, "items"), where("model", "==", searchTerm));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((item) => {
                        items.push({ id: item.id, ...item.data() });
                    })
                } catch (error) {
                    alert('Error getting items: ' + error);
                }            
            
            }
            setLoading(false);
        }

        getSearchedItems();

    }, []);

    if(loading){
        return <h1 className='profile-title'>Loading...</h1>;
    }

    return (
        <div className="searchbar">
            
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
         
        </div>

    )

}