import Layout from '@/components/layout';
import { About, EventCategories, Hero } from '@/components/PageComp/EventsPage';

import { EventsPageContent } from './content';

const EventsPage = () => {
  return (
    <Layout content={EventsPageContent}>
      <Hero />
      <About />
      <EventCategories />
    </Layout>
  );
};
export default EventsPage;
