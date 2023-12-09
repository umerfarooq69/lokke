import { Fireplace, Interior, appliances, bathroom, flooring, heating } from '../../../../static/static-strings';

const HomeDetails = () =>
  <div className="border border-border-primary bg-white rounded-[16px] p-6">
    <div className="flex">
      <div className="flex-1">
        <h4 className="text-text-primary font-medium">{'Appliances'}</h4>
        <div className="grid gap-3 mt-3">
          {appliances.map((item) => <p className=" text-text-primary text-[14px]" key={item}>{item}</p>)}
        </div>

        <h4 className="text-text-primary font-medium mt-7">{'Flooring'}</h4>
        <div className="grid gap-3 mt-3">
          {flooring.map((item) => <p className=" text-text-primary text-[14px]" key={item}>{item}</p>)}
        </div>
      </div>

      <div className="flex-1">
        <h4 className="text-text-primary font-medium">{'Interior'}</h4>
        <div className="grid gap-3 mt-3">
          {Interior.map((item) => <p className=" text-text-primary text-[14px]" key={item}>{item}</p>)}
        </div>

        <h4 className="text-text-primary font-medium mt-7">{'Bathroom'}</h4>
        <div className="grid gap-3 mt-3">
          {bathroom.map((item) => <p className=" text-text-primary text-[14px]" key={item}>{item}</p>)}
        </div>
      </div>

      <div className="flex-1">
        <h4 className="text-text-primary font-medium">{'Fireplace'}</h4>
        <div className="grid gap-3 mt-3">
          {Fireplace.map((item) => <p className=" text-text-primary text-[14px]" key={item}>{item}</p>)}
        </div>

        <h4 className="text-text-primary font-medium mt-3">{'Heating & Cooling'}</h4>
        <div className="grid gap-3 mt-3">
          {heating.map((item) => <p className=" text-text-primary text-[14px]" key={item}>{item}</p>)}
        </div>
      </div>
    </div>
  </div>;

export default HomeDetails;
