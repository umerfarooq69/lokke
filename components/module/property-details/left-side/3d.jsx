import Image from 'next/image';

import { threeDIcon, threeDImg } from '../../../../static/import-images';

const ThreeD = ({ setOpen }) =>
  <div className="relative w-full h-[247px] overflow-hidden rounded-[16px]">
    <Image alt="map" className="object-cover" fill sizes="100" src={threeDImg} />

    <div className="absolute bottom-2 left-2">
      <button className="flex bg-white text-[14px] text-text-primary px-6 h-[40px] rounded-[8px] justify-center items-center border border-border-primary" onClick={() => setOpen && setOpen('3d-view')} type="button">
        <span className="relative mr-2 top-[-0.5px] text-left w-[16px] h-[16px]">
          <Image fill sizes="16px" src={threeDIcon} />
        </span>
        {'Expand 3D View'}
      </button>
    </div>
  </div>;

export default ThreeD;
