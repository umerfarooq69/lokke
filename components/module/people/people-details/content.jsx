import Image from 'next/image';

import { commission, detailsLabel, flagData, locations } from '../../../../static/static-strings';
import { heartIcon, messageIcon, shareDarkIcon } from '../../../../static/import-images';

const Content = () =>
  <div className="h-[550px] overflow-y-scroll scrollbar-hide overflow-x-hidden">
    <h1 className="text-text-primary font-medium text-[40px]">{'Demario Waters'}</h1>
    <span className="text-[14px] text-text-secondary">{'License #01440777'}</span>
    <p className="text-text-primary font-medium mt-[32px] mb-3">{'About me'}</p>
    <p className="text-[14px] text-text-secondary">
      {'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'}
    </p>

    <p className="text-text-primary font-medium mt-[32px] mb-3">{'Services included'}</p>
    <div className="flex gap-2">
      {detailsLabel.map((item) => <label className="text-[14px] py-2 px-3 rounded-[35px] text-text-secondary bg-background-tertiary border border-border-primary" key={item}>{item}</label>)}
    </div>

    <p className="text-text-primary font-medium mt-[32px] mb-3">{'Language skills'}</p>
    <div className="flex gap-2">
      {flagData.map((item) =>
        <label className="text-[14px] py-2 px-3 rounded-[35px] text-text-secondary bg-background-tertiary border border-border-primary" key={item}>
          <span className="relative top-[3.5px] mr-[10px] text-left inline-block w-[18px] h-[18px]">
            <Image fill sizes="18px" src={item.icon} />
          </span>
          {item.label}
        </label>)}
    </div>

    <p className="text-text-primary font-medium mt-[32px] mb-3">{'Home closed in'}</p>
    <div className="flex flex-wrap gap-2">
      {locations.map((item) =>
        <label className="text-[14px] py-2 px-3 rounded-[35px] text-text-secondary bg-background-tertiary border border-border-primary" key={item}>
          <span className="relative top-[3.5px] mr-[10px] text-left inline-block w-[18px] h-[18px]">
            <Image fill sizes="18px" src={item.icon} />
          </span>
          {item.label}
        </label>)}
    </div>

    <p className="text-text-primary font-medium mt-[32px] mb-3">{'Commission'}</p>
    <div className="flex gap-2">
      {commission.map((item) => <label className="text-[14px] py-2 px-3 rounded-[35px] text-text-secondary bg-background-tertiary border border-border-primary" key={item}>{item}</label>)}
    </div>

    <div className="flex mt-[32px] mb-3 gap-4">
      <button className="bg-background-primary flex-1 text-white text-[14px] py-2 px-3 rounded-[8px]" type="button">
        <span className="relative top-[3px] mr-[10px] text-left inline-block w-[16px] h-[16px]">
          <Image className="brightness-[0] invert-[1]" fill sizes="16px" src={messageIcon} />
        </span>
        {'Send Message'}
      </button>

      <button className="flex-1 text-[14px] py-2 px-3 bg-white border border-border-primary rounded-[8px]" type="button">
        <span className="relative top-[3px] mr-[10px] text-left inline-block w-[16px] h-[16px]">
          <Image fill sizes="16px" src={shareDarkIcon} />
        </span>
        {'Share'}
      </button>

      <button className="ext-[14px] py-2 px-3 bg-white border border-border-primary rounded-[8px] w-[44px] h-[44px]" type="button">
        <span className="relative top-[3px] text-left inline-block w-[14px] h-[14px]">
          <Image fill sizes="14px" src={heartIcon} />
        </span>
      </button>
    </div>

  </div>;

export default Content;
