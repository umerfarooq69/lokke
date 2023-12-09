import Image from 'next/image';
import { useRouter } from 'next/router';

import { viewAllIcon } from '../../../static/import-images';

const LandscapeTile = ({ item }) => {
  const routes = useRouter();

  return (
    <div className={`relative min-h-[300px] bg-white border border-border-primary px-[24px] rounded-[20px] ${item.class} p-5`}>
      <h4 className="text-[24px] text-text-primary">{item.label}</h4>
      <div className="mt-4">
        <button className="text-text-tertiary text-left" onClick={() => routes.push(item.link)} type="button">
          {'View All'}
          <span className="relative inline-block w-[18px] h-[18px] ml-3 top-[3px]">
            <Image fill sizes="18px" src={viewAllIcon} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default LandscapeTile;
