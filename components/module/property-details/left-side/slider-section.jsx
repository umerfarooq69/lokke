import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

import { defaultSplideIcon } from '../../../../static/static-strings';
import { openIcon, pcitureIcon, slideImg, streetViewIcon } from '../../../../static/import-images';

const options = {
  arrows: true,
  classes: {
    ...defaultSplideIcon,
  },
  pagination: false,
  perPage: 1,
  rewind: true,
  width: '100%',
};

const SliderSection = ({ setOpen }) =>
  <div className="overflow-hidden rounded-[20px] relative">
    <p className="text-[12px] bg-background-secondary rounded-[64px] flex absolute top-3 left-3 z-10 text-white px-[20px] py-[5px]">
      <span className="relative mr-3 top-[-1px] text-left w-[18px] h-[18px]">
        <Image fill sizes="18px" src={openIcon} />
      </span>
      {'Open at 11 Sept : 12:00pm - 2:00pm'}
    </p>

    <div className="absolute flex gap-4 bottom-3 left-3 z-10">
      <button className="flex bg-white text-[14px] text-text-primary px-6 h-[40px] rounded-[8px] justify-center items-center border border-border-primary" onClick={() => setOpen && setOpen('photos')} type="button">
        <span className="relative mr-2 top-[-0.5px] text-left w-[18px] h-[18px]">
          <Image fill sizes="18px" src={pcitureIcon} />
        </span>
        {'Photos'}
      </button>

      <button className="flex bg-white text-[14px] text-text-primary px-6 h-[40px] rounded-[8px] justify-center items-center border border-border-primary" onClick={() => setOpen && setOpen('street-view')} type="button">
        <span className="relative mr-2 top-[-0.5px] text-left w-[18px] h-[18px]">
          <Image fill sizes="18px" src={streetViewIcon} />
        </span>
        {'Street View'}
      </button>
    </div>

    <Splide aria-label="My Favorite Images" options={options}>
      <SplideSlide>
        <span className="relative block min-h-[430px] w-full bg-[#fafafa]">
          <Image alt="Listing Image" className="object-cover" fill src={slideImg} />
        </span>
      </SplideSlide>

      <SplideSlide>
        <span className="relative block min-h-[430px] w-full bg-[#fafafa]">
          <Image alt="Listing Image" className="object-cover" fill src={slideImg} />
        </span>
      </SplideSlide>

      <SplideSlide>
        <span className="relative block md:min-h-[430px] min-h-[200px] w-full bg-[#fafafa]">
          <Image alt="Listing Image" className="object-cover" fill src={slideImg} />
        </span>
      </SplideSlide>

      <SplideSlide>
        <span className="relative block md:min-h-[430px] min-h-[200px] w-full bg-[#fafafa]">
          <Image alt="Listing Image" className="object-cover" fill src={slideImg} />
        </span>
      </SplideSlide>
    </Splide>
  </div>;

export default SliderSection;
