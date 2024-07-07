import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  const addValue = (event) => {
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) {
      alert("Debe escribir más de 1 caracter");
      event.preventDefault();
      return;
    } else {
      onNewCategory(newInputValue);
      event.preventDefault();
      setInputValue("");
    }
  };

  return (
    <form action="" onSubmit={addValue} className="relative w-[60dvw] mb-10">
      <input
        type="text"
        placeholder="Buscar gif..."
        value={inputValue}
        onChange={onChange}
        className="w-full border border-gray-600 ring-0 px-3 py-2 rounded-md placeholder:text-gray-300 bg-gray-800 text-gray-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </form>
  );
};
