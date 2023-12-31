import Image from 'next/image';
import { useState } from 'react';

import DropDown from '../../ui/drop-down';
import SearchDropDownList from '../../ui/search-dropdown-list';

import { markerNavIcon, searchNavIcon } from '@/static/import-images';

const TopSearch = ({ open }) =>
  <div className="relative">
    <span className="absolute left-[20px] top-[16px] w-[18px] h-[18px]">
      <Image fill sizes="18px" src={markerNavIcon} />
    </span>
    <input className={`border ${open ? 'border-[#000] ' : 'border-[#ECEDF1] '} w-full h-[48px] rounded-[64px] pl-[46px] outline-none placeholder:text-text-secondary`} name="search" placeholder="Search Location" type="text" />

    <button className="absolute right-[4px] top-[4px] w-[40px] h-[40px] bg-background-secondary grid items-center justify-center rounded-[64px]" type="button">
      <span className="relative inline-block w-[18px] h-[18px]">
        <Image fill sizes="18px" src={searchNavIcon} />
      </span>
    </button>
  </div>;

const SearchInput = () => {
  const [open, setOpen] = useState();

  return (
    <DropDown buttonClass="w-full block" className="grid rounded-[10px] px-[10px] py-[5px] bg-white absolute right-0 top-[calc(100%+10px)] border border-border-primary min-w-[270px]" isOpen={setOpen} label={<TopSearch open={open} />}>
      <SearchDropDownList />
    </DropDown>
  )
};

export default SearchInput;
