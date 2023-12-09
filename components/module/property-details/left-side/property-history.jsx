const PropertyHistory = () =>
  <div className="border border-border-primary bg-white rounded-[16px] p-6">
    <div className="flex justify-between">
      <div>
        <h4 className="text-[18px] font-medium text-text-primary">
          {'Nov 09, 2023'}
          <span className="bg-[#4ECB62] inline-block ml-5 top-[-2px] relative min-h-[28px] px-2 font-normal rounded-[40px] text-white">{'Active'}</span>
        </h4>
        <p className=" text-text-secondary mt-1">{'NWML  #2177914'}</p>
      </div>
      <div className="flex items-center text-[18px] font-medium">
        {'$1,649,000'}
      </div>
    </div>
  </div>;

export default PropertyHistory;
