import Image from 'next/image';

import { keyIcon } from '../../../../static/import-images';

const LeftSide = () =>
  <div>
    <div className="pb-[68px] connect-bg min-h-[700px] grid items-center justify-center">
      <div className="w-[330px]">
        <input className="w-full h-[48px] outline-none text-[14px] pl-4 border border-border-primary rounded-[8px]" placeholder="Address" type="text" />
      </div>
    </div>

    <button className="bg-background-tertiary flex items-center justify-center w-full min-h-[130px] mt-6 text-text-tertiary text-[20px]" type="button">
      <span className="flex">
        <span className="relative w-[16px] h-[16px] mr-2 top-[5px]">
          <Image alt="img" fill sizes="100" src={keyIcon} />
        </span>
        {'Connect to Agent'}
      </span>
    </button>
  </div>;

export default LeftSide;
