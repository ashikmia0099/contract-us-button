import React from 'react';
import HeroVideoDialog from '../../../../components/ui/hero-video-dialog';

const IntroVideo = () => {
  return (
    <div className='   mx-auto justify-center items-center my-5 flex'>
      <iframe width="1200" className=' rounded-2xl'  height="466" src="https://www.youtube.com/embed/668nUCeBHyY?si=OI_eRSYLNzfHtUWd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default IntroVideo;
