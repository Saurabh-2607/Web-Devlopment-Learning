import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Todos , setTodos] = useState([{
    title:"go to the gym",
    Description:"go to the gym from 5-7",
    completed:false
  },{
    title:"go to the mall",
    Description:"go to the gym from 5-8",
    completed:true
  }]);

  function addTodo(){
    setTodos([...Todos,{
      title:"new task",
      Description:"new task description",
      completed:false
    }])
  }

  return (
    <div>
<button onClick={addTodo}>add a new random task</button>

    {Todos.map(function(todo){
      return <Todo title={todo.title} Description={todo.Description}/>
})}
    </div>
  
  )
}

function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.Description}</h2>
    </div>
  );
}

export default App
