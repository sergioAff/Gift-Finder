import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGifs = async () => {
    const newGifs = await getGif(category);
    setGifs(newGifs);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchGifs();
  }, []);
  return {
    gifs,
    isLoading,
  };
};
