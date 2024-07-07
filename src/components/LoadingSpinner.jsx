export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center space-x-2 animate-bounce">
      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
    </div>
  );
};
