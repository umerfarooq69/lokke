import Image from 'next/image';

import { filterLabelsTimes } from '../../../static/import-images';

const DefaultModal = (props) => {
  const { children, toggle, size, open, hideTimes } = props;

  return (
    <div className={`fixed inset-0 bg-[#000000db] z-[50] md:items-center transition-all ${open ? 'grid opacity-1' : 'hidden opacity-0'}`}>

      <div className={`bg-white md:rounded-[8px] min-h-[50px] mx-auto  ${size ? size : 'md:min-w-[400px]'}`}>
        <div className="border-b-[0px] border-border-primary px-[18px] text-[20px] font-semibold sticky top-0 bg-white z-[1]">
          {
            !hideTimes ?
              <button className="hidden md:block absolute right-[18px] top-[19px] p-1 rounded-[8px] bg-white border border-border-primary cursor-pointer" onClick={() => toggle && toggle(false)} type="button">
                <span className="relative block w-[16px] h-[16px]">
                  <Image alt="Times Image" fill sizes="10px" src={filterLabelsTimes} />
                </span>
              </button>
              : undefined
          }
        </div>

        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DefaultModal;
