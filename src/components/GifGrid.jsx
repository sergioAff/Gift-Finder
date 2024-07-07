import { Gifitem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { LoadingSpinner } from "./LoadingSpinner";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <div className=" mx-5 pb-5 pt-1 border border-gray-400 rounded-md bg-gradient-to-b from-gray-500 to-blue-950 shadow-lg">
      <h3 className="w-full text-center mb-7 text-2xl font-semibold text-gray-200">
        {category}
      </h3>
      {isLoading && <LoadingSpinner />}
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-3">
        {gifs.map((gif) => (
          <Gifitem key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  );
};
