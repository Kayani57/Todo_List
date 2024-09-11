import React, { useState } from "react";


interface Todo {
  title: string;
  description: string;
  status: boolean; 
}

const AddTask: React.FC = () => {
 
  const [todo, setTodo] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });

 
  const [todos, setTodos] = useState<Todo[]>([]);

  
  const handleAdd = () => {
   
      setTodos([...todos, { ...todo, status: false }]); 
      setTodo({ title: "", description: "" }); // after pressing 'add' it should clear both screens
    
  };

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
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
    <div className="flex flex-col items-center">
      <div className="flex m-4">
        <input
          type="text"
          name="title"
          placeholder="Title...."
          className="w-80 border-2 border-blue-100 p-2"
          onChange={handleChange}
          value={todo.title}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="w-80 border-2 border-blue-100 p-2 mx-2"
          onChange={handleChange}
          value={todo.description}
        />
        <button
          className="bg-violet-600 hover:bg-violet-900 mx-2 p-2 px-4 rounded-lg text-white font-bold"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <ul className="mt-4 w-full">
        {todos.map((t, index) => (
          <li key={index} className="flex items-center justify-between m-2 p-2 border-2 border-gray-200 rounded-lg">
            <div>
              <h3 className="text-xl font-semibold underline">Title:</h3>
              <h5 className="text-lg ">{t.title}</h5>
              <h3 className="text-xl font-semibold underline">Description:</h3>
              <p className="text-lg text-gray-800">{t.description}</p>
              <p><span className="text-blue-600">Status: </span>{t.status ? <span className="text-green-500">Done</span> : <span className="text-red-600">Not Done</span>}</p> 
            </div>

            <div className="flex">
              <button
                className="bg-blue-600 hover:bg-blue-900 mx-1 p-2 px-4 rounded-lg text-white font-bold"
                onClick={() => toggleStatus(index)}
              >
                {t.status ? "Mark Undone" : "Mark Done"}
              </button>
              <button
                className="bg-red-600 hover:bg-red-900 mx-1 p-2 px-4 rounded-lg text-white font-bold"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTask;
