import {useEffect, useState, useContext} from "react"
import FirebaseContext from '../context/firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function Firebase_Test() {

    const auth = getAuth();
    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('user is logged in. uid:', uid)
    } else {
        console.log('user is signed out')
        // User is signed out
        // ...
    }
    });



    }, [])

    // const [cats, setCats] = useState([])
    // const { db } = useContext(FirebaseContext);
    // async function getCats() {
    //     const catsCollection = collection(db, 'cats');
    //     const catsSnapshot = await getDocs(catsCollection);
    //     const catsList = catsSnapshot.docs.map(doc => doc.data());
    //     setCats(catsList)
    //     return catsList;
    // }

    // useEffect(() => {
    //     getCats()
    // }, [])

    return (
        <div>
            <h3>This is the firebase-test.js<br/></h3>

            {/* CATS:<br />
            {
                cats.map((cat, index) => (
                    <div key={cat.id ? cat.id : index}>
                        <p>{cat.name}</p>
                        <p>{cat.nickname}</p>
                    </div>
                ))
            } */}

        </div>
    )
}

export default Firebase_Test