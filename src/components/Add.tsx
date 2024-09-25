interface AddProps {
    handleAdd: () => void;
  }
  
  export function Add({ handleAdd }: AddProps) {
    return (
      <button
        className= " bg-violet-600 hover:bg-violet-900 text-white p-2 m-2 w-full sm:w-auto px-4 rounded-lg font-bold outline-none"
        onClick={handleAdd}
      >
        Add
      </button>
    );
  }
  