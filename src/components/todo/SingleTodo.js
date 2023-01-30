import React, { useState, useRef } from 'react';

function SingleTodo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, inputRef.current.value]);
    inputRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
export default SingleTodo;