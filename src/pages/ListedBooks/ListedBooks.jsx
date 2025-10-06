import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadList, getWishList } from '../../assets/utility/addToMemory';
import ReadCard from '../../components/ReadCard/ReadCard';
import WishCard from '../../components/WishCard/WishCard';

const ListedBooks = () => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishBooks, setWishBooks] = useState([]);

    const allBooksdata = useLoaderData();
    
    useEffect( () => {
        
        const readIds =  getReadList();
        const readBooksData = allBooksdata.filter( bookData => readIds.includes(bookData.bookId) )
        // console.log(readBooks)
        setReadBooks(readBooksData);
        
        const wishIds =  getWishList();
        const wishBooksData = allBooksdata.filter( bookData => wishIds.includes(bookData.bookId) )
        setWishBooks(wishBooksData)

    }, [])

    return (
        <div>
            <h2 className='text-2xl font-bold text-center p-5 bg-gray-100 rounded-xl mb-10'>Books</h2>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex flex-col gap-2'>
                        {
                            readBooks.map( readBook => <ReadCard key={readBook.bookId} readBook={readBook}></ReadCard> )
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='flex flex-col gap-2'>
                        {
                            wishBooks.map( wishBook => <WishCard key={wishBook.bookId} wishBook={wishBook} wishBooks={wishBooks} setWishBooks={setWishBooks}></WishCard> )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;