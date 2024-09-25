
import { Todo } from "../App";

interface ListProps {
  todos: Todo[];
  toggleStatus: (index: number) => void;
  handleDelete: (index: number) => void;
}

export function List({ todos, toggleStatus, handleDelete }: ListProps) {
  return (
    <ul className="mt-4 w-full ">
      {todos.map((t, index) => (
        <li
          key={index}
          className="flex flex-col sm:flex-row  justify-between m-2 p-4 border-2 border-gray-200 rounded-lg bg-white"
        >
          <div className="mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold underline">Title:</h3>
            <h5 className="text-lg">{t.title}</h5>
            <h3 className="text-xl font-semibold underline">Description:</h3>
            <p className="text-lg text-gray-800">{t.description}</p>
            <p>
              <span className="text-blue-600">Status: </span>
              {t.status ? (
                <span className="text-green-500">Done</span>
              ) : (
                <span className="text-red-600">Not Done</span>
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row">
            <button
              className="bg-blue-600 hover:bg-blue-900 m-1 py-2 px-4 rounded-lg text-white font-bold w-full sm:w-auto"
              onClick={() => toggleStatus(index)}
            >
              {t.status ? "Mark Undone" : "Mark Done"}
            </button>
            <button
              className="bg-red-600 hover:bg-red-900 m-1 py-4 px-7 rounded-lg text-white font-bold w-full sm:w-auto"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
