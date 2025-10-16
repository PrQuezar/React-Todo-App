import React, { useState } from 'react' 
import { TiDelete } from "react-icons/ti";
import { RiPencilLine } from "react-icons/ri";
import "./components/todo.css" 
import { FaCheck } from "react-icons/fa";

function Todo({ todo, onRemoveTodo }) { 
    
 const [edittable,setEditTable] = useState(false)
    
    const [editInput, setEditInput] = useState(todo.content); 
 
 


 const removedTodo = () => {
 onRemoveTodo(todo.id); 
 }

    // 🚨 YENİ: Kalem ikonuna basıldığında tetiklenir
    const handleEditClick = () => {
        // Düzenleme modunu aç
        setEditTable(true);
      
    }

    // 🚨 YENİ: Onay ikonuna basıldığında (Kaydetme) tetiklenir
    const handleSaveClick = () => {
      
        if (editInput.trim() === "") {
             
             alert("Lütfen bir içerik girin!");
             return;
        }
        setEditTable(false);
    }
    
   

return (
<div className='todo-item-container'> 

 <div className='todo-content-text'> 
           
            {edittable ? (
                <input 
                    type="text"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    style={{
                        fontSize: '18px', 
                        fontWeight: '500', 
                        // Sizin mevcut metin stilinize uyması için
                        width: '100%', 
                        padding: '5px', 
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                />
            ) : (
                // Normal Metin Görüntüsü
                <span title={todo.content}> 
                    {todo.content}
                </span>
            )}
      </div>

<div className='todo-icons-wrapper'> 

<span 
 className='icon-wrapper delete-icon-wrapper' 
onClick={removedTodo}
 
title="Silmek için tıklayın"
>

<TiDelete style={{ fontSize: '32px', color: '#ff4d4f' }} /> 
</span>


<span 
 className='icon-wrapper edit-icon-wrapper' 

title={edittable ? "Kaydetmek için tıklayın" : "Düzenlemek için tıklayın"} // Tooltip güncellendi
>
{
edittable ? 
        
        <FaCheck 
            style={{ fontSize: '25px', color: '#1890ff' }} 
            onClick={handleSaveClick} 
        /> : 
        
        <RiPencilLine 
            style={{ fontSize: '32px', color: '#1890ff' }} 
            onClick={handleEditClick} 
        />
}

 </span>
 
 </div>
 </div>
 )
}

export default Todo