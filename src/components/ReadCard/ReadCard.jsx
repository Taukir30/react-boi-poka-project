import React from 'react';
import { useNavigate } from 'react-router';

const ReadCard = ({ readBook }) => {

    // console.log(readBook.bookId)
    const navigate = useNavigate();

    const handNavigate = () => {
        navigate(`/book/${readBook.bookId}`)
    }

    return (
        <div>
            <div className="hero  h-[210px] border border-gray-200 rounded-xl my-1 flex ">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className='bg-base-300 p-2 h-[180px] w-[300px] flex justify-center items-center rounded-md'>
                        <img src={readBook.image} className="h-[150px] rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-full'>
                        <div className='flex flex-col gap-1 my-1'>
                            <h1 className="text-xl font-bold playFair"> {readBook.bookName} </h1>
                            <span className='text-xs text-gray-600 font-semibold '>
                                By : {readBook.author}
                            </span>
                        </div>
                        
                        <div>
                            <div>
                                <span className='font-bold text-sm'>Tag </span>
                                {
                                    readBook.tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success rounded-2xl text-[#23BE0A] mx-2">{tag}</div>)
                                }
                                <div className='badge badge-soft badge-success rounded-2xl text-gray-500 mx-2'><span>Year of Publishing: </span> {readBook.yearOfPublishing}</div>
                            </div>
                        </div>
                        <div className='border-b border-gray-200 my-1 py-2'>
                            <div className='badge badge-soft badge-success rounded-2xl text-gray-500 '><span>Number of Pages: </span> {readBook.totalPages}</div>
                            <div className='badge badge-soft badge-success rounded-2xl text-gray-500 mx-2'><span>Publisher: </span> {readBook.publisher}</div>
                            
                        </div>
                        <div></div>

                        <div className='badge bg-indigo-100 text-indigo-600 font-light rounded-2xl h-8'>Category: {readBook.category}</div>
                        <div className='badge bg-orange-100 text-orange-600 font-light rounded-2xl mx-3 h-8'>Rating: {readBook.rating}</div>
                        <button onClick={handNavigate}  className="btn bg-[#23BE0A] text-white font-light rounded-2xl h-8">View Details</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadCard;