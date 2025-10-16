import { useState } from 'react'

import './App.css'
import TodoCreate from './components/TodoCreate'
import Todolist from './todoList'

function App() {
 const [todo, setTodo] = useState([])
 const createTodo = (newTodo) =>{
  setTodo([...todo, newTodo])

 }
 console.log(todo)
const removedTodo =(todoid)=>{
  
setTodo(todo.filter((todo) => todo.id !== todoid))
}
  return (
    <div className="App">
      <div className='orta'>
     <TodoCreate createTodom ={createTodo}/>
 <Todolist todos = {todo} onRemoveTodo={removedTodo}/>
     </div>
    </div>
  )
}

export default App
