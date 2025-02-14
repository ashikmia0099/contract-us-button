import React from 'react';
import Bannertop from '../Bannertop/Bannertop';
import CodeConvert from '../CodeConvert/CodeConvert';
import IntroVideo from '../IntroVideo/IntroVideo';
import MyPath from '../MyPath/MyPath';
import Card from '../Card/Card';
import MyPathSecond from '../MyPath/MyPathSecond/MyPathSecond';
import StackingCard from '../StackingCard/StackingCard';
// import MyPathSecond from '../MyPath/MyPathSecond/MyPathSecondjs'


const Homepages = () => {
    return (
        <div className='  mx-auto'>
            {/* section 1 ----> banner top */}
            <Bannertop className="max-w-screen-2xl"></Bannertop>
            {/* section two ----> video intro */}
            
            {/* <IntroVideo className=" max-w-screen-xl"></IntroVideo> */}
            {/* section four ----> my path */}
            <MyPathSecond></MyPathSecond>
            {/* card section */}
            <Card></Card>
            {/* footer */}
           
           
            
        </div>
    );
};

export default Homepages;