import useFirebaseUser from "../hooks/use-firebase-user"
import { useEffect, useState } from "react";

export default function Header() {
    
    const firebaseUser = useFirebaseUser()
    let username = ''
    if (firebaseUser) {
        username = firebaseUser.username
        console.log('username is === ', username)
    }

    return (
        <div>
            <div className="font-serif text-sm w-full h-20">
                {username};
            </div>
        </div>  
    );
}