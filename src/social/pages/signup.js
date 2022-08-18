import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FirebaseContext from '../../context/firebase';
import RoutePaths from '../../constants/routes';
import { testFunction, doesUsernameExist } from '../services/social_firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, setDoc } from 'firebase/firestore'
import Header from '../components/header'



export default function Signup() {

    const navigate = useNavigate();

    const { firebase, db } = useContext(FirebaseContext);
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    const [testOutput, setTestOutput] = useState('')
    
    const [error, setError] = useState('');
    const isInvalid = username === '' || fullName === '' || password === '' || emailAddress === '';

    function clearFields() {
        setUsername('')
        setFullName('')
        setEmailAddress('')
        setPassword('')
    }

    const handleSignUp = async (event) => {
        event.preventDefault()
        console.log('form submitted')

        if(username === '') {
            setError('Please enter a username')
            return
        }

        if(fullName === '') {
            setError('Please enter a full name')
            return
        }

        if(emailAddress === '') {
            setError('Please enter an email address')
            return
        }

        if(password === '') {
            setError('Please enter a password')
            return
        }
        
        const userExists = await doesUsernameExist(username);

        if(!userExists) {

            const auth = getAuth();

            try {

                const createUserReturn = await createUserWithEmailAndPassword(auth, emailAddress, password)

                const user = createUserReturn.user
                await updateProfile(user, {
                    displayName: username
                })

                const newUserRef = doc(collection(db, "social-users"))
                await setDoc(newUserRef, {
                    'userId': user.uid,
                    'username': username,
                    'emailAddress': emailAddress,
                    'followers': [],
                    'following': [],
                    'fullName': fullName,
                    'userDocId': newUserRef.id
                })
                
                setSuccessMessage(`User Creation Successful for "${username}"`)

                clearFields()
                navigate(RoutePaths.SOCIAL_DASHBOARD)
            } catch (error) {
                setError(error.message)
            }
            
        } else {
            setError('That username is already taken, please try another.')
        }
    }
    
    useEffect(() => {
        document.title = 'TG Social - Signup';
    }, []);


    return (
 

        <div className="container flex mx-auto max-w-xs items-center ">

            <div className="flex flex-col">


                <Header />
                
                <div className="flex flex-col items-center bg-white p-4 border mb-4 mt-4">
                    
                    <h1 className="flex justify-center w-full text-xl mb-2 font-bold text-white bg-gray-500 p-3 font-serif border border-1 border-gray-800">
                        TG Social
                        {/* <img src="/images/social/logo.png" alt="Three Grays" className="mt-2 w-6/12 mb-4" /> */}
                    </h1>

                    {error && <p className="mb-4 text-xs text-red-500 text-center">{error}</p>}
                    {successMessage && <p className="mb-4 text-xs text-blue-500 text-center">{successMessage}</p>}
                    {testOutput && <p className="mb-4 text-xs text-green-500 text-center">{testOutput}</p>}
                    

                    <form onSubmit={handleSignUp} method="POST">

                        <input
                            aria-label="Enter your username"
                            className="text-sm text-gray-600 w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={({ target }) => setUsername(target.value.toLowerCase())}
                        />
                        <input
                            aria-label="Enter your full name"
                            className="text-sm text-gray-600 w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder="Full name"
                            value={fullName}
                            onChange={({ target }) => setFullName(target.value)}
                        />
                        <input
                            aria-label="Enter your email address"
                            className="text-sm text-gray-600 w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value.toLowerCase())}
                        />
                        <input
                            aria-label="Enter your password"
                            className="text-sm text-gray-600 w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />

                        <button
                            // disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold shadow-lg hover:shadow-none`}
                        >
                            Sign Up
                        </button>

                    </form>

                    <p className="text-sm mt-2">Or <span className="font-bold underline"><Link to={RoutePaths.SOCIAL_LOGIN}>Login</Link></span></p>
                    
                </div>
                
            </div>

        </div>
            

    )
}