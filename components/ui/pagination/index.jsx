import Image from 'next/image';

import { arrowLeft, arrowRight, notiBarsIcon } from '../../../static/import-images';

const Pagination = () =>
  <div className="flex gap-2">
    <button className="bg-white p-[12px] leading-[0px] w-[44px] h-[44px]  rounded-[10px] border border-border-primary" type="button">
      <span className="relative inline-block w-[14px] h-[14px]">
        <Image alt="img" fill sizes="14px" src={arrowLeft} />
      </span>
    </button>

    <button className="p-[12px] text-[14px] w-[44px] h-[44px] leading-[0px] rounded-[10px] border border-border-primary bg-background-primary text-white" type="button">
      {'1'}
    </button>
    <button className="bg-white p-[12px] text-[14px] w-[44px] h-[44px] leading-[0px] text-text-secondary rounded-[10px] border border-border-primary" type="button">
      {'2'}
    </button>
    <button className="bg-white p-[12px] text-[14px] w-[44px] h-[44px] leading-[0px] text-text-secondary rounded-[10px] border border-border-primary" type="button">
      {'3'}
    </button>
    <button className="bg-white p-[12px] text-[14px] w-[44px] h-[44px] leading-[0px] text-text-secondary rounded-[10px] border border-border-primary" type="button">
      {'4'}
    </button>
    <button className="bg-white p-[12px] text-[14px] w-[44px] h-[44px] leading-[0px] text-text-secondary rounded-[10px] border border-border-primary" type="button">
      {'5'}
    </button>
    <button className="bg-white p-[12px] w-[44px] h-[44px]  leading-[0px] rounded-[10px] border border-border-primary" type="button">
      <span className="relative inline-block w-[14px] h-[14px]">
        <Image alt="img" fill sizes="14px" src={notiBarsIcon} />
      </span>
    </button>

    <button className="bg-white p-[12px] w-[44px] h-[44px]  leading-[0px] rounded-[10px] border border-border-primary" type="button">
      <span className="relative inline-block w-[14px] h-[14px]">
        <Image alt="img" fill sizes="14px" src={arrowRight} />
      </span>
    </button>
  </div>;

export default Pagination;
