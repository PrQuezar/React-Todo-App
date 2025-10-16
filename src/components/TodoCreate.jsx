import React, { useState } from 'react'
import './todo.css'
function TodoCreate({createTodom}) {
    const [input, setInput] = useState("")
    const [error, setError] = useState(false)
    const createTod = () =>{
        
        if (!input) {
            setError(true);
            return;
        }else{
            setError(false);
            
        }
        

       
        const req = {
            id: Math.floor(Math.random()*99999999),
            content: input
            
        }

        
        createTodom(req); 

        
        setInput(""); 
    }
  return (
    <div className='bas-todo'>
        <div className='ort'>
        <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
         type='text' 
         placeholder='Listeye Ekleme' 
         className='input'></input>
        <button className='buton' onClick={createTod}>Ekle</button>
        
        </div>
        {error && <span className='hata'
        style={{
                        color: 'red',        // Yazı rengi kırmızı
                        fontSize: '20px',    // Yazı boyutu
                        fontWeight: '600',   // Kalınlık
                        display: 'block',    // Tam satırı kaplaması için (alt satıra inmesini sağlar)
                        textAlign: 'center', // Yatayda ortalama
                        marginTop: '5px',    // Üstteki bloktan boşluk
                        width: '100%',       // Bulunduğu alanı kaplama
                    }}>Lütfen bir görev girin!</span>}
    </div>
  )
}

export default TodoCreate