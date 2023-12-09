import Image from 'next/image';

import DropDown from '../drop-down';

import { falgOne } from '@/static/import-images';
import { flagData } from '@/static/static-strings';

const Flag = () =>
  <span className="relative inline-block w-[24px] h-[24px]">
    <Image fill sizes="24px" src={falgOne} />
  </span>;

const NavFlags = () =>
  <DropDown className="grid rounded-[10px] px-[10px] py-[5px] bg-white absolute right-[-10px] top-[calc(100%+5px)] border border-border-primary min-w-[100px]" label={<Flag />}>
    <div className="min-w-[133px] p-2">
      {
        flagData.map((item) =>
          <button className="py-[8px] px-[12px] text-[14px] mb-1" key={item.label} type="button">
            <span className="relative top-[4.5px] mr-[10px] text-left inline-block w-[18px] h-[18px]">
              <Image fill sizes="18px" src={item.icon} />
            </span>
            {item.label}
          </button>)
      }
    </div>
  </DropDown>;

export default NavFlags;
