import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import { useDispatch, useSelector } from 'react-redux';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import { listYoutube } from '../../redux/actions/youtubeActions';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const YoutubeSection = () => {
  const dispatch = useDispatch();
  const youtubeList = useSelector((state) => state.youtubeList);
  const { youtube } = youtubeList;

  useEffect(() => {
    dispatch(listYoutube());
  }, [dispatch]);

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      origin: 'https://localhost:8100',
    },
  };
  return (
    <div className='youtube-section py-5 mb-5'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row text-center'>
          <span>YOUTUBE</span>
          <h1>Latest Videos</h1>
        </div>
        <div className='mt-3 align-items-center text-center'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ autoplay: true, delay: 20000 }}
            breakpoints={{
              // when window width is >= 0px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 1000px
              900: {
                slidesPerView: 2,
              },
            }}
          >
            {youtube[0] &&
              youtube[0].youtube &&
              youtube[0].youtube.map((video, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className='youtube-video'>
                      <YouTube videoId={getYouTubeID(video.url)} opts={opts} />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSection;
