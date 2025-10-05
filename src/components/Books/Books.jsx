import React from 'react';
import BookCard from '../BookCard/BookCard';

const Books = ({booksData}) => {

    // console.log(booksData)

    return (
        <div className='my-8 py-5'>
            <h2 className='playFair text-center text-4xl font-bold my-10'>Books</h2>

            <div className="book_holder grid grid-cols-3 gap-5">
                {
                    booksData.map( book => <BookCard key={book.bookId} book={book}></BookCard> )
                }
            </div>
        </div>
    );
};

export default Books;