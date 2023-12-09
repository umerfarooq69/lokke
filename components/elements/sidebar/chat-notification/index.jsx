import SidrbarHeading from '../../../ui/sidebar-heading';
import Tips from '../../../ui/tips';

import Notification from './notification';
import Chat from './chat';

const ChatNotificationSidebar = ({ hideTips }) =>
  <div className="mx-4 grid gap-[48px]">

    {/* Notification */}
    <div>
      <SidrbarHeading badge="2" heading="Notification" />

      <div className="mt-7">
        <Notification />
      </div>
    </div>

    {/* Chat */}
    <div>
      <SidrbarHeading badge="2" heading="Chat" />
      <div className="mt-7">
        <Chat />
      </div>
    </div>

    {/* Tips */}
    {!hideTips ?
      <div>
        <Tips />
      </div>
      : undefined}
  </div>;

export default ChatNotificationSidebar;
