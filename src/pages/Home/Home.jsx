import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../../components/Books/Books';
// import { useLoaderData } from 'react-router';

const Home = () => {

    const booksPromise = fetch('/booksData.json').then( res => res.json() );

    // const booksData = useLoaderData();
    // console.log(booksData)

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={ <div className='text-center'><span className="loading loading-spinner loading-xl text-primary"></span></div> }>
                <Books booksPromise={booksPromise}></Books>
            </Suspense>
        </div>
    );
};

export default Home;