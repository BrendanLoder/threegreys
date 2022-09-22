import {firebase, db} from '../../lib/firebase'
import { getFirestore, collection, doc, getDoc, getDocs, query, where, setDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FirebaseUserContext from '../../context/firebaseUser';

export async function getAllUsers() {
    const userCollection = collection(db, 'social-users');
    const querySnapshot = await getDocs(userCollection);
    
    const userList = querySnapshot.docs.map(doc => doc.data());
    return userList;
}

export async function doesUsernameExist(username) {
    let userExists = false

    const q = query(collection(db, "social-users"), where("username", "==", username));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
        userExists = true
    }
    
    return userExists
}       

export async function getUserByUserId(userId) {
    let user
    if(userId){
        const q = query(collection(db, "social-users"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((myDoc) => {
            user = myDoc.data()
        });

    }

    return user

}

export async function getWantsByUserId(userId) {
    const wants = []
    if(userId) {
        const q = query(collection(db, "social-user-wants"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q)
        const userWantsList = querySnapshot.docs.map(doc => doc.data());
        return userWantsList
    }
}



export async function getWantById(wantId) {
    const q = query(collection(db, "social-user-wants"), where("wantId", "==", wantId));
    const querySnapshot = await getDocs(q)
    let want
    querySnapshot.forEach((myDoc) => {
        want = myDoc.data()
    });
    
    return want
}

export async function getWantItemsByUserId(userId) {
    let wantIds = []
    let wantItemList = []
    if(userId) {
        const user = await getUserByUserId(userId)
        if(user) {
            wantIds = user.wantIds 
            if(wantIds) {
                for (const wantId of wantIds) {
                    const want = await getWantById(wantId)
                    wantItemList.push(want)
                }
            }
        }
    }
    return wantItemList
}

export async function getDoNotWantItemsByUserId(userId) {
    let doNotWantIds = []
    let doNotWantItemList = []
    if(userId) {
        const user = await getUserByUserId(userId)
        if(user) {
            doNotWantIds = user.doNotWantIds 
            if(doNotWantIds) {
                for (const doNotWantId of doNotWantIds) {
                    const doNotWant = await getWantById(doNotWantId)
                    doNotWantItemList.push(doNotWant)
                }
            }
        }
    }
    return doNotWantItemList
}

export async function addUserWant (want) {

        let userWantIds = []
        let newUserWantIds = []
        let newWantId
        
    try {

        const user = await getUserByUserId(want.userId)

        if(user){

            // creating want item and adding wantId as a field
            const docRef = doc(collection(db, "social-user-wants"));
            const newWantRefId =  docRef.id
            await setDoc(docRef, {
                ...want, 
                'wantId': newWantRefId
            });

            userWantIds = user.wantIds
            newUserWantIds = [...userWantIds, newWantRefId]
            const userRef = doc(db, "social-users", user.userDocId)

            // updating the wantIds array for the user 
            await updateDoc(userRef, {
                wantIds: newUserWantIds
            });
            newWantId = newWantRefId
        } else {
            console.log('DO NOT have a user')
        }

    } catch(error) {
        console.log('error in social_firebase/addUserWant:', error)
    }

    return newWantId
}





export async function addUserDoNotWant (want) {

    let userDoNotWantIds = []
    let newUserDoNotWantIds = []
    let newDoNotWantId
    
try {

    const user = await getUserByUserId(want.userId)

    if(user){

        // creating want item and adding wantId as a field
        const docRef = doc(collection(db, "social-user-wants"));
        const newDoNotWantRefId =  docRef.id
        await setDoc(docRef, {
            ...want, 
            'wantId': newDoNotWantRefId
        });

        userDoNotWantIds = user.doNotWantIds
        newUserDoNotWantIds = [...userDoNotWantIds, newDoNotWantRefId]
        const userRef = doc(db, "social-users", user.userDocId)

        // updating the wantIds array for the user 
        await updateDoc(userRef, {
            doNotWantIds: newUserDoNotWantIds
        });
        newDoNotWantId = newDoNotWantRefId

    } else {
        console.log('DO NOT have a user')
    }

} catch(error) {
    console.log('error in social_firebase/addUserDoNotWant:', error)
}

return newDoNotWantId
}

export async function updateUserWants({
    userId,
    deleteArray,
    keepArray
}) {
    try {
        const user = await getUserByUserId(userId)
        const userRef = doc(db, "social-users", user.userDocId)
        if(keepArray && keepArray.length > 0) {
            await updateDoc(userRef, {
                wantIds: keepArray
            });
        }
        if(deleteArray && deleteArray.length > 0) {
            await Promise.all(deleteArray.map(async (wantId) => deleteDoc(doc(db, "social-user-wants", wantId))));
        }
    } catch(error){
        console.log('Error in updateUserWants():', error)
    }
}

export async function updateUserDoNotWants({
    userId,
    deleteArray,
    keepArray
}) {
    try {
        const user = await getUserByUserId(userId)
        const userRef = doc(db, "social-users", user.userDocId)
        if(keepArray && keepArray.length > 0) {
            await updateDoc(userRef, {
                doNotWantIds: keepArray
            });
        }
        
        if(deleteArray && deleteArray.length > 0) {
            await Promise.all(deleteArray.map(async (wantId) => deleteDoc(doc(db, "social-user-wants", wantId))));
        }
    } catch(error){
        console.log('Error in updateUserWants():', error)
    }
}

export async function updateWant(data) {
    const title = data && data.title ? data.title: ''
    const description = data && data.description ? data.description: ''
    const link = data && data.link ? data.link: ''
    const imageUrl = data && data.imageUrl ? data.imageUrl: ''
    const id = data && data.id ? data.id: ''

    
    try {
        if (id != '') {
            const wantRef = doc(db, "social-user-wants", data.id)
            await updateDoc(wantRef, {
                title: title,
                description: description,
                link: link,
                imageUrl: imageUrl
            });
            return {
                title: title,
                description: description,
                link: link,
                imageUrl: imageUrl
            }
        } else {
            console.log('Error in updateWant() - no id provided')
        }

    } catch(error) {
            console.log('Error in updateWant():', error)

    }

    return {
        title: "",
        description: "",
        link: "",
        imageUrl: ""
    }
}

export async function deleteWantById(id) {
    if(id && id != '') {
        try {
            await deleteDoc(doc(db, "social-user-wants", id))
        } catch (error) {
            console.log('in deleteWantById() - error on deleteDoc try is:', error)
        }
        
    } else {
        console.log('in deleteWantById() - no id passed in')
    }
}


export async function deleteWantByIdAndUserIdAndType({wantId, userId, wantType}) {
    if(wantId && userId && wantType){
        const want = await getWantById(wantId)
        const user = await getUserByUserId(userId)
        const userDocId = user.userDocId
        let userWantIds = user.wantIds ? user.wantIds : []
        let userDoNotWantIds = user.doNotWantIds ? user.doNotWantIds : []

        const userRef = doc(db, "social-users", userDocId) 

        if(wantType == 'wantItem' && userWantIds.length > 0) {
            const index = userWantIds.indexOf(wantId);
            if (index > -1) {
                userWantIds.splice(index, 1)
            }
            await updateDoc(userRef, {
                wantIds: userWantIds
            })
            await deleteWantById(wantId)
        } else if(wantType == 'doNotWantItem' && userDoNotWantIds.length > 0) {
            const index = userDoNotWantIds.indexOf(wantId);
            if (index > -1) {
                userDoNotWantIds.splice(index, 1)
            await updateDoc(userRef, {
                doNotWantIds: userDoNotWantIds
            })
            }
            await deleteWantById(wantId)
        }
    } else {
        console.  log('in deleteWantByWantIdAndUserId() wantId or userId or wantType are missing')
    }
}