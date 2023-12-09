import Image from 'next/image';

import SearchDropDownList from '../search-dropdown-list';
import DropDown from '../drop-down';
import { filterSearch } from '../../../static/import-images';

import { markerNavIcon } from '@/static/import-images';

const TopSearch = () =>
  <div className="relative">
    <span className="absolute left-[20px] top-[16px] w-[18px] h-[18px]">
      <Image fill sizes="18px" src={markerNavIcon} />
    </span>
    <input className="border border-[#ECEDF1] min-w-[276px] h-[48px] rounded-[64px] pl-[46px] outline-none placeholder:text-text-secondary" name="search" placeholder="Search Location" type="text" />

    <button className="absolute right-[4px] top-[4px]" type="button">
      <span className="relative inline-block w-[40px] h-[40px]">
        <Image fill sizes="40px" src={filterSearch} />
      </span>
    </button>
  </div>;

const SearchInput = () =>
  <DropDown buttonClass="w-full block" className="grid rounded-[10px] px-[10px] py-[5px] bg-white absolute right-0 top-[calc(100%+5px)] border border-border-primary min-w-[270px]" label={<TopSearch />}>
    <SearchDropDownList />
  </DropDown>;

export default SearchInput;
