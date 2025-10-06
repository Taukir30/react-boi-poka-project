import React from 'react';
import bannerPhoto from '../../assets/book3.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='bg-stone-100 flex flex-col-reverse md:flex-row justify-between gap-5 items-center rounded-2xl px-10 md:px-25 py-15 md:py-22 my-3'>
            <div className="left text-center md:text-start">
                <h1 className='playFair text-3xl/10 md:text-5xl/18 font-bold'>Books to freshen up <br /> your bookshelf</h1>
                <Link to="/listed" className='btn bg-[#23BE0A] rounded-md p-6 py-7 my-10 text-white text-base workSans tracking-wide shadow-none' href="">View The List</Link>
            </div>
            <div className="right">
                <img className='w-[250px]' src={bannerPhoto} alt="" />
            </div>
        </div>
    );
};

export default Banner;