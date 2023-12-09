import Image from 'next/image';
import { useRouter } from 'next/router';

import { homeNavIcon, buyNavIcon, sellNavIcon, peopleNavIcon } from '@/static/import-images';

const buttons = [
  {
    img: homeNavIcon,
    label: 'Home',
    link: '/home',
  },
  {
    img: buyNavIcon,
    label: 'Buy',
    link: '/home',
  },
  {
    img: sellNavIcon,
    label: 'Sell',
    link: '/connect-agent',
  },
  {
    img: peopleNavIcon,
    label: 'People',
    link: '/people',
  },
];

const SearchButtons = () => {
  const routes = useRouter();

  return (
    <div className="flex">
      {
        buttons.map((item) =>
          <button className={`group h-[48px] px-[20px] rounded-[64px] hover:bg-background-primary hover:text-white ${item.label === 'Home' ? ' bg-background-primary text-white' : 'text-text-primary'}`} key={item.label} onClick={() => routes.push(item.link)} type="button">
            <span className="relative top-[2px] inline-block w-[18px] h-[18px] mr-3">
              <Image className={`group-hover:brightness-[0] group-hover:invert-[1] ${item.label === 'Home' ? 'brightness-[0] invert-[1]' : ''}`} fill sizes="18px" src={item.img} />
            </span>
            {item.label}
          </button>)
      }
    </div>
  )
};

export default SearchButtons;
