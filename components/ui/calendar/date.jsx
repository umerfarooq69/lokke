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

const Date = () =>
  <div className="px-[30px] pl-[32px]">
    <Splide aria-label="My Favorite Images" options={options}>
      <SplideSlide>
        <div className="border border-border-primary bg-white w-[104px] rounded-[16px] p-4 text-center">
          <h4 className="text-text-primary font-medium text-[24px]">{'1'}</h4>
          <p className="text-text-primary mt-2 mb-2 ">{'November'}</p>
          <p className="text-[14px] text-text-secondary font-[300]">{'Saturday'}</p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="border border-border-primary bg-white w-[104px] rounded-[16px] p-4 text-center">
          <h4 className="text-text-primary font-medium text-[24px]">{'2'}</h4>
          <p className="text-text-primary mt-2 mb-2 ">{'November'}</p>
          <p className="text-[14px] text-text-secondary font-[300]">{'Saturday'}</p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="border border-border-primary bg-white w-[104px] rounded-[16px] p-4 text-center">
          <h4 className="text-text-primary font-medium text-[24px]">{'3'}</h4>
          <p className="text-text-primary mt-2 mb-2 ">{'November'}</p>
          <p className="text-[14px] text-text-secondary font-[300]">{'Saturday'}</p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="border border-border-primary bg-white w-[104px] rounded-[16px] p-4 text-center">
          <h4 className="text-text-primary font-medium text-[24px]">{'4'}</h4>
          <p className="text-text-primary mt-2 mb-2 ">{'November'}</p>
          <p className="text-[14px] text-text-secondary font-[300]">{'Saturday'}</p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="border border-border-primary bg-white w-[104px] rounded-[16px] p-4 text-center">
          <h4 className="text-text-primary font-medium text-[24px]">{'5'}</h4>
          <p className="text-text-primary mt-2 mb-2 ">{'November'}</p>
          <p className="text-[14px] text-text-secondary font-[300]">{'Saturday'}</p>
        </div>
      </SplideSlide>

    </Splide>
  </div>;

export default Date;
