import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Form } from './components/Form';
import { List } from './components/List';
import './App.css';

export interface Todo {
  title: string;
  description: string;
  status: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleStatus = (index: number) => {
    const updatedTodos = todos.map((t, i) =>
      i === index ? { ...t, status: !t.status } : t
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <h1 className="text-3xl text-center p-4 font-serif font-extrabold sm:text-5xl">Todo List</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} toggleStatus={toggleStatus} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
