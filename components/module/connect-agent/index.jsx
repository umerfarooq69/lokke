import PageLayout from '../../elements/page-layout';
import ChatNotificationSidebar from '../../elements/sidebar/chat-notification';

import LeftSide from './left-side';
import RightSide from './right-side';

const ConnectAgentModule = () =>
  <div>
    <PageLayout sidebar={<ChatNotificationSidebar />}>
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

export default ConnectAgentModule;
