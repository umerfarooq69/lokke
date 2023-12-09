import AgentSlider from '../../../ui/agent-slider';

import Tour from './tour-section';

const RightSide = () =>
  <div>
    <div className="mb-6">
      <AgentSlider />
    </div>

    <div>
      <Tour />
    </div>
  </div>;

export default RightSide;
