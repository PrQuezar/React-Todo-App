import React from 'react'
import Todo from "./Todo"


function Todolist({ todos ,onRemoveTodo }) { 
 return (
    
 <div style={{height:'100%'}}>
{

todos && todos.map((todo)=>(

<Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}/> 
))
}
</div>
)
}

export default Todolist