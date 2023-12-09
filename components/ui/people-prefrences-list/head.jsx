import Image from "next/image";

import { filterLabelsTimes } from "../../../static/import-images";

const Head = () =>
  <div className="flex justify-between">
    <div>
      <button className="flex relative items-center justify-center w-[32px] h-[32px] bg-background-tertiary rounded-[50%]" type="button">
        <span className="relative inline-block w-[16px] h-[16px] ">
          <Image alt="Times" fill sizes="100" src={filterLabelsTimes} />
        </span>
      </button>
    </div>
    <div>
      <p className="text-[20px] text-text-primary">{'Prefrences'}</p>
    </div>
    <div>
      <button className="text-[16px] text-text-secondary relative top-[6px]" type="button">{'Reset'}</button>
    </div>
  </div>;

export default Head;
