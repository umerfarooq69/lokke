import PageLayout from '../../elements/page-layout';
import ChatNotificationSidebar from '../../elements/sidebar/chat-notification';
import CardSection from '../../ui/card-section';
import Pagination from '../../ui/pagination';

import PeopleList from './peoples-list';
import PropertyList from './peoples-list/property-list';

const PeopleModule = () =>
  <PageLayout sidebar={<ChatNotificationSidebar />}>
    <div className="grid gap-[48px]">
      <CardSection />
      <PeopleList />
      <PropertyList />
      <Pagination />
    </div>
  </PageLayout>;

export default PeopleModule;
