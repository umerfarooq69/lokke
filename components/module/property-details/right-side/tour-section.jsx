import Calendar from '../../../ui/calendar';

const Tour = () =>
  <div className="border border-border-primary bg-white rounded-[16px] p-6">
    <h4 className="text-[18px] text-text-primary font-medium mb-3">{'Tour This Home'}</h4>
    <p className="text-text-secondary text-[14px]">{'Book a free tour of this home'}</p>

    <div className="mt-6">
      <Calendar />
    </div>
  </div>;

export default Tour;
