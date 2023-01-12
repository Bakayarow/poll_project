import React, { useState, useEffect } from 'react';

const MyStep = (props) => {
    return <div>Question n°{props.index + 1}</div>;
};

const MyComponent = () => {
   


    const [usersArray , setsetionItems ] = useState([])




    const getSetionItems = async () =>{
        try {    
            const res = await fetch("http://localhost:1337/api/items/section/18");
            const data = await res.json()
        
            setsetionItems(data)
          
        } catch (error) {
          console.log(error)
        }

      }
      useEffect(() =>{
        getSetionItems()
      },[])

     
    const [selected, setSelected] = useState(0);
    const handleAssigneeNextOnClick = (e) => {
        setSelected((prev) => {
        if (prev === usersArray.length - 1) {
            return 0;
        } else {
            return (prev + 1) % usersArray.length;
        }
        });
        e.preventDefault();
    };
    const handleAssigneePreviousOnClick = () => {
        setSelected((prev) => {
        if (prev === 0) {
            return 0;
        } else {
            return prev - 1;
        }
        });
    };


  

    console.log(usersArray);

    return (
        <div>
        { <p style={{ color: "red" }}>{usersArray.length > 0 ? usersArray[selected].name : null} </p>}
        <div style={{ padding: "2rem" }}>
            <button onClick={handleAssigneePreviousOnClick}>...previous</button>{" "}
            <button onClick={handleAssigneeNextOnClick}>next...</button>
        </div>
        </div>
    );





    
};

export default MyComponent;
