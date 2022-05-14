import { Authenticator, Button, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { useEffect, useState, useRef } from 'react'
import Amplify, { API, graphqlOperation, Auth, Predicates } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import awsExports from "./aws-exports";
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = ({ signOut, user }) => {

  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])
//   const [newTodos, setNewTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

//   function tester(){
//     return listTodos
//   } 

//   const foo = tester()
//   console.log('it is ', foo)



// ------------------------ START NEW

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

/// ---- END NEW

  
    return (
        <div style={styles.container}>
        <h1>Hi {user.username}!</h1>
        <Button onClick={() => signOut()} value="Sign Out">Sign Out </Button>

        <h2>Amplify Todos</h2>
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
        <br/><br/>
        v1.2.2
        </div>
    ); 

};

export default withAuthenticator(App,
    {
        includeGreetings:true,
        hideSignUp: true
    }
)