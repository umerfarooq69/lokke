import Image from 'next/image';

import NavRight from './nav-right';
import NavSearch from './nav-search';

import { logoImg } from '@/static/import-images';

const Navbar = () =>
  <nav className="p-[14px] flex justify-between items-center border-b border-[#ECEDF1] bg-white">
    <div>
      <span className="relative top-[5px] inline-block w-[184px] h-[56px]">
        <Image fill src={logoImg} />
      </span>
    </div>

    <div>
      <NavSearch />
    </div>

    <div>
      <NavRight />
    </div>
  </nav>;

export default Navbar;
