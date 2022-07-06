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

    useEffect(() => {
        const getAuthUser = async () => {
            const data = await Auth.currentUserInfo()
            setAuthUserData(data)
            setAuthUserId(data.id)
            setAuthUserEmail(data.attributes.email)
            setAuthUsername(data.username)
        }

        try{
            getAuthUser()
        }
        catch(err) {
            console.log('getAuthenticatedUser error', err)
        }
        
    }, [])

    const styles = {
        appContainer: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
        todo: {  marginBottom: 15 },
        input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
        todoName: { fontSize: 20, fontWeight: 'bold' },
        todoDescription: { marginBottom: 0 },
        appButton: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
    }

    

    const [authUserData, setAuthUserData] = useState(null)
    const [authUsername, setAuthUsername] = useState(null)
    const [authUserId, setAuthUserId] = useState(null)
    const [authUserEmail, setAuthUserEmail] = useState(null)

    console.log("authUserData:", authUserData)
    console.log("authUserId:", authUserId)
    console.log("authUserEmail:", authUserEmail)
    console.log("authUsername:", authUsername)

    console.log("WHILE USER IN PAGE IS:", user)
  
    return (
        <div style={styles.appContainer}>

            {/* <div class="text-xl text-center">Three Grays</div> */}
            {/* <h2>Hi {user.username}!</h2> */}
            <UserContext.Provider value={ authUserData }>
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

            
            
            <div class="absolute bottom-0 left-0 w-15 h-5 p-5">
                <p class="text-xs text-teal-400">
                    v7.1
                </p>
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