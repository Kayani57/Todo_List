import React, { useState } from "react";
import { Input } from "./Input";
import { Add } from "./Add";
import { Todo } from "../App";

interface FormProps {
  addTodo: (todo: Todo) => void;
}

export function Form({ addTodo }: FormProps) {
  const [todo, setTodo] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!(todo.title === "" && todo.description === "")) {
      addTodo({ ...todo, status: false });
      setTodo({ title: "", description: "" });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center w-auto p-4 m-4 ">
      <Input todo={todo} handleChange={handleChange}  />
      <Add handleAdd={handleAdd} />
    </div>
  );
}
