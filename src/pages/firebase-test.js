import {useEffect, useState, useContext} from "react"
import FirebaseContext from '../context/firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function Firebase_Test() {

    const [cats, setCats] = useState([])
    const { db } = useContext(FirebaseContext);

    async function getCats() {
        const catsCollection = collection(db, 'cats');
        const catsSnapshot = await getDocs(catsCollection);
        const catsList = catsSnapshot.docs.map(doc => doc.data());
        console.log('list is', catsList)
        setCats(catsList)
        return catsList;
    }

    useEffect(() => {
        getCats()
    }, [])

    return (
        <div>
            <h3>This is the firebase-test.js<br/></h3>

            CATS:<br />
            {
                cats.map((cat, index) => (
                    <div key={cat.id ? cat.id : index}>
                        <p>{cat.name}</p>
                        <p>{cat.nickname}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default Firebase_Test