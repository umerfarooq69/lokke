import SidrbarHeading from '../../../ui/sidebar-heading';
import Tips from '../../../ui/tips';

import Notification from './notification';
import Chat from './chat';

const ChatNotificationSidebar = ({ hideTips }) =>
  <div className="grid gap-[48px]">

    {/* Notification */}
    <div>
      <div className="pl-4">
        <SidrbarHeading badge="2" heading="Notification" />
      </div>

      <div className="mt-5">
        <Notification />
      </div>
    </div>

    {/* Chat */}
    <div>
      <div className="pl-4">
        <SidrbarHeading badge="2" heading="Chat" />
      </div>

      <div className="mt-5">
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
