import Image from 'next/image';

import { mapOneIcon } from '../../../../static/import-images';

const BasicDetails = () =>
  <div className="">
    <p className="text-[12px] text-text-secondary">{'Listing provided courtesy of Mark Besta, Windermere Real Estate Co.. Source NWMLS.'}</p>

    <div className="flex mt-3 border-b border-border-primary pb-4">
      <div className="w-[calc(100%-124px)]">
        <h3 className="text-[24px] font-medium text-text-primary">{'11333 35th Ave NE'}</h3>
        <p className="text-text-secondary mt-1">{'Seattle, WA 98125'}</p>

        <div className="flex mt-6">
          <div className="flex-1">
            <p className="text-text-primary text-[18px] font-medium">{'$595,000'}</p>
            <p className="text-text-secondary">{'$3,882/mo'}</p>
          </div>
          <div className="flex-1">
            <p className="text-text-primary text-[18px] font-medium">{'1,600'}</p>
            <p className="text-text-secondary">{'sq ft'}</p>
          </div>
          <div className="flex-1">
            <p className="text-text-primary text-[18px] font-medium">{'2'}</p>
            <p className="text-text-secondary">{'Beds'}</p>
          </div>
          <div className="flex-1">
            <p className="text-text-primary text-[18px] font-medium">{'2'}</p>
            <p className="text-text-secondary">{'Baths'}</p>
          </div>
        </div>
      </div>

      {/* Small Map */}
      <div className="w-[124px] min-h-[124px]">
        <Image alt="map" src={mapOneIcon} />
      </div>
    </div>

    {/* Description */}
    <div className="mt-[40px]">
      <h3 className="text-text-primary font-medium mb-4">{'Description'}</h3>
      <p className="text-text-secondary font-normal leading-[30px]">
        {'Having a hard time jumping into the current market? Consider this cottage gem, freshly painted with gleaming hardwood floors & bundled with all the hallmarks of a warm & comfortable home-just waiting for you to bring back her deserving glory. Using vision & a little bit of elbow grease, this 2-bed, 2-bath home with bright living room, gas-burning fireplace, dining room &.'}
      </p>
      <button className="text-text-tertiary text-[14px] mt-[30px]" type="button">{'Read More'}</button>
    </div>
  </div>;

export default BasicDetails;
