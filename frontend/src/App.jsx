import { useState } from 'react';
import InputField from './components/InputField';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  return (
    <div className="App">
      <Navbar />
      <InputField
        todos={todos}
        setTodos={setTodos}
        text={text}
        setText={setText}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
