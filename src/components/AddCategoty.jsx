import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  const addValue = (event) => {
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) {
      alert("Debe escribir mas de 1 caracter");
      event.preventDefault();
      return;
    } else {
      onNewCategory(newInputValue);
      event.preventDefault();
      setInputValue("");
    }
  };

  return (
    <form action="" onSubmit={addValue}>
      <input
        type="text"
        placeholder="Nuevo gift"
        value={inputValue}
        onChange={onChange}
      />
    </form>
  );
};
