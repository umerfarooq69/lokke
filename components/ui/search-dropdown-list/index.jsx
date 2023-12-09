import Image from "next/image";

import { markerNavIcon } from "../../../static/import-images";

const array = ['New York, US', 'New York State, US', 'New York Harbor, US', 'New York Times Square, US', 'New Yorvik Square, UK', 'New Yorin Temple, Japan', 'New York, US', 'New York State, US', 'New York Harbor, US', 'New York Times Square, US', 'New Yorvik Square, UK', 'New Yorin Temple, Japan', 'New York, US', 'New York State, US', 'New York Harbor, US', 'New York Times Square, US', 'New Yorvik Square, UK', 'New Yorin Temple, Japan', 'New York, US', 'New York State, US', 'New York Harbor, US', 'New York Times Square, US', 'New Yorvik Square, UK', 'New Yorin Temple, Japan', 'New York State, US', 'New York Harbor, US',]

const SearchDropDownList = () =>
  <div className="py-3">
    <p className="text-text-primary font-[500] mb-4">{'Previous searches'}</p>
    <div className="h-[242px] overflow-y-scroll overflow-x-hidden">
      {
        array.map((item) =>
          <button className="flex h-[40px] text-text-secondary" key={item} type="button">
            <span className="relative top-[2px] mr-2 w-[18px] h-[18px]">
              <Image fill sizes="18px" src={markerNavIcon} />
            </span>
            {item}
          </button>)
      }
    </div>
  </div>;

export default SearchDropDownList;
