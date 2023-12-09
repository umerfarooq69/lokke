import Image from 'next/image';

import { viewAllIcon } from '../../../static/import-images';

const Tips = () =>
  <div className=" bg-background-tertiary p-6 rounded-[16px]">
    <h4 className="text-[18px] text-text-tertiary mb-[20px]">{'Todays Tips'}</h4>

    <h3 className="font-medium text-[24px] text-text-primary mb-[20px]">{'Build a Strong Online Presence'}</h3>

    <button className="text-text-tertiary text-left" type="button">
      {'View All'}
      <span className="relative inline-block w-[18px] h-[18px] ml-3 top-[3px]">
        <Image fill sizes="18px" src={viewAllIcon} />
      </span>
    </button>
  </div>;

export default Tips;
