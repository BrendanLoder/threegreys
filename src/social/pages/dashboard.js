import useFirebaseDBUser from "../hooks/use-firebase-user";

export default function Dashboard() {
    const firebaseDBUser = useFirebaseDBUser()

    console.log('firebaseDBUser:', firebaseDBUser)

    return (
        <div>
            firebaseDBUser.userId X is {firebaseDBUser.userId}
        </div>  
    );
}