import {firebase, db} from '../../lib/firebase'
import { getFirestore, collection, doc, getDoc, getDocs, query, where, setDoc, addDoc, updateDoc } from 'firebase/firestore'
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

        } else {
            console.log('DO NOT have a user')
        }

    } catch(error) {
        console.log('error in social_firebase/addUserWant:', error)
    }

    return newUserWantIds
}





export async function addUserDoNotWant (want) {

    let userDoNotWantIds = []
    let newUserDoNotWantIds = []
    
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

    } else {
        console.log('DO NOT have a user')
    }

} catch(error) {
    console.log('error in social_firebase/addUserDoNotWant:', error)
}

return newUserDoNotWantIds
}





export async function testGetUserByUserId(userId) {
    let user
    let wantIdList = []
    if(userId){
        const q = query(collection(db, "social-users"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q)
        if(!querySnapshot.empty) {
            querySnapshot.forEach((myDoc) => {
                user = myDoc.data()
            }); 
        }

    }

    return user

}

// DOESNT WORK
// export async function getCurrentUser(firebaseAuthUser) {
//     let currentUser = {}
//     if(firebaseAuthUser){
//         getUserByUserId(firebaseAuthUser.uid)
//         .then(dbUser => {
//             firebaseAuthUser = dbUser
//         })
//         .catch(err=> console.log('error in social_firebase.js getUserByID promise:', err))
//     } else {
//         currentUser = {}
//     }
//     return currentUser
// }



// export async function isUserFollowingProfile(activeUsername, profileUserId) {
//     const result = await firebase
//         .firestore()
//         .collection('users')
//         .where('username', '==', activeUsername) // karl (active logged in user)
//         .where('following', 'array-contains', profileUserId)
//         .get();
        
//     const [response = {}] = result.docs.map((item) => ({
//         ...item.data(),
//         docId: item.id
//     }));
    
//     return !!response.fullName;
// }

// export async function doesUsernameExist(username) {
//     const result = await firebase
//         .firestore()
//         .collection('users')
//         .where('username', '==', username)
//         .get();
        
//     return result.docs.map((user) => user.data().length > 0);
// }

// export async function getUserByUserId(userId) {
//     const result = await firebase
//         .firestore()
//         .collection('users')
//         .where('userId', '==', userId)
//         .get();
        
//     const user = result.docs.map((item) => ({
//         ...item.data(),
//         docId: item.id
//     }));
 
//     return user;       
// }

// export async function getUserFollowedPhotos(userId, followingUserIds) {
//     const result = await firebase
//         .firestore()
//         .collection('photos')
//         .where('userId', 'in', followingUserIds)
//         .get();
        
//     const userFollowedPhotos = result.docs.map((item) => ({
//         ...item.data(),
//         docId: item.id
//     }));
    
//     const photosWithUserDetails = await Promise.all(
//         userFollowedPhotos.map(async (photo) => {
//             let userLikedPhoto = false;
//             if (photo.likes.includes(userId)) {
//                 userLikedPhoto = true;
//             }
//             const user = await getUserByUserId(photo.userId);
//             const username = user[0].username;
//             return { username, ...photo, userLikedPhoto };
//         })
//     );
    
//     return photosWithUserDetails;
// }

// export async function getSuggestedProfiles(userId) {
//     const result = await firebase.firestore().collection('users').limit(10).get();
//     const [{ following }] = await getUserByUserId(userId);
        
//     return result.docs
//         .map((user) => ({ ...user.data(), docId: user.id }))
//         .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
// }
    
// export async function updateUserFollowing(docId, profileId, isFollowingProfile) {
//     return firebase
//         .firestore()
//         .collection('users')
//         .doc(docId)
//         .update({
//             following: isFollowingProfile
//                 ? FieldValue.arrayRemove(profileId)
//                 : FieldValue.arrayUnion(profileId)
//         });
// }

// export async function updateFollowedUserFollowers(docId, followingUserId, isFollowingProfile) {
//     return firebase
//         .firestore()
//         .collection('users')
//         .doc(docId)
//         .update({
//             followers: isFollowingProfile
//                 ? FieldValue.arrayRemove(followingUserId)
//                 : FieldValue.arrayUnion(followingUserId)
//         });
// }

// export async function getUserByUsername(username) {
//     const result = await firebase
//         .firestore()
//         .collection('users')
//         .where('username', '==', username)
//         .get();
        
//     const user = result.docs.map((item) => ({
//         ...item.data(),
//         docId: item.id
//     }));
 
//     return user.length > 0 ? user : false;  
// }

// export async function getUserIdByUsername(username) {
//     const result = await firebase
//         .firestore()
//         .collection('users')
//         .where('username', '==', username)
//         .get();
        
//     const [{ userId = null }] = result.docs.map((item) => ({
//         ...item.data(),
//     }));
    
//     return userId;
// }

// export async function getUserPhotosByUsername(username) {
//     const userId = await getUserIdByUsername(username);
//     const result = await firebase
//         .firestore()
//         .collection('photos')
//         .where('userId', '==', userId)
//         .get();
        
//     const photos = result.docs.map((item) => ({
//         ...item.data(),
//         docId: item.id
//     }));
    
//     return photos;
// }

// export async function toggleFollow(
//     isFollowingProfile,
//     activeUserDocId,
//     profileDocId,
//     profileId,
//     followingUserId
// ) {
//     await updateUserFollowing(activeUserDocId, profileId, isFollowingProfile);
//     await updateFollowedUserFollowers(profileDocId, followingUserId, isFollowingProfile);
// }