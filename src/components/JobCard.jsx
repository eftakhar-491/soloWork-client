import { Link } from "react-router-dom";

const JobCard = ({ data }) => {
  return (
    <Link
      to={`/job/${data?._id}`}
      className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-gray-800 ">
          Deadline: 28/05/2024
        </span>
        <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full ">
          {data?.category}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          {data?.job_title}
        </h1>

        <p className="mt-2 text-sm text-gray-600 ">{data?.description}</p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">
          Range: ${data?.min_price} - ${data?.max_price}
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">Total Bids: 0</p>
      </div>
    </Link>
  );
};

export default JobCard;
