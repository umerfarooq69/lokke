import Image from 'next/image';

import { plusIcon } from '../../../../static/import-images';

const Tile = ({ label }) =>
  <div className="flex justify-between border-b border-border-primary py-4">
    <p className="w-[calc(100%-24px)] text-text-primary">{label}</p>

    <button className="relative mr-2 top-[-0.5px] text-left w-[24px] h-[24px]" type="button">
      <Image fill sizes="24px" src={plusIcon} />
    </button>
  </div>;

const Collapse = () =>
  <div>
    <Tile label="Property, Lot, Community & Exterior Features" />
    <Tile label="Utilities & Other Information" />
    <Tile label="Listing Details, Costs & Financing Information" />
    <Tile label="School Neighborhood & Directions" />
  </div>;

export default Collapse;
