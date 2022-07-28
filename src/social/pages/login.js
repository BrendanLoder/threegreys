import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FirebaseContext from '../../context/firebase';
import RoutePaths from '../../constants/routes';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default function Login() {

    const auth = getAuth();

    const navigate = useNavigate();
    
    const { firebase } = useContext(FirebaseContext);
    
    
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async(event) => {
        event.preventDefault();
        setError('')
        try {
            // const response = await firebase.auth().signInWithEmailAndPassword
            await signInWithEmailAndPassword(emailAddress, password);
            // history.push(ROUTES.DASHBOARD);
            navigate(RoutePaths.SOCIAL_DASHBOARD)
        }
        catch(error) {
            setEmailAddress('')
            setPassword('')
            setError(error.message);
        }
    }

    useEffect(() => {
        document.title = `Login - Three Grays`;
    }, []);

    return (
        <div> social login
            {/* <div className="container flex mx-auto max-w-screen-md items-center h-screen">
                <div className="flex w-3/5">
                    <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
                </div>
                <div className="flex flex-col w-2/5">
                    <div className="flex flex-col items-center bg-white p-4 border mb-4">
                        <h1 className="flex justify-center w-full">
                            <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                        </h1>
                        {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

                        <form method="POST" onSubmit={handleLogin}>
                            <input
                                aria-label="Enter your email address"
                                className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                                type="email"
                                value= {emailAddress} 
                                onChange={e => setEmailAddress(e.target.value)}
                                placeholder="Email address"
                            />
                            <input
                                aria-label="Enter your password"
                                className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                                type="password" 
                                value= {password} 
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <button
                                type="submit"
                                disabled={isInvalid}
                                className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${ isInvalid && 'cursor-not-allowed opacity-50'
                                }`}
                            >
                                Log In
                            </button>
                        </form>
                    </div>
                    <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                        <p className="text-sm">
                            Don't have an account?{' '}
                            <Link to={RoutePaths.SOCIAL_SIGN_UP} className="font-bold">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}