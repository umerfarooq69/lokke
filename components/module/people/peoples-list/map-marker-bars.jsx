import Image from 'next/image';

import { markerNavIcon, whiteBarsIcon } from '../../../../static/import-images';

const MapMarker = () =>
  <div className="flex gap-2">
    <button className="bg-background-quaternary w-[44px] h-[44px] rounded-[16px] leading-0" type="button">
      <span className="relative inline-block top-[2px] w-[16px] h-[16px] leading-0">
        <Image fill sizes="16px" src={whiteBarsIcon} />
      </span>
    </button>

    <button className="bg-white border border-border-primary w-[44px] h-[44px] rounded-[16px] leading-0" type="button">
      <span className="relative inline-block top-[2px] w-[16px] h-[16px] leading-0">
        <Image fill sizes="16px" src={markerNavIcon} />
      </span>
    </button>
  </div>;

export default MapMarker;
