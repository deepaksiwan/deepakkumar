import React, { useEffect } from 'react';
import Campus from './Campus';

// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import { listpartner } from '../../redux/actions/partnerActions';
import { useDispatch, useSelector } from 'react-redux';

// install Swiper modules
SwiperCore.use([A11y, Autoplay]);

const CampusSection = () => {
  const dispatch = useDispatch();
  const partnerList = useSelector((state) => state.partnerList);
  const { partner } = partnerList;

  useEffect(() => {
    dispatch(listpartner());
  }, [dispatch]);

  return (
    <div className='partners mt-md-5 mt-2 mb-4 pt-3'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <h1>Organisations</h1>
        <div className='partners-images pt-3'>
          <div className='row'>
            <div className='col-lg-6 col-md-10 col-12 offset-lg-3 offset-md-1'>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ autoplay: true, delay: 10000 }}
                breakpoints={{
                  // when window width is >= 0px
                  0: {
                    slidesPerView: 3,
                  },
                }}
              >
                {partner[0] &&
                  partner[0].slice(5, 10).map((x, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Campus url={x.partners_img} />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusSection;
