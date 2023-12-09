const TopButtons = ({ setFormType }) =>
  <div className="border-[2px] flex border-border-primary rounded-[5px] w-fit shadow-[0px_2px_5px_0px_rgba(38,51,77,0.03)]">
    <button className="border-r-[2px] border-border-primary py-4 px-6 text-[14px] outline-none font-[500] text-text-primary" onClick={() => setFormType('user')} type="button">{'User'}</button>
    <button className="py-4 px-6 text-[14px] outline-none font-[500] text-text-primary" onClick={() => setFormType('professional')} type="button">{'Professional'}</button>
  </div>;

export default TopButtons;
