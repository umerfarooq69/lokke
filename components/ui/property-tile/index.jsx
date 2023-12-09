import Image from 'next/image';
import Link from 'next/link';

import { heartIcon, markerNavIcon, shareIcon } from '../../../static/import-images';

const PropertyTile = ({ data }) =>

  <Link className="block w-full text-left" href="/property-details" passHref>
    <div className="relative leading-[0px] overflow-hidden rounded-[16px] mb-[20px]">
      <div className="absolute z-10 top-[10px] right-[10px] flex gap-2">
        <button className="bg-white p-[12px] leading-[0px] rounded-[50%]" type="button">
          <span className="relative inline-block w-[14px] h-[14px]">
            <Image alt="img" fill sizes="14px" src={heartIcon} />
          </span>
        </button>

        <button className="bg-white p-[12px] leading-[0px] rounded-[50%]" type="button">
          <span className="relative inline-block w-[14px] h-[14px]">
            <Image alt="img" fill sizes="14px" src={shareIcon} />
          </span>
        </button>
      </div>

      <span className="relative inline-block w-[100%] h-[200px]">
        <Image alt="img" className="object-cover" fill sizes="322px" src={data.img} />
      </span>
    </div>

    <div>
      <p className="text-text-tertiary text-[18px] mb-[5px] font-medium">{data.price}</p>
      <p className="text-text-primary text-[20px] font-medium mb-[5px]">{data.label}</p>
      <p className="text-text-secondary text-[16px] mb-[8px] ">
        <span className="relative inline-block w-[16px] h-[16px] mr-1 top-[2px]">
          <Image alt="img" fill sizes="16px" src={markerNavIcon} />
        </span>
        {data.location}
      </p>
      <p className="text-text-primary text-[16px]">
        {`${data.size} . ${data.bed} Beds . ${data.baths} Baths`}
      </p>
    </div>
  </Link>;

export default PropertyTile;
