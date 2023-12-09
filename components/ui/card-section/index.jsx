import AgentSlider from '../agent-slider';

import CardSide from './card-side';

const CardSection = () =>
  <div className="grid grid-cols-12 gap-5">
    {/* Left Card Side */}
    <div className="col-span-7">
      <CardSide />
    </div>

    {/* Right Carousle */}
    <div className="col-span-5">
      <div className="mb-6">
        <AgentSlider />
      </div>
    </div>
  </div>;

export default CardSection;
