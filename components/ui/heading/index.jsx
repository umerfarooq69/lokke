const Heading = ({ heading, text }) =>
  <div>
    <h4 className="text-[24px] text-text-primary font-medium">
      {heading || ''}
    </h4>
    <p className="text-text-secondary mt-2">{text || ''}</p>
  </div>;

export default Heading;
