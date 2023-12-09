import Image from 'next/image';

import { viewAllIcon } from '../../../static/import-images';

import Date from './date';
import Time from './time';

const Calendar = () =>
  <>
    <div className="mb-4">
      <Date />
    </div>

    <div>
      <Time />
    </div>

    <div className="flex text-[14px] text-text-secondary mt-4 ">
      <span className="border border-[#ddd] rounded-[4px] relative top-[2px] mr-3 w-[16px] h-[16px]" />
      {'I need a UBER ride'}
    </div>

    <div>
      <button className="block w-full min-h-[40px] text-[14px] text-white bg-background-secondary my-[30px] rounded-[8px]" type="button">
        {'Request A Tour'}
        <span className="relative ml-3 top-[4.5px] mr-[10px] text-left inline-block w-[18px] h-[18px]">
          <Image className="brightness-[0] invert-[1]" fill sizes="18px" src={viewAllIcon} />
        </span>
      </button>
    </div>
  </>;

export default Calendar;
