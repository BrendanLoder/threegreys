import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FirebaseContext from '../../context/firebase';
import RoutePaths from '../../constants/routes';
import { testFunction, doesUsernameExist } from '../services/social_firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from 'firebase/firestore'
import Header from '../components/header'



export default function Signup() {

    const navigate = useNavigate();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    const [testOutput, setTestOutput] = useState('')
    
    const [error, setError] = useState('');
    const isInvalid = emailAddress === '' || password === '' ;

    function clearFields() {
        setEmailAddress('')
        setPassword('')
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('form submitted')

        if(emailAddress === '') {
            setError('Please enter an email address')
            return
        }

        if(password === '') {
            setError('Please enter a password')
            return
        }

        const auth = getAuth()
        signInWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate(RoutePaths.SOCIAL_DASHBOARD)
            // ...
        })
        .catch((error) => {
            setError(error.message)
        });
        
    }
    
    useEffect(() => {
        document.title = `Login - TG Social`;
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
                    

                    <form onSubmit={handleLogin} method="POST">
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
                            // className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${ isInvalid && 'cursor-not-allowed opacity-50'
                            // }`}
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold `}
                        >
                            Login
                        </button>

                    </form>
                    
                </div>
                
            </div>

        </div>
            

    )
}