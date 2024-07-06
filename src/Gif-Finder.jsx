import { useState } from "react";
import { AddCategory } from "./components/AddCategoty";
import { GifGrid } from "./components/GifGrid";

export const Gif_Finder = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      alert(`Ya buscaste ${newCategory}`);
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gift Finder</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
