import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ShowMore = () => {
    const { id } = useParams();
    const cards = useLoaderData();

    const selectedCard = cards.find(card => card.id == id)
    const { title, excerpt, content, category, publish_date, author, featured_image } = selectedCard

    return (
        <div className='min-h-screen pb-8'>
            <figure><img className='h-[500px] w-full' src={featured_image} alt="img" /></figure>
            <div className="space-y-8 mt-8 px-8 lg:px-24">
                <h2 className="card-title text-4xl font-bold">{title}</h2>
                <h2 className="card-title text-2xl font-bold">{category}</h2>
                <p className='text-lg'>{content}</p>
                <p className='text-lg'>{excerpt}</p>
                <h1 className='text-2xl font-bold'>By: {author}</h1>
                <h1 className='text-2xl font-bold'>Date: {publish_date}</h1>
            </div>
        </div>
    );
};

export default ShowMore;