import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"

export default function SessionDetail() {

    const {id} = useParams()
    const [itemsSession, setItemsSession ] = useState([])


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


      console.log(itemsSession)

  return (
    <div>
        <h1> Detail de la session {id}</h1>
        {
            itemsSession.map(item  => <p>{item.name}</p>)
        }
    </div>
  )
}
