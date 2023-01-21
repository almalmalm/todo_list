import { useState } from 'react';
import InputField from './components/InputField';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import { useDispatch } from 'react-redux';
import { addAction } from './redux/todoSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addAction({ text }));
    setText('');
  };

  return (
    <div className="App">
      <Navbar />
      <InputField text={text} setText={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
