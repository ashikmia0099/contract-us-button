import React, { useRef } from 'react';
import { useTransform, motion } from 'framer-motion';
import './StickingCards.css';

const StickingCards = ({ card, progress, range, targetScale }) => {
    const container = useRef(null); 

    const { index, title, description, color } = card;
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div 
            ref={container} 
            className="cardContainer top-11 h-[200px]  border border-gray-300 mt-3 mx-auto rounded-2xl"
            style={{ backgroundColor: color, top: `calc(15% + ${index * 30}px)` }}
        >
            <motion.div className="mt-3  rounded-xl cardmotion" style={{ scale }}>
                <h1 className="text-3xl font-semibold text-center my-5">{title}</h1>
                <div className="grid grid-cols-2">
                    <div className="mt-7 px-6">
                        <p>{description}</p>
                    </div>
                    <div className="mx-5">
                        <img src={card.image} className="rounded-xl" alt={title} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default StickingCards;
