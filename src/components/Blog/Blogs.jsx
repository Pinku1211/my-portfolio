import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/posts.json')
            .then(result => result.json())
            .then(data => setCards(data))
    }, [])

    console.log(cards)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16'>
            {
                cards.map(card => <Blog key={card.id} card={card}></Blog>)
            }
        </div>
    );
};

export default Blogs;