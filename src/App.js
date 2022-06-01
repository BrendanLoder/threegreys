import { collection, getDocs } from 'firebase/firestore/lite';
import FirebaseContext from './context/firebase'
import { Button, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { lazy, Suspense, useEffect, useState, useContext } from 'react'
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Amplify, { Predicates } from 'aws-amplify'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import awsExports from "./aws-exports";
import RoutePaths from './constants/routes'
import $ from "jquery"

const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy(() => import ('./pages/login'));
const NotFound = lazy(() => import ('./pages/not-found'));
const Carousels = lazy(() => import ('./pages/carousels'));
const Profile = lazy(() => import ('./pages/profile'));
const FIREBASE_TEST = lazy(() => import ('./pages/firebase-test'));

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

        if (typeof Slider == "undefined") {
            console.log("Slider is not installed");
          } else {
            console.log("Slider is installed correctly!");
          }
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

            <h1>Three Grays</h1>
            <h2>Hi {user.username}!</h2>
            {/* <Button onClick={() => signOut()} value="Sign Out">Sign Out </Button> */}
            

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
                        <Route exact path={RoutePaths.CAROUSELS} element={<Carousels />} />
                        <Route exact path={RoutePaths.FIREBASE_TEST} element={<FIREBASE_TEST />} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </Suspense>
            </Router>

            <br/><br/>
            
            <small>v4.0</small>

        </div>
    ); 

};

export default withAuthenticator(App,
    {
        includeGreetings:true,
        hideSignUp: true
    }
)