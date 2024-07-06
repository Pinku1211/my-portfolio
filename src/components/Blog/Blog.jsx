import React from 'react';
import { Link } from 'react-router-dom';
import ButtonOutline from '../shared/ButtonOutline';

const Blog = ({ card }) => {

    const { id, title, excerpt, content, category, publish_date, author, featured_image } = card

    return (
        <div className='border-2 p-4 rounded-md'>
            <div className='flex justify-center mb-4'>
                <img className='h-48 w-full' src={featured_image} alt="img" />
            </div>
            <h1 className="text-lg font-semibold">{title}</h1>
            <h1 className='text-md my-3'>Date: {publish_date}</h1>
            <h1 className='text-md my-3'>By: {author}</h1>
            <Link to={`/showMore/${id}`}>
                <div className='flex justify-center mt-4'>
                    <ButtonOutline text='Show More'></ButtonOutline>
                </div>
            </Link >
        </div >
    );
};

export default Blog;