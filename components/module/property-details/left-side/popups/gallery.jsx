import Image from 'next/image';

import { galleryOneImg } from '../../../../../static/import-images';

const Gallery = () =>
  <div className="p-[10px]">
    <h4 className="pt-[14px] text-center mb-[10px] text-text-primary font-medium text-[20px]">{'Photos'}</h4>

    <div className="grid grid-cols-3 gap-[10px] h-[550px] overflow-y-scroll scrollbar-hide overflow-x-hidden">
      <div className="relative min-h-[166px]">
        <Image alt="Img" className="object-cover" fill sizes="100" src={galleryOneImg} />
      </div>
      <div className="relative min-h-[166px]">
        <Image alt="Img" className="object-cover" fill sizes="100" src={galleryOneImg} />
      </div>
      <div className="relative min-h-[166px]">
        <Image alt="Img" className="object-cover" fill sizes="100" src={galleryOneImg} />
      </div>

      <div className="relative min-h-[166px]">
        <Image alt="Img" className="object-cover" fill sizes="100" src={galleryOneImg} />
      </div>
      <div className="relative min-h-[166px]">
        <Image alt="Img" className="object-cover" fill sizes="100" src={galleryOneImg} />
      </div>
      <div className="relative min-h-[166px]">
        <Image alt="Img" className="object-cover" fill sizes="100" src={galleryOneImg} />
      </div>

      <div className="relative min-h-[166px]">
        <Image alt="Img" className="object-cover" fill sizes="100" src={galleryOneImg} />
      </div>
      <div className="relative min-h-[166px]">
        <Image alt="Img" className="object-cover" fill sizes="100" src={galleryOneImg} />
      </div>
      <div className="relative min-h-[166px]">
        <Image alt="Img" className="object-cover" fill sizes="100" src={galleryOneImg} />
      </div>

      <div className="relative min-h-[166px]">
        <Image alt="Img" className="object-cover" fill sizes="100" src={galleryOneImg} />
      </div>
      <div className="relative min-h-[166px]">
        <Image alt="Img" className="object-cover" fill sizes="100" src={galleryOneImg} />
      </div>
      <div className="relative min-h-[166px]">
        <Image alt="Img" className="object-cover" fill sizes="100" src={galleryOneImg} />
      </div>

    </div>
  </div>;

export default Gallery;
