import Mortgage from '../../elements/sidebar/mortgage';
import PageLayout from '../../elements/page-layout';
import Back from '../../ui/back';

import LeftSide from './left-side';
import RightSide from './right-side';

const PropertyDetailsModule = () =>
  <div>
    <PageLayout sidebar={<Mortgage />}>
      <div className="mb-5">
        <Back />
      </div>

      <div className="relative grid grid-cols-12 gap-5">
        {/* Left Side */}
        <div className="col-span-7">
          <LeftSide />
        </div>

        {/* Right Side */}
        <div className="col-span-5 ">
          <RightSide />
        </div>
      </div>
    </PageLayout>
  </div>;

export default PropertyDetailsModule;
