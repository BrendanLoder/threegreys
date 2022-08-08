import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore/lite';
import FirebaseContext from '../../context/firebase';
import FirebaseUserContext from "../../context/firebaseUser"
import Header from '../components/header'
import RoutePaths from '../../constants/routes';



import UserContext from '../../context/user'

export default function Dashboard() {

    const user = useContext(UserContext)
    const firebaseAuthUser = useContext(FirebaseUserContext)
    const navigate = useNavigate();

    if(!firebaseAuthUser){
        navigate(RoutePaths.SOCIAL_LOGIN)
    }

    // const [socialUser, setSocialUser] = useState(null)
    // const { db } = useContext(FirebaseContext);
    // console.log("in general function")

    //     async function getSocialUsers() {
    //         const socialUserCol = collection(db, 'social-user');
            
            
    //         try {
                
    //             const socialUserSnapshot = await getDocs(socialUserCol);
    //             // const socialUserList = socialUserSnapshot.docs.map(doc => doc.data());
    //             console.log('in getSocialUsers try. socialUserList is', "foo")

    //         } catch(error){

    //             console.log("in getSocialUsers error catch. error is", error)


    //         }

    //         // setSocialUser(socialUserList);
    //     }

    //     useEffect(() => {
    //         console.log('in useEffect')
            
    //         getSocialUsers()
    //     }, [])

    return (
        <>
        <Header />
           Social Dashboard for {user.username}!!
        </>
    )
}


// import {useEffect, useState, useContext} from "react"
// import { collection, getDocs } from 'firebase/firestore/lite';
// import FirebaseContext from '../context/firebase'

// function Firebase_Test() {

//     const [cats, setCats] = useState([])
//     const { db } = useContext(FirebaseContext);

//     async function getCats() {
//         const catsCol = collection(db, 'cats');
//         const catSnapshot = await getDocs(catsCol);
//         const catList = catSnapshot.docs.map(doc => doc.data());
//         setCats(catList);
//     }

//     useEffect(() => {
//         getCats()
//     }, [])

//     return (
//         <div>
//             <h3>This is the firebase-test.js<br/></h3>

//             CATS:<br />
//             {
//                 cats.map((cat, index) => (
//                     <div key={cat.id ? cat.id : index}>
//                         <p>{cat.name}</p>
//                         <p>{cat.nickname}</p>
//                     </div>
//                 ))
//             }

//         </div>
//     )
// }

// export default Firebase_Test