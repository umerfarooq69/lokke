import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

import { defaultSplideIcon } from '../../../static/static-strings';

const options = {
  arrows: true,
  autoWidth: true,
  classes: {
    ...defaultSplideIcon,
    arrow: `${defaultSplideIcon.arrow} border`,
    next: `${defaultSplideIcon.next} next-full-out`,
    prev: `${defaultSplideIcon.prev} pre-full-out`,
  },
  gap: '12px',
  pagination: false,
  rewind: true,
  width: '100%',
};

const Time = () =>
  <div className="px-[30px] pl-[32px]">
    <Splide aria-label="My Favorite Images" options={options}>
      <SplideSlide>
        <button className="border border-border-primary bg-white w-[104px] rounded-[16px] p-4 text-center" type="button">
          <p className="text-[14px] text-text-secondary font-[300]">{'9:00 AM'}</p>
        </button>
      </SplideSlide>

      <SplideSlide>
        <button className="border border-border-primary bg-white w-[104px] rounded-[16px] p-4 text-center" type="button">
          <p className="text-[14px] text-text-secondary font-[300]">{'10:00 AM'}</p>
        </button>
      </SplideSlide>

      <SplideSlide>
        <button className="border border-border-primary bg-white w-[104px] rounded-[16px] p-4 text-center" type="button">
          <p className="text-[14px] text-text-secondary font-[300]">{'11:00 AM'}</p>
        </button>
      </SplideSlide>

      <SplideSlide>
        <button className="border border-border-primary bg-white w-[104px] rounded-[16px] p-4 text-center" type="button">
          <p className="text-[14px] text-text-secondary font-[300]">{'12:00 PM'}</p>
        </button>
      </SplideSlide>
    </Splide>
  </div>;

export default Time;
