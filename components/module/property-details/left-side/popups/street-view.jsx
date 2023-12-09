import Image from 'next/image';

import { streetViewImg } from '../../../../../static/import-images';

const StreetView = () =>
  <div className="pt-[10px] rounded-[8px] overflow-hidden">
    <h4 className="pt-[14px] text-center mb-[10px] text-text-primary font-medium text-[20px]">{'Street View'}</h4>

    <div className="relative h-[600px]">
      <Image alt="Img" className="object-cover" fill sizes="100" src={streetViewImg} />
    </div>
  </div>;

export default StreetView;
