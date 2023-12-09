import Image from 'next/image';

import { doneIcon } from '../../../../../static/import-images';

const Done = ({ setOpen }) =>
  <div className="p-6 pt-[88px] pb-[48px] text-center">
    <div className="flex justify-center mb-6">
      <span className="relative w-[64px] h-[64px]">
        <Image alt="done" fill src={doneIcon} />
      </span>
    </div>

    <h4 className="text-text-primary text-[20px] font-[500] mb-2">{'Thanks For Your Booking'}</h4>
    <p className="text-[12px] font-[300] text-text-secondary mt-2">
      {'One of our representative will contact with you very soon again'}
    </p>

    <button className="block w-full min-h-[40px] text-[14px] text-white bg-background-secondary mt-6 rounded-[8px]" onClick={() => setOpen && setOpen(false)} type="button">
      {'Go Back'}
    </button>
  </div>;

export default Done;
