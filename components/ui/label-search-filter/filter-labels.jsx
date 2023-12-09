import Image from 'next/image';

import { filterLabelsTimes } from '../../../static/import-images';

const FilterLabels = ({ item }) =>
  <button className="relative px-[16px] py-[12px] pr-10 text-[14px] bg-white border border-border-primary rounded-[12px]" type="button">
    {item}
    <span className="absolute right-3 top-[17px] w-[12px] h-[12px]">
      <Image fill sizes="" src={filterLabelsTimes} />
    </span>
  </button>;

export default FilterLabels;
