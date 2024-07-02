import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGif";

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      const newGifs = await getGif(category);
      setGifs(newGifs);
    };
    
    fetchGifs();
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div>
        {gifs.map((gif) => (
          <div key={gif.id}>
            <img src={gif.url} alt={gif.title} />
            <p>{gif.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
