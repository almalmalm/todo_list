import React from 'react';
import DeleteIcon from '../assets/DeleteIcon.svg';
import DoneIcon from '../assets/DoneIcon.svg';
import { useDispatch } from 'react-redux';
import { deleteAction, toggleAction } from '../redux/todoSlice';

const TodoItem = ({ id, text }) => {
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(deleteAction({ id }));
  };

  const toggleTodo = (id) => {
    dispatch(toggleAction({ id }));
  };

  return (
    <li>
      <div>
        <input
          className="checkbox"
          type="checkbox"
          onClick={() => toggleTodo(id)}
        />
        <span>{text}</span>
      </div>

      <button className="delete_button" onClick={() => deleteTodo(id)}>
        <img src={DeleteIcon} alt="The delete icon" />
      </button>
    </li>
  );
};

export default TodoItem;
