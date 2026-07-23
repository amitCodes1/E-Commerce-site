const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white rounded-2xl shadow-md p-4">
      <div className="w-full h-52 bg-gray-300 rounded-xl"></div>

      <div className="mt-4 h-5 bg-gray-300 rounded w-3/4"></div>

      <div className="mt-3 h-4 bg-gray-300 rounded w-1/2"></div>

      <div className="mt-4 h-8 bg-gray-300 rounded w-1/3"></div>

      <div className="mt-5 h-10 bg-gray-300 rounded-xl"></div>
    </div>
  );
};

export default SkeletonCard;