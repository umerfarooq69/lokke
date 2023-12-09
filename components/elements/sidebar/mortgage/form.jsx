const Form = ({ setOpen }) =>
  <div className="grid gap-3">
    <div>
      <label className="mb-2 block font-normals text-text-primary text-[14px]">{'Home Price'}</label>
      <input className="w-full h-[48px] outline-none text-[14px] pl-4 border border-border-primary rounded-[8px]" placeholder="$595,000" type="text" />
    </div>

    <div>
      <label className="mb-2 block font-normals text-text-primary text-[14px]">{'Downpayment'}</label>
      <div className="relative">
        <input className="w-full h-[48px] outline-none text-[14px] pl-4 border border-border-primary rounded-[8px]" placeholder="$119,000" type="text" />
        <span className="absolute min-h-[24px] px-3 right-3 top-[11px] leading-[27px] rounded-[4px] bg-[#F5F6F8] text-text-primary text-[14px]">{'20.0%'}</span>
      </div>
    </div>

    <div>
      <label className="mb-2 block font-normals text-text-primary text-[14px]">{'Loan Program'}</label>
      <div className="relative">
        <input className="w-full h-[48px] outline-none text-[14px] pl-4 border border-border-primary rounded-[8px]" placeholder="30 Year fixed" type="text" />
        <span className="absolute min-h-[24px] px-3 right-3 top-[11px] leading-[27px] rounded-[4px] bg-[#F5F6F8] text-text-primary text-[14px]">{'7.351%'}</span>
      </div>
    </div>

    <button className=" text-text-tertiary text-[14px] text-left w-fit" onClick={() => setOpen && setOpen('form')} type="button">{'Advance option'}</button>
  </div>;

export default Form;
