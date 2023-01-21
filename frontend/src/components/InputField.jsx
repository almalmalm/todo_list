import React from 'react';
import AddIcon from '../assets/AddIcon.svg';

const InputField = ({ text, setText, handleSubmit }) => {
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
            handleSubmit();
          }
        }}
      />
      <button onClick={handleSubmit} className="add_button">
        <img src={AddIcon} alt="The add icon" />
      </button>
    </div>
  );
};

export default InputField;
