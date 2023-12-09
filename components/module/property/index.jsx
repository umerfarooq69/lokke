import PageLayout from '../../elements/page-layout';
import ChatNotificationSidebar from '../../elements/sidebar/chat-notification';
import CardSection from '../../ui/card-section';
import Pagination from '../../ui/pagination';

import TopProperties from './top-properties';
import PropertyList from './top-properties/property-list';

const HomeModule = () =>
  <PageLayout sidebar={<ChatNotificationSidebar />}>
    <div className="grid gap-[48px]">
      <CardSection />
      <TopProperties />
      <PropertyList />
      <Pagination />
    </div>
  </PageLayout>;

export default HomeModule;
