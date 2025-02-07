import React from 'react';
import Bannertop from '../Bannertop/Bannertop';
import CodeConvert from '../CodeConvert/CodeConvert';
import IntroVideo from '../IntroVideo/IntroVideo';
import MyPath from '../MyPath/MyPath';
import Card from '../Card/Card';


const Homepages = () => {
    return (
        <div className='  mx-auto'>
            {/* section 1 ----> banner top */}
            <Bannertop className="max-w-screen-2xl"></Bannertop>
            {/* section two ----> code convert */}
            {/* <CodeConvert className="max-w-7xl"></CodeConvert> */}
            {/* secion three -----> intro video */}
            {/* <IntroVideo></IntroVideo> */}
            {/* section four ----> my path */}
            {/* <MyPath></MyPath> */}
            {/* card section */}
            <Card></Card>
            
        </div>
    );
};

export default Homepages;