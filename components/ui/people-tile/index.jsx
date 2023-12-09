import Image from 'next/image';

import { heartIcon, linesIcon, messageIcon, shareDarkIcon } from '../../../static/import-images';

const PeopleTile = ({ data, setOpen }) =>
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div className="text-left w-full" onClick={() => setOpen && setOpen(true)} type="button">
    <div className="relative overflow-hidden rounded-[16px] min-h-[353px] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-transparent">
      <div className="absolute z-10 bottom-[10px] right-0 left-0 px-4">
        <div className="grid text-white">
          <h4 className="text-[20px]">{data.label}</h4>
          <p className="text-white text-[12px]">{`Licesnse: ${data.license} . Since: ${data.date}`}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="bg-white flex justify-center items-center w-[30px] h-[30px] rounded-[50%]" type="button">
              <span className="relative flex w-[16px] h-[16px] leading-[0px]">
                <Image alt="img" fill sizes="14px" src={heartIcon} />
              </span>
            </button>

            <button className="bg-white flex justify-center items-center w-[30px] h-[30px] rounded-[50%]" type="button">
              <span className="relative flex w-[16px] h-[16px] leading-[0px]">
                <Image alt="img" fill sizes="14px" src={shareDarkIcon} />
              </span>
            </button>

            <button className="bg-white flex justify-center items-center w-[30px] h-[30px] rounded-[50%]" type="button">
              <span className="relative flex w-[16px] h-[16px] leading-[0px]">
                <Image alt="img" fill sizes="14px" src={messageIcon} />
              </span>
            </button>
          </div>

          <div>
            <button className="" type="button">
              <span className="relative flex w-[35px] h-[35px]">
                <Image alt="img" fill sizes="14px" src={linesIcon} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <Image alt="img" className="object-cover" fill sizes="322px" src={data.img} />
    </div>
  </div>;

export default PeopleTile;
