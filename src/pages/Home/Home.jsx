import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../../components/Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {

    const booksData = useLoaderData();
    // console.log(booksData)

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={ <h3>Loading..........</h3> }>
                <Books booksData={booksData}></Books>
            </Suspense>
        </div>
    );
};

export default Home;