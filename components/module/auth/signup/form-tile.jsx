import Image from "next/image";

import { faCheckIcon, questionIcon, spinnerIcon, warnIcon } from "../../../../static/import-images";

const FormTile = ({ label }) =>
  <div>
    <div className="flex justify-between">
      <label className="text-[14px] font-[400] text-text-primary">{label}</label>
      <span className="relative h-[16px] w-[16px]">
        <Image alt="spinner" fill sizes="100" src={spinnerIcon} />
      </span>
    </div>
    <div className="relative my-2">
      <input className="w-full h-[48px] outline-none text-[14px] pl-4 border border-border-primary rounded-[8px]" placeholder="Input textarea" type="text" />

      <span className="absolute right-4 top-[16px] mr-2 h-[16px] w-[16px]">
        <Image alt="spinner" fill sizes="100" src={faCheckIcon} />
      </span>
    </div>
    <div className="flex justify-between">
      <label className="text-[14px] font-[400] text-text-secondary">
        <span className="relative inline-block top-[3px] mr-2 h-[16px] w-[16px]">
          <Image alt="spinner" fill sizes="100" src={warnIcon} />
        </span>
        {'This is warning message...'}
      </label>
      <span className="relative top-[3px] h-[16px] w-[16px]">
        <Image alt="spinner" fill sizes="100" src={questionIcon} />
      </span>
    </div>
  </div>;

export default FormTile;
