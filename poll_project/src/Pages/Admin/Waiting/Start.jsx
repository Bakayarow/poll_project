import React, { useState, useEffect } from 'react';

const MyStep = (props) => {
    return <div>Question n°{props.index + 1}</div>;
};

const MyComponent = () => {
    const usersArray = [
        {
            "id": 3,
            "name": "2000 pour le basket ? ",
            "createdAt": "2023-01-12T13:06:47.140Z",
            "updatedAt": "2023-01-12T13:06:48.343Z",
            "publishedAt": "2023-01-12T13:06:48.342Z"
        },
        {
            "id": 4,
            "name": "3000 pour le foot ? ",
            "createdAt": "2023-01-12T13:07:14.405Z",
            "updatedAt": "2023-01-12T13:07:15.443Z",
            "publishedAt": "2023-01-12T13:07:15.443Z"
        },
        {
            "id": 5,
            "name": "10€ de ticket restaurant ? ",
            "createdAt": "2023-01-12T13:08:14.204Z",
            "updatedAt": "2023-01-12T13:08:15.449Z",
            "publishedAt": "2023-01-12T13:08:15.448Z"
        },
        {
            "id": 6,
            "name": "5000 pour l'achat des ballons ? ",
            "createdAt": "2023-01-12T13:08:43.516Z",
            "updatedAt": "2023-01-12T13:08:44.584Z",
            "publishedAt": "2023-01-12T13:08:44.584Z"
        }
    ];




    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    
    useEffect(() => {
        fetch("http://localhost:1337/api/items/section/1")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setDataLength(data.length);
          });
      }, []);
    console.log(data);


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
    return (
        <div>
        <p style={{ color: "red" }}>
            {usersArray[selected].name}
        </p>
        <div style={{ padding: "2rem" }}>
            <button onClick={handleAssigneePreviousOnClick}>...previous</button>{" "}
            <button onClick={handleAssigneeNextOnClick}>next...</button>
        </div>
        </div>
    );





    
};

export default MyComponent;
