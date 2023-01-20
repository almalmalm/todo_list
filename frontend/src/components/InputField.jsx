import React from 'react';
import AddIcon from '../assets/AddIcon.svg';

const InputField = ({ todos, setTodos, text, setText }) => {
  const addTodo = (todos, text) => {
    const newTodo = {
      id: new Date().toISOString(),
      text: text,
      completed: false,
    };
    if (text.trim() !== '') {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
    }

    setText('');
  };

  return (
    <div className="form">
      <input
        placeholder="Add a new todo..."
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(todos, text);
          }
        }}
      />
      <button onClick={() => addTodo(todos, text)} className="add_button">
        <img src={AddIcon} alt="The add icon" />
      </button>
    </div>
  );
};

export default InputField;
