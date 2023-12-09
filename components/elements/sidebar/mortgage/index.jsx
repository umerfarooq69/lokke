import SidrbarHeading from '../../../ui/sidebar-heading';
import Chat from '../chat-notification/chat';

import MortgageCal from './mortgage-cal';

const Mortgage = () =>
  <div className="">
    <div className="p-6 bg-background-tertiary rounded-[16px]">
      <MortgageCal />
    </div>

    <div className="p-6 mt-8 grid gap-5">
      <SidrbarHeading badge="2" heading="Chat" />
      <Chat />
    </div>
  </div>;

export default Mortgage;
