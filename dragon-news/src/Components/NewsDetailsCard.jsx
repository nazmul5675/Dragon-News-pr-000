import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router';

const NewsDetailsCard = ({ newsDetails }) => {
    const { title, details, image_url, category_id } = newsDetails;
    return (
        <div className="flex flex-col items-baseline-last gap-y-8 p-5 bg-gray-100 rounded-md mt-5">
            <img className='w-full object-cover' src={image_url} alt="" />
            <h2 className='font-bold text-2xl'>
                {title}
            </h2>
            <p className='text-[#706F6F] text-sm'>
                {details}
            </p>
            <button className="btn bg-[#D72050] border-none text-white rounded-none">
                <Link className="flex items-center gap-x-2" to={`/category/${category_id}`}> <FaArrowLeftLong /> All news in this category</Link>
            </button>
        </div>
    );
};

export default NewsDetailsCard;