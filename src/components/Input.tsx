interface InputProps {
  todo: { title: string; description: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ todo, handleChange }: InputProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-2 sm:w-fit  w-full">
      <input
        type="text"
        name="title"
        placeholder="Title..."
        className="w-auto sm:w-90 border-2 border-blue-200 p-2 m-2 outline-none"
        onChange={handleChange}
        value={todo.title}
      />
      <input
        type="text"
        name="description"
        placeholder="Description..."
        className="w-auto sm:w-90 border-2 border-blue-200 p-2 m-2 outline-none"
        onChange={handleChange}
        value={todo.description}
      />
    </div>
  );
}
