import Image from 'next/image';

import { viewAllIcon } from '../../../static/import-images';

const Back = ({ children, label }) =>
  <div className="flex justify-between">
    <button className="text-[14px] text-text-tertiary" type="button">
      <span className="relative mr-3 top-[4.5px] text-left inline-block w-[18px] h-[18px]">
        <Image className=" rotate-180" fill sizes="18px" src={viewAllIcon} />
      </span>
      {label || 'Go Back'}
    </button>
    {children}
  </div>;

export default Back;
