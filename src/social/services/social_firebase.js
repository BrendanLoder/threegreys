import {firebase, db} from '../../lib/firebase'
import { getFirestore, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'

export async function testFunction() {
    console.log('yay in social firebase!!')
}

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