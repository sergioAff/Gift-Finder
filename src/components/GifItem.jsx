export const Gifitem = ({ title, url }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105">
      <figure className="flex flex-col items-center p-4">
        <img
          src={url}
          alt={title}
          className="rounded-md mb-2 w-full h-64 object-cover"
        />
        <figcaption className="text-center text-gray-200 mb-2">
          {title}
        </figcaption>
      </figure>
    </div>
  );
};
