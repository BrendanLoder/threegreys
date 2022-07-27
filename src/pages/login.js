import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import RoutePaths from '../constants/routes';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default function Login() {

    return (
        <div>
            In login.js
        </div>
    )
}