import Image from 'next/image';

import { detailImg } from '../../../../static/import-images';

import Content from './content';

const PeopleDetails = () =>
  <div className="p-[48px]">
    <div className="flex gap-[47px]">
      <div className="w-[365px]">
        <span className="block relative w-[100%] h-[448px]">
          <Image alt="Profile" fill src={detailImg} />
        </span>
      </div>

      <div className="w-[calc(100%-365px)]">
        <Content />
      </div>
    </div>
  </div>;

export default PeopleDetails;
