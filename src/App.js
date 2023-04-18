import './App.css';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {SearchBar} from './SearchBar';

function App() {
  let [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
      <div className="App">
        <Navbar/>
      </div>
  );
}

export default App;
