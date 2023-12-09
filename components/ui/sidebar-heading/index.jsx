const SidrbarHeading = ({ heading, badge }) =>
  <div>
    <h4 className="text-[18px] font-medium">
      {heading || ''}
      <span className="inline-block text-[14px] bg-background-quaternary px-[6px] py-[0.5px] text-white rounded-[8px] ml-3 leading-0 font-normal">{badge || ''}</span>
    </h4>
  </div>;

export default SidrbarHeading;
