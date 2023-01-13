import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function TodoList() {
  const {id} = useParams()
  const [itemsSession, setItemsSession ] = useState([])
  const [sectionItem, setSectionItem] = useState("")

 
  const addSectionItem = async (e) => {
    e.preventDefault()
    if (!sectionItem.trim()) {
      console.log("champ  vide")
      return
    }
    try {
      const newItem = {
        data: {
          name: sectionItem,
          sessionId : id
        }
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
    };

    const res = await fetch(`http://localhost:1337/api/items`,requestOptions);

    
    getItemsBySession()

    } catch (error) { console.log(error) }
  }

  const deleteItemSection = async (id) => {
    try {

    
    fetch(`http://localhost:1337/api/items/${id}`, { method: 'DELETE' })

      const ArrayFiltre = itemsSession.filter(item => item.id !== id)
      setItemsSession(ArrayFiltre)

    } catch (error) { console.log(error) }
  }

  const getItemsBySession = async () =>{
    try {    
        const res = await fetch(`http://localhost:1337/api/items/section/${id}`);
        const data = await res.json()
    
        setItemsSession(data)
      
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() =>{
    getItemsBySession ()
  },[])



  return (
    <div>
      <form  onSubmit={addSectionItem}>
        <input 
          className='addquestion'
          type="text"
          onChange={e => setSectionItem(e.target.value)}
        />
        <button className='buttonquestion' type="submit">+</button>
      </form>

      <h2>Questions de la Seance</h2>
      <ul>
       { itemsSession.map(item => 
           <li key={item.id}><i><FontAwesomeIcon icon={faTrash} onClick={() => deleteItemSection(item.id)}/>{item.name}</i></li>)}
      </ul>
    </div>
  );
}

export default TodoList;
