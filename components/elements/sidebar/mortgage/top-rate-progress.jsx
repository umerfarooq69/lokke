import Image from 'next/image';

import { viewAllIcon } from '../../../../static/import-images';

const TopRateProgress = () =>
  <div>
    <h3 className="font-medium text-[18px] text-text-tertiary mb-6">{'Mortgage Calculator'}</h3>
    <p className="text-[24px] text-text-primary font-medium">{'$3,882/mo'}</p>

    <div className="h-4 bg-[#93B1C5] flex rounded-[5px] overflow-hidden mt-6 mb-6">
      <span className="w-[50%] bg-[#A9A6BB]" />
      <span className="w-[35%] bg-[#E4A0AD]" />
    </div>

    <div className="grid gap-2">
      <div className="flex justify-between">
        <p className=" text-text-secondary">
          <span className="w-[24px] relative top-[5.5px] h-[24px] mr-2 inline-flex bg-[#A9A6BB] rounded-[4px]" />
          {'Principal and interest'}
        </p>

        <span className="flex items-center justify-center relative top-[1px] font-medium">{'$3,280'}</span>
      </div>

      <div className="flex justify-between">
        <p className=" text-text-secondary">
          <span className="w-[24px] relative top-[5.5px] h-[24px] mr-2 inline-flex bg-[#E4A0AD] rounded-[4px]" />
          {'Property taxes'}
        </p>

        <span className="flex items-center justify-center relative top-[1px] font-medium">{'$494'}</span>
      </div>

      <div className="flex justify-between">
        <p className=" text-text-secondary">
          <span className="w-[24px] relative top-[5.5px] h-[24px] mr-2 inline-flex bg-[#93B1C5] rounded-[4px]" />
          {'Principal and interest'}
        </p>

        <span className="flex items-center justify-center relative top-[1px] font-medium">{'$109'}</span>
      </div>
    </div>

    <button className="block w-full min-h-[40px] text-[14px] text-white bg-background-secondary my-[30px] rounded-[8px]" type="button">
      {'See how much you qualify for'}
      <span className="relative ml-3 top-[4.5px] mr-[10px] text-left inline-block w-[18px] h-[18px]">
        <Image className="brightness-[0] invert-[1]" fill sizes="18px" src={viewAllIcon} />
      </span>
    </button>
  </div>;

export default TopRateProgress;
