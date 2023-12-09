import { useState } from 'react';
import Image from 'next/image';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/core';


import { Navigation, Scrollbar, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { leftArrowAgentIcon } from '../../../static/import-images';
import { defaultSplideIcon, peopleList } from '../../../static/static-strings';
import PeopleTile from '../people-tile';
import DefaultModal from '../../elements/modal';
import PeopleDetails from '../../module/people/people-details';

const options = {
  arrows: true,
  autoWidth: true,
  // type: 'loop',
  classes: {
    ...defaultSplideIcon,
    arrow: `${defaultSplideIcon.arrow} border`,
    next: `${defaultSplideIcon.next} next-full-out-blue`,
    prev: `${defaultSplideIcon.prev} pre-full-out-blue`,
  },
  gap: '12px',
  pagination: false,
  rewind: true,
  width: '100%',
};

const AgentSlider = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-background-secondary p-6 rounded-[16px] text-white">
      <div className="relative">
        <h4 className="text-[18px] font-[500]">
          {'Recommender'}
          <span className="inline-block text-[14px] bg-background-primary px-[6px] py-[0.5px] text-white rounded-[8px] ml-3 leading-0 font-normal">{'30'}</span>
        </h4>

        <button className=" text-[#9EB1EF] text-left absolute top-0 right-0" type="button">
          {'View All'}
          <span className="relative inline-block w-[18px] h-[18px] ml-3 top-[3px]">
            <Image fill sizes="18px" src={leftArrowAgentIcon} />
          </span>
        </button>
      </div>

      <div className="px-[30px] pl-[32px] mt-6">
        <Swiper
          effect="cards"
          grabCursor
          modules={[Navigation, Scrollbar, EffectCards]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {
            peopleList.map((item) =>
              <SwiperSlide key={item.label}>
                <div className="min-w-[255px]">
                  <PeopleTile data={item} setOpen={setOpen} />
                </div>
              </SwiperSlide>)
          }
        </Swiper>
        {/* <Splide aria-label="My Favorite Images" options={options}>
          {
            peopleList.map((item) =>
              <SplideSlide key={item.label}>
                <div className="min-w-[255px]">
                  <PeopleTile data={item} setOpen={setOpen} />
                </div>
              </SplideSlide>)
          }
        </Splide> */}
      </div>

      <DefaultModal open={open} size="max-w-[1156px]" toggle={setOpen}>
        <PeopleDetails />
      </DefaultModal>
    </div>
  );
};

export default AgentSlider;
