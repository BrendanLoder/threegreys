import {withAuthenticator } from '@aws-amplify/ui-react';
import {Auth} from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css';
import { lazy, Suspense, useState, useEffect, CSSProperties } from 'react'
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import RoutePaths from './constants/routes'
import UserContext from './context/user'
import SiteHeader from './components/site-header'
import SiteFooter from './components/site-footer'
import RingLoader from "react-spinners/RingLoader";

import FirebaseUserContext from './context/firebaseUser';
import useFirebaseAuthListener from './hooks/use-firebase-auth-listener';

const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy(() => import ('./pages/login'));
const NotFound = lazy(() => import ('./pages/not-found'));
const Carousels = lazy(() => import ('./pages/carousels'));
const Profile = lazy(() => import ('./pages/profile'));
const DragAndDrop = lazy(() => import ('./pages/draganddrop'));
const FIREBASE_TEST = lazy(() => import ('./pages/firebase-test'));
const Tailwind = lazy(() => import ('./pages/tailwind'));
const Tailwind_Example = lazy(() => import ('./pages/tailwind_example'));
const Playground = lazy(() => import ('./pages/playground'));
const William = lazy(() => import ('./pages/william'));
const Social_Dashboard = lazy(() => import ('./social/pages/dashboard'));
const Social_Signup = lazy(() => import ('./social/pages/signup'));
const Social_Login = lazy(() => import ('./social/pages/login'));
const Social_Profile = lazy(() => import ('./social/pages/profile'));

const App = ({ signOut, user }) => {    

    const { firebaseAuthUser } = useFirebaseAuthListener();

    const [authUserData, setAuthUserData] = useState(null)
    const [authUsername, setAuthUsername] = useState(null)
    const [authUserId, setAuthUserId] = useState(null)
    const [authUserEmail, setAuthUserEmail] = useState(null)
    const [siteUser, setSiteUser] = useState({})
    
    return (
        <div className="w-screen p-0 m-auto bg-gray-200 max-w-7xl">
            
            <SiteHeader />
            
            <div>
                {/* <h2>Hi {siteUser.username}!</h2>  */}
                <UserContext.Provider value={ siteUser }>

                        <FirebaseUserContext.Provider value={firebaseAuthUser}>

                            <Router>
                                <Suspense fallback={<div className="w-full text-center p-2"><RingLoader color="gray" loading={true} cssOverride={{margin: "0 auto"}} size={40} /></div>}>
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
                                        <Route exact path={RoutePaths.PLAYGROUND} element={<Playground />} />
                                        <Route exact path={RoutePaths.SOCIAL_DASHBOARD} element={<Social_Dashboard />} />
                                        <Route exact path={RoutePaths.SOCIAL_LOGIN} element={<Social_Login />} />
                                        <Route exact path={RoutePaths.SOCIAL_SIGN_UP} element={<Social_Signup />} />
                                        <Route exact path={RoutePaths.SOCIAL_PROFILE} element={<Social_Profile />} />
                                        <Route path="*" element={<NotFound/>} />
                                    </Routes>
                                </Suspense>
                            </Router>

                        </FirebaseUserContext.Provider>

                </UserContext.Provider>
            </div>
            
            <SiteFooter />

        </div>
    ); 

};

export default withAuthenticator(App,
    {
        includeGreetings:true,
        hideSignUp: true
    }
)