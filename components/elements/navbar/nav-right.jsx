import Link from 'next/link';
import Image from 'next/image';

import NavFlags from '@/components/ui/nav-flags';
import NavNotification from '@/components/ui/nav-notification';
import NavMessage from '@/components/ui/nav-message';
import { profileImg } from '@/static/import-images';

const NavRight = () =>
  <div className="flex gap-[24px] items-center pt-[5px]">
    <NavFlags />

    <NavNotification />

    <NavMessage />

    <Link href="/auth/registration" passHref>
      <span className="relative inline-block w-[48px] h-[48px]">
        <Image fill sizes="48px" src={profileImg} />
      </span>
    </Link>
  </div>;

export default NavRight;
