import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center font-poppins text-gray-200">
      <h1 className="text-5xl font-bold mt-10 mb-5 text-gray-200 shadow-lg">
        Gif Finder
      </h1>
      <AddCategory onNewCategory={onAddCategory} />
      <div className="w-full grid gap-5 p-5">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
