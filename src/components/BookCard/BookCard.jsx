import React from 'react';
import { Star } from 'lucide-react';

const BookCard = ({ book }) => {

    console.log(book)

    return (
        <div>
            <div className="card min-h-[455px] bg-base-100 w-full shadow-xs border border-gray-200 rounded-xl">
                <figure className='m-5 rounded-xl h-[200px] bg-[#F3F3F3]'>
                    <img className=' h-[160px]' src={book.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body flex flex-col py-0">
                    <div className='flex gap-5'>
                        {
                            book.tags.map( (tag, index) => <div key={index} className="badge badge-soft badge-success rounded-2xl text-[#23BE0A]">{tag}</div> )
                        }
                        {/* <div className="badge badge-soft badge-success rounded-2xl text-[#23BE0A]">Young Adult</div>
                        <div className="badge badge-soft badge-success rounded-2xl text-[#23BE0A]">Identity</div> */}
                    </div>
                    <h2 className="card-title playFair text-xl my-2">
                        {book.bookName}
                    </h2>
                    <p className='text-gray-600 font-semibold '>By : {book.author}</p>
                    <div className="card-actions justify-between border-t border-dashed border-gray-300 py-5 mt-2">
                        <span className='text-gray-500 font-semibold'> {book.category} </span>
                        <span className='text-gray-500 font-semibold flex gap-2 items-center'> {book.rating} <Star className='w-5'/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;