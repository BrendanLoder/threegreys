import { collection, getDocs } from 'firebase/firestore/lite';
import FirebaseContext from './context/firebase'
import { Button, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { lazy, Suspense, useEffect, useState, useContext } from 'react'
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Amplify, { Predicates } from 'aws-amplify'

import awsExports from "./aws-exports";
import RoutePaths from './constants/routes'
const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy(() => import ('./pages/login'));
const NotFound = lazy(() => import ('./pages/not-found'));
const Profile = lazy(() => import ('./pages/profile'));

const initialState = { name: '', description: '' }

const App = ({ signOut, user }) => {

 
    const [cats, setCats] = useState([])
    const { db } = useContext(FirebaseContext);

    async function getCats() {
        const catsCol = collection(db, 'cats');
        const catSnapshot = await getDocs(catsCol);
        const catList = catSnapshot.docs.map(doc => doc.data());
        setCats(catList);
    }

    useEffect(() => {
        getCats()
    }, [])


    const styles = {
        container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
        todo: {  marginBottom: 15 },
        input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
        todoName: { fontSize: 20, fontWeight: 'bold' },
        todoDescription: { marginBottom: 0 },
        button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
    }
  
    return (
        <div style={styles.container}>
            <h1>Hi {user.username}!</h1>
            {/* <Button onClick={() => signOut()} value="Sign Out">Sign Out </Button> */}

            <h2>Three Grays</h2>
            

            {/* CATS:<br />
            {
                cats.map((cat, index) => (
                    <div key={cat.id ? cat.id : index}>
                        <p>{cat.name}</p>
                        <p>{cat.nickname}</p>
                    </div>
                ))
            } */}
            <Router>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path={RoutePaths.LOGIN} element={<Login />} />
                        <Route path={RoutePaths.PROFILE} element={<Profile user={user} />} />
                        <Route exact path={RoutePaths.DASHBOARD} element={<Dashboard />} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </Suspense>
            </Router>

            <br/><br/>
            
            <small>v2.0</small>

        </div>
    ); 

};

export default withAuthenticator(App,
    {
        includeGreetings:true,
        hideSignUp: true
    }
)