import Image from 'next/image';

import { WelcomImg } from '../../../static/import-images';

const HorizontalTile = () =>
  <div className="relative overflow-hidden border border-border-primary px-[24px] min-h-[126px] grid items-center bg-white rounded-[20px]">
    <div className="">
      <p className="text-text-primary">
        {'Welcome Back '}
        <span className="text-text-tertiary">{'Christeen'}</span>
      </p>
      <h4 className="text-[24px] mt-1">{'Here is your Dashboard'}</h4>

      <span className="absolute right-0 top-0 w-[175px] h-[126px]">
        <Image fill sizes="" src={WelcomImg} />
      </span>
    </div>
  </div>;

export default HorizontalTile;
