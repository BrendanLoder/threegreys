import { Authenticator, Button, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { lazy, Suspense, useEffect, useState, useRef } from 'react'
import {Switch, Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Amplify, { API, graphqlOperation, Auth, Predicates } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import awsExports from "./aws-exports";
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';
import RoutePaths from './constants/routes'
const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy(() => import ('./pages/login'));
const NotFound = lazy(() => import ('./pages/not-found'));
const Profile = lazy(() => import ('./pages/profile'));

Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = ({ signOut, user }) => {
    // const App = () => {

  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }



// ------------------------ DELETED WHILE TESTING ROUTER

    const styles = {
        container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
        todo: {  marginBottom: 15 },
        input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
        todoName: { fontSize: 20, fontWeight: 'bold' },
        todoDescription: { marginBottom: 0 },
        button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
    }

    // DELETE TODOS
    async function deleteAll (){
        try{
            await DataStore.delete(Todo, Predicates.ALL);
        } catch(err){
            console.log('there was an error in deleting', err)
        }
    }
    // deleteAll()

    async function getTodos(){
        try {
            const todos = await DataStore.query(Todo);
            setTodos(todos)
        } catch (error) {
            console.log("Error retrieving todos", error);
        }
    }

    async function addTodo() {
        try{
            if (!formState.name || !formState.description) return
            const todo = { ...formState }
            const datastoresave =  await DataStore.save(new Todo(todo));
            setTodos([...todos, todo])
            setFormState(initialState)
        } catch(err){
            console.log('there was an error in saving', err)
        }

    } 

/// ---- END DELETED WHILE TESTING ROUTER
  
    return (
        <div style={styles.container}>
        {/* <h1>Hi {user.username}!</h1> */}
        <Button onClick={() => signOut()} value="Sign Out">Sign Out </Button>

        <h2>Three Grays</h2>
        <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
        />

        <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
        />

        <button style={styles.button} onClick={addTodo}>Create Todo</button>

        {
            todos.map((todo, index) => (
            <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
            </div>
            ))
        }
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
        
        <small>v1.3</small>

        </div>
    ); 

};

// export default App
export default withAuthenticator(App,
    {
        includeGreetings:true,
        hideSignUp: true
    }
)