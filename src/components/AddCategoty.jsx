import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  const addValue=(event)=>{
    onNewCategory(inputValue.trim())
    event.preventDefault()
    setInputValue('')
  }

  return (
    <form action="" onSubmit={addValue} >
      <input
        type="text"
        placeholder="Valor nuevo"
        value={inputValue}
        onChange={onChange}
      />
    </form>
  );
};
