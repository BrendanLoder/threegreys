import React from 'react';
import {firebase, db} from './lib/firebase';
import FirebaseContext from './context/firebase';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{firebase, db}}>
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>
);

reportWebVitals();