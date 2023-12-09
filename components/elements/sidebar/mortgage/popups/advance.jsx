const Advanced = ({ setOpen }) =>
  <div className="p-6 pt-4">
    <h4 className="text-text-primary text-[20px] font-[500] mb-6">{'Advanced Option'}</h4>

    <div>
      <label className="mb-2 block font-normals text-text-primary text-[14px]">{'Annual Property Tax Rate'}</label>
      <div className="relative">
        <input className="w-full h-[48px] outline-none text-[14px] pl-4 border border-border-primary rounded-[8px]" placeholder="0.995" type="text" />
        <span className="absolute min-h-[24px] px-3 right-3 top-[11px] leading-[27px] rounded-[4px] text-text-secondary text-[14px]">{'%'}</span>
      </div>
      <p className="text-[12px] font-[300] text-text-secondary mt-2">
        {'Property taxes are calculated as a percentage of the home value. Tax rates vary by area and is subject to change.'}
      </p>
    </div>

    <div className="mt-8">
      <label className="mb-2 block font-normals text-text-primary text-[14px]">{'Annual Homeowner’s Insurance'}</label>
      <div className="relative">
        <input className="w-full h-[48px] outline-none text-[14px] pl-4 border border-border-primary rounded-[8px]" placeholder="$ 1,309" type="text" />
        <span className="absolute min-h-[24px] px-3 right-3 top-[11px] leading-[27px] rounded-[40px] bg-[#F5F6F8] text-text-secondary text-[14px]">{'0.22%'}</span>
      </div>
      <p className="text-[12px] font-[300] text-text-secondary mt-2">
        {'The average rate for homes is 0.22%. Insurance rates vary by provider and area.'}
      </p>
    </div>

    <button className="block w-full min-h-[40px] text-[14px] text-white bg-background-secondary mt-8 rounded-[8px]" onClick={() => setOpen && setOpen('done')} type="button">
      {'Done'}
    </button>
  </div>;

export default Advanced;
