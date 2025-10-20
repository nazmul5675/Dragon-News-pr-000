import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const NewsCard = ({ news }) => {
    const [readMore, setReadMore] = useState(false);
    const { title, rating, total_view, author, image_url, details } = news;
    const dateFormat = new Date(author.published_date).toLocaleDateString();
    return (
        <div>
            <div className="mb-5">
                <div className="bg-gray-200 rounded-t-md p-4">
                    <div className="flex justify-between" >
                        <div className="flex gap-x-3">
                            <img className='rounded-full w-10 h-10' src={author.img} alt="" />
                            <div>
                                <h3 className="font-black">{author.name}</h3>
                                <p className="text-[#706F6F] text-[14px]">{dateFormat}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <CiBookmark size={24} />
                            <CiShare2 size={24} />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-5">
                    <h1 className="font-bold mb-2 text-base">{title}</h1>
                    <img className=" rounded-md mb-3 w-full bg-cover" src={image_url} alt="" />
                    <p className="text-sm"> {readMore ? details : `${details.slice(0, 200)}`}
                        <button onClick={() => setReadMore(!readMore)} className="text-sm mx-1 font-bold text-orange-500"> {readMore ? "Read Less" : "Read More..."}</button>
                    </p>

                    <div className="flex justify-between items-center border-t border-black/10 my-1">
                        <div className="flex items-center gap-x-1  mt-3">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <span className="font-semibold">{rating.number}</span>
                        </div>
                        <div className="flex items-center gap-x-2 mt-3">
                            <FaRegEye />
                            <span className="font-semibold">{total_view}</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;