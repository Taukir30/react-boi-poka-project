import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setReadList, setWishList } from '../../assets/utility/addToMemory';
import { toast } from 'react-toastify';

const Details = () => {

    const allBooks = useLoaderData();
    const { id } = useParams();

    const book = allBooks.find(singleBook => singleBook.bookId === parseInt(id));

    console.log(id)
    console.log(book)

    const handleReadList = () => {
        setReadList( book.bookId );
        toast('Marked as Read !');
    }

    const handleWishList = () => {
        setWishList( book.bookId );
        toast('Added to Wishlist !');
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={book.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className='flex flex-col gap-5 my-5'>
                            <h1 className="text-3xl font-bold playFair"> {book.bookName} </h1>
                            <span className='text-gray-600 font-semibold '>
                                By : {book.author}
                            </span>
                        </div>
                        <div className='py-3 border-t border-b border-gray-200'>
                            <span className='text-gray-500 font-semibold'> {book.category} </span>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500 my-5'> <strong className='text-black font-bold'>Review : </strong> {book.review} </p>
                            <div>
                                <span className='font-bold text-sm'>Tag </span>
                                {
                                    book.tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success rounded-2xl text-[#23BE0A] mx-2">{tag}</div>)
                                }
                            </div>
                        </div>
                        <div className='border-t border-gray-200 my-5 pt-3'>
                            <table>
                                <tbody>
                                    <tr className='text-sm'>
                                        <td className='text-gray-500'>Number of Pages:</td>
                                        <td className='px-10'> {book.totalPages} </td>
                                    </tr>
                                    <tr className='text-sm'>
                                        <td className='text-gray-500'>Publisher:</td>
                                        <td className='px-10'> {book.publisher} </td>
                                    </tr>
                                    <tr className='text-sm'>
                                        <td className='text-gray-500'>Year of Publishing:</td>
                                        <td className='px-10'> {book.yearOfPublishing} </td>
                                    </tr>
                                    <tr className='text-sm'>
                                        <td className='text-gray-500'>Rating:</td>
                                        <td className='px-10'> {book.rating} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div></div>
    
                        <button onClick={handleReadList} className="btn border border-gray-500">Mark as Read</button>
                        <button onClick={handleWishList} className="btn btn-primary mx-3">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;