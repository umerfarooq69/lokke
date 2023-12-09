import Image from 'next/image';

import { notiBarsIcon, notiPaymentIcon, notiSettingsIcon, notiUserIcon, viewAllIcon } from '../../../../static/import-images';
import NotificationTile from '../../../ui/notification-tile';

const data = [
  {
    badge: '2',
    bars: undefined,
    date: 'Just now',
    icon: notiPaymentIcon,
    label: 'Payment setting updated',
  },
  {
    badge: '',
    bars: notiBarsIcon,
    date: 'Just now',
    icon: notiUserIcon,
    label: 'New user registered',
  },
  {
    badge: '',
    bars: notiBarsIcon,
    date: 'Just now',
    icon: notiSettingsIcon,
    label: 'You updated your password',
  },
  {
    badge: '2',
    bars: undefined,
    date: 'Just now',
    icon: notiPaymentIcon,
    label: 'Payment setting updated',
  },
  {
    badge: '',
    bars: notiBarsIcon,
    date: 'Just now',
    icon: notiUserIcon,
    label: 'New user registered',
  },
  {
    badge: '',
    bars: notiBarsIcon,
    date: 'Just now',
    icon: notiSettingsIcon,
    label: 'You updated your password',
  },
];

const Notification = () =>
  <div className="grid gap-4">

    <div className="h-[257px] overflow-y-scroll overflow-x-hidden grid">
      {data.map((item) => <NotificationTile item={item} key={item.label} />)}
    </div>

    <div className="pl-4">
      <button className="text-text-tertiary text-left" type="button">
        {'View All'}
        <span className="relative inline-block w-[18px] h-[18px] ml-3 top-[3px]">
          <Image fill sizes="18px" src={viewAllIcon} />
        </span>
      </button>
    </div>
  </div>;

export default Notification;
