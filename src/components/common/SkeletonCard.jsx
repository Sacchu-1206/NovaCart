const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">

      <div className="h-60 bg-gray-200"></div>

      <div className="p-5">

        <div className="h-6 bg-gray-200 rounded w-3/4"></div>

        <div className="h-4 bg-gray-200 rounded w-1/2 mt-4"></div>

        <div className="h-8 bg-gray-200 rounded w-1/3 mt-5"></div>

        <div className="h-10 bg-gray-200 rounded mt-6"></div>

      </div>

    </div>
  );
};

export default SkeletonCard;