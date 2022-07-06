import {withAuthenticator } from '@aws-amplify/ui-react';
import {Auth} from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css';
import { lazy, Suspense, useState, useEffect } from 'react'
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import RoutePaths from './constants/routes'
import UserContext from './context/user'

const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy(() => import ('./pages/login'));
const NotFound = lazy(() => import ('./pages/not-found'));
const Carousels = lazy(() => import ('./pages/carousels'));
const Profile = lazy(() => import ('./pages/profile'));
const DragAndDrop = lazy(() => import ('./pages/draganddrop'));
const FIREBASE_TEST = lazy(() => import ('./pages/firebase-test'));
const Tailwind = lazy(() => import ('./pages/tailwind'));
const Tailwind_Example = lazy(() => import ('./pages/tailwind_example'));
const William = lazy(() => import ('./pages/william'));
const Social_Dashboard = lazy(() => import ('./pages/social/dashboard'));
const Social_Signup = lazy(() => import ('./pages/social/signup'));
const Social_Login = lazy(() => import ('./pages/social/login'));
const Social_Profile = lazy(() => import ('./pages/social/profile'));

const App = ({ signOut, user }) => {    

    const [authUserData, setAuthUserData] = useState(null)
    const [authUsername, setAuthUsername] = useState(null)
    const [authUserId, setAuthUserId] = useState(null)
    const [authUserEmail, setAuthUserEmail] = useState(null)
    const [siteUser, setSiteUser] = useState({})

    useEffect(() => {
        const getAuthUser = async () => {
            const data = await Auth.currentUserInfo()
            setAuthUserData(data)
            setAuthUserId(data.id)
            setAuthUserEmail(data.attributes.email)
            setAuthUsername(data.username)

            setSiteUser({
                "authUserId": authUserId,
                "email": data.attributes.email,
                "username": data.username
            })
        }

        try{
            getAuthUser()
        }
        catch(err) {
            console.log('getAuthenticatedUser error', err)
        }
        
    }, [])

    const styles = {
        
    }

    return (
        <div className="w-screen justify-center text-center p-0 m-auto h-screen">
{/* <div class="max-w-4xl w-full"></div> */}
            <div className="bg-gray-500 flex justify-center text-5xl w-screen font-bold text-white border-b-2 border-gray-600 shadow-lg">
                <div className="w-30 h-30 pt-4 pr-2">
                    Three
                </div>
                <div className="w-20 h-20 shadow-lg rounded-full">
                    <img src="/images/sly_face.jpg" class="w-20 h-20 rounded-full mx-auto shadow-lg border-2 border-gray-700" />
                </div>
                <div className="w-30 h-30 pt-4 pl-2">
                    Grays
                </div>
            </div>

            
            <div>
            <h2>Hi {siteUser.username}!</h2>
            {/* <UserContext.Provider value={ authUserData }> */}
            <UserContext.Provider value={ siteUser }>
                <Router>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Routes>
                            <Route path={RoutePaths.LOGIN} element={<Login />} />
                            <Route path={RoutePaths.PROFILE} element={<Profile user={user} />} />
                            <Route exact path={RoutePaths.DASHBOARD} element={<Dashboard />} />
                            <Route exact path={RoutePaths.CAROUSELS} element={<Carousels />} />
                            <Route exact path={RoutePaths.DRAGANDDROP} element={<DragAndDrop />} />
                            <Route exact path={RoutePaths.FIREBASE_TEST} element={<FIREBASE_TEST />} />
                            <Route exact path={RoutePaths.WILLIAM} element={<William />} />
                            <Route exact path={RoutePaths.TAILWIND} element={<Tailwind />} />
                            <Route exact path={RoutePaths.TAILWIND_EXAMPLE} element={<Tailwind_Example />} />
                            <Route exact path={RoutePaths.SOCIAL_DASHBOARD} element={<Social_Dashboard />} />
                            <Route exact path={RoutePaths.SOCIAL_LOGIN} element={<Social_Login />} />
                            <Route exact path={RoutePaths.SOCIAL_SIGN_UP} element={<Social_Signup />} />
                            <Route exact path={RoutePaths.SOCIAL_PROFILE} element={<Social_Profile />} />
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    </Suspense>
                </Router>

            </UserContext.Provider>
                </div>
            <div class="fixed inset-x-0 bottom-0 bg-gray-500 py-5 mt-12 w-full flex flex-col items-center border-t-2 border-gray-600 text-white shadow-lg">
                Copyright © 2022

            
            
            <div className="absolute bottom-0 left-0 w-15 h-5 p-5">
                <p className="text-xs text-teal-400">
                    v7.6
                </p>
            </div>
            </div>

        </div>
    ); 

};

export default withAuthenticator(App,
    {
        includeGreetings:true,
        hideSignUp: true
    }
)