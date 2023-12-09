import Image from 'next/image';

import DropDown from '../drop-down';
import { messageIcon } from '../../../static/import-images';

import SidrbarHeading from '@/components/ui/sidebar-heading';
import Chat from '@/components/elements/sidebar/chat-notification/chat';

const Message = () =>
  <span className="relative inline-block w-[24px] h-[24px] leading-[0px]">
    <Image fill sizes="24px" src={messageIcon} />
  </span>;

const NavMessage = () =>
  <DropDown className="grid rounded-[10px] px-[10px] py-[5px] bg-white absolute right-[-10px] top-[calc(100%+10px)] border border-border-primary min-w-[350px]" label={<Message />}>
    <div className="min-w-[133px] p-2">
      <div>
        <div className="pl-4">
          <SidrbarHeading badge="2" heading="Chat" />
        </div>
        <div className="mt-5">
          <Chat />
        </div>
      </div>
    </div>
  </DropDown>;

export default NavMessage;
