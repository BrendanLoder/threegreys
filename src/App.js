import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { lazy, Suspense } from 'react'
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import RoutePaths from './constants/routes'

const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy(() => import ('./pages/login'));
const NotFound = lazy(() => import ('./pages/not-found'));
const Carousels = lazy(() => import ('./pages/carousels'));
const Profile = lazy(() => import ('./pages/profile'));
const DragAndDrop = lazy(() => import ('./pages/draganddrop'));
const FIREBASE_TEST = lazy(() => import ('./pages/firebase-test'));

const App = ({ signOut, user }) => {

    const styles = {
        appContainer: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
        todo: {  marginBottom: 15 },
        input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
        todoName: { fontSize: 20, fontWeight: 'bold' },
        todoDescription: { marginBottom: 0 },
        appButton: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
    }
  
    return (
        <div style={styles.appContainer}>

            <h1>Three Grays</h1>
            <h2>Hi {user.username}!</h2>
            <Router>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path={RoutePaths.LOGIN} element={<Login />} />
                        <Route path={RoutePaths.PROFILE} element={<Profile user={user} />} />
                        <Route exact path={RoutePaths.DASHBOARD} element={<Dashboard />} />
                        <Route exact path={RoutePaths.CAROUSELS} element={<Carousels />} />
                        <Route exact path={RoutePaths.DRAGANDDROP} element={<DragAndDrop />} />
                        <Route exact path={RoutePaths.FIREBASE_TEST} element={<FIREBASE_TEST />} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </Suspense>
            </Router>

            
            
            <div><br/><small>v5.2</small><br/><br/></div>

        </div>
    ); 

};

export default withAuthenticator(App,
    {
        includeGreetings:true,
        hideSignUp: true
    }
)