import Image from 'next/image';

import { notiBarsIcon, userOneImg, userTwoImg, userThreeImg, viewAllIcon } from '../../../../static/import-images';
import ChatTile from '../../../ui/chat-tile';

const data = [
  {
    badge: '',
    bars: undefined,
    date: '12mins ago',
    icon: userOneImg,
    name: 'Emily Anderson',
    text: "Hey there, how's your...",
  },
  {
    badge: '2',
    bars: notiBarsIcon,
    date: '2mins ago',
    icon: userTwoImg,
    name: 'Liam Parker',
    text: 'Just got back from a i...',
  },
  {
    badge: '',
    bars: notiBarsIcon,
    date: '10mins ago',
    icon: userThreeImg,
    name: 'Oliver Johnson',
    text: "Hey there, how's your...",
  },
];

const Chat = () =>
  <div className="grid gap-4">

    {/* Un comment this div if you need scroll */}

    {/* <div className="h-[227px] overflow-y-scroll overflow-x-hidden"> */}
    {data.map((item) => <ChatTile item={item} key={item.label} />)}
    {/* </div> */}

    <div>
      <button className="text-text-tertiary text-left" type="button">
        {'View All'}
        <span className="relative inline-block w-[18px] h-[18px] ml-3 top-[3px]">
          <Image fill sizes="18px" src={viewAllIcon} />
        </span>
      </button>
    </div>
  </div>;

export default Chat;
