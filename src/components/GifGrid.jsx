import { Gifitem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h3>Cargando...</h3>}
      <div className="card-grid">
        {gifs.map((gif) => (
          <Gifitem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
