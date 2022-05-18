import { Authenticator, Button, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { useEffect, useState, useRef } from 'react'
import Amplify, { API, graphqlOperation, Auth, Predicates } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import awsExports from "./aws-exports";
import { DataStore } from '@aws-amplify/datastore';
import { Blog } from './models';
import { Todo } from './models';
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = ({ signOut, user }) => {

  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])
  const [newTodos, setNewTodos] = useState([])

  useEffect(() => {
    // fetchTodos()
    getNewTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

//   async function fetchTodos() {
//     try {
//       const todoData = await API.graphql(graphqlOperation(listTodos))
//       const todos = todoData.data.listTodos.items
//       setTodos(todos)
//     } catch (err) { console.log('error fetching todos') }
//   }

//   async function addTodo() {
//     try {
//       if (!formState.name || !formState.description) return
//       const todo = { ...formState }
//       setTodos([...todos, todo])
//       setFormState(initialState)
//       await API.graphql(graphqlOperation(createTodo, {input: todo}))
//     } catch (err) {
//       console.log('error creating todo:', err)
//     }
//   }

  async function addNewTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setNewTodos([...todos, todo])
      setFormState(initialState)
      
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  async function setDatastoreTodos(){
      var todaysDate = new Date()
        var myDateTime = todaysDate.getTime();
        var myMonth = todaysDate.getMonth()
        var myDay = todaysDate.getDay()
        var myYear = todaysDate.getFullYear()
      try{
        const datastoretry = await DataStore.save(
            new Todo({
                "name": `Todays date: ${myMonth}/${myMonth}/${myYear}` ,
                "description": "The Current Time is " + myDateTime
            })
        );
          
      }catch (err){
        console.log('error creating DATASTORE todo:', err)
      }

  } 

  setDatastoreTodos()

  async function getNewTodos(){
    try {
        const newTodos = await DataStore.query(Todo);
        setNewTodos(newTodos)
        // console.log(todos)
        console.log("Todos retrieved successfully!", JSON.stringify(newTodos, null, 2));
      } catch (error) {
        console.log("Error retrieving posts", error);
      }
  }

//   const newTodos = await getDataStore()
//   console.log("newTodo", newTodos)

async function deleteAll (){
    await DataStore.delete(Todo, Predicates.ALL);
}

// deleteAll()

const styles = {
    container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
    todo: {  marginBottom: 15 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    todoName: { fontSize: 20, fontWeight: 'bold' },
    todoDescription: { marginBottom: 0 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
  }

//   console.log(user)

  
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
          {/* <button style={styles.button} onClick={addTodo}>Create Todo</button> */}
          {/* {
            todos.map((todo, index) => (
              <div key={todo.id ? todo.id : index} style={styles.todo}>
                <p style={styles.todoName}>{todo.name}</p>
                <p style={styles.todoDescription}>{todo.description}</p>
              </div>
            ))
          } */}
          NEW:
          {
            newTodos.map((todo, index) => (
              <div key={todo.id ? todo.id : index} style={styles.todo}>
                <p style={styles.todoName}>{todo.name}</p>
                <p style={styles.todoDescription}>{todo.description}</p>
              </div>
            ))
          }
        </div>
  ); 

};

export default withAuthenticator(App,
    {
        includeGreetings:true,
        hideSignUp: true
    }
)