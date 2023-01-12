import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function TodoList() {
  // State to store the list of todos
  const [todos, setTodos] = useState([]);

  // State to store the current todo being added
  const [currentTodo, setCurrentTodo] = useState('');

  // Function to handle adding a new todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, currentTodo]);
    setCurrentTodo('');
  }

  // Function to handle removing a todo
  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input className='addquestion'
          type="text"
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
        />
        <button className='buttonquestion' type="submit">+</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <i><FontAwesomeIcon icon={faTrash}  onClick={() => handleRemoveTodo(index)}/></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
