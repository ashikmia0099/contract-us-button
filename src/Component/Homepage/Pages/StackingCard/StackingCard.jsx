import React, { useEffect, useRef, useState } from 'react';
import './StackingCard.css';
import StickingCards from './StickingCards/StickingCards';
import { useScroll } from 'framer-motion';

const StackingCard = () => {
    const [cards, setCard] = useState([]);

    useEffect(() => {
        fetch('card.json')
            .then((res) => res.json())  
            .then(data => setCard(data));
    }, []);

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={container} className="gap-10 pb-40 mt-10 mx-40 ">
            {cards.map((card, i) => {
                const targetScale = 1 - ((cards.length - i) * 0.05);
                return (  // ✅ Add return statement here
                    <StickingCards 
                        key={i} 
                        card={{ ...card, index: i }} 
                        progress={scrollYProgress} 
                        range={[i * 0.25, 1]} 
                        targetScale={targetScale} 
                    />
                );
            })}
        </div>
    );
};

export default StackingCard;
