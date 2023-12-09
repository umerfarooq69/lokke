import Image from 'next/image';

import DropDown from '../drop-down';
import { bellIcon } from '../../../static/import-images';

import SidrbarHeading from '@/components/ui/sidebar-heading';
import Notification from '@/components/elements/sidebar/chat-notification/notification';

const Bell = () =>
  <span className="relative inline-block w-[24px] h-[24px] leading-[0px]">
    <Image fill sizes="24px" src={bellIcon} />
  </span>;

const NavNotification = () =>
  <DropDown className="grid rounded-[10px] px-[10px] py-[5px] bg-white absolute right-[-10px] top-[calc(100%+5px)] border border-border-primary min-w-[350px]" label={<Bell />}>
    <div className="min-w-[133px] p-2">
      <div>
        <SidrbarHeading badge="2" heading="Notification" />
        <div className="mt-7">
          <Notification />
        </div>
      </div>
    </div>
  </DropDown>;

export default NavNotification;
