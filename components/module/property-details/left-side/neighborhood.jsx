import Image from 'next/image';

import { breadCrums } from '../../../../static/import-images';

const Neighborhood = () =>
  <div className="border border-border-primary bg-white rounded-[16px] p-6">
    {/* BreadCrums */}
    <div className="flex gap-2 mb-7">
      <button className="text-[14px] flex text-text-secondary" type="button">
        {'Washington'}
        <span className="relative top-[2.5px] ml-2 h-[16px] w-[16px]">
          <Image alt="icon" fill sizes="100" src={breadCrums} />
        </span>
      </button>
      <button className="text-[14px] flex text-text-secondary" type="button">
        {'King County'}
        <span className="relative top-[2.5px] ml-2 h-[16px] w-[16px]">
          <Image alt="icon" fill sizes="100" src={breadCrums} />
        </span>
      </button>
      <button className="text-[14px] flex text-text-secondary" type="button">
        {'Seattle'}
        <span className="relative top-[2.5px] ml-2 h-[16px] w-[16px]">
          <Image alt="icon" fill sizes="100" src={breadCrums} />
        </span>
      </button>
      <button className="text-[14px] flex text-text-tertiary" type="button">
        {'Meadowbrook'}
      </button>
    </div>

    <div className="flex border-b border-border-primary pb-5 mb-5">
      <div className="flex-1">
        <p className="font-medium text-text-primary mb-2">{'23'}</p>
        <p className="text-text-secondary ">{'Listings'}</p>
      </div>
      <div className="flex-1">
        <p className="font-medium text-text-primary mb-2">{'6'}</p>
        <p className="text-text-secondary ">{'Days listed'}</p>
      </div>
      <div className="flex-1">
        <p className="font-medium text-text-primary mb-2">{'$465.19'}</p>
        <p className="text-text-secondary ">{'Price per sqft'}</p>
      </div>
      <div className="flex-1">
        <p className="font-medium text-text-primary mb-2">{'104.42%'}</p>
        <p className="text-text-secondary">{'Sold over list%'}</p>
      </div>
    </div>

    <div className=" mt-5">
      <div className="flex justify-between">
        <label className="font-medium text-text-primary">{'Safety Score'}</label>
        <span className="text-text-tertiary font-medium">{'20%'}</span>
      </div>
      <div className="min-h-[8px] overflow-hidden mt-3 bg-background-tertiary rounded-[10px] relative after:absolute after:top-0 after:bottom-0 after:w-[20%] after:bg-background-primary" />
    </div>

    <div className=" mt-5">
      <div className="flex justify-between">
        <label className="font-medium text-text-primary">{'Noise Score'}</label>
        <span className="text-text-tertiary font-medium">{'50%'}</span>
      </div>
      <div className="min-h-[8px] overflow-hidden mt-3 bg-background-tertiary rounded-[10px] relative after:absolute after:top-0 after:bottom-0 after:w-[50%] after:bg-background-primary" />
    </div>

    <div className=" mt-5">
      <div className="flex justify-between">
        <label className="font-medium text-text-primary">{'Future Value Score'}</label>
        <span className="text-text-tertiary font-medium">{'80%'}</span>
      </div>
      <div className="min-h-[8px] overflow-hidden mt-3 bg-background-tertiary rounded-[10px] relative after:absolute after:top-0 after:bottom-0 after:w-[80%] after:bg-background-primary" />
    </div>
  </div>;

export default Neighborhood;
