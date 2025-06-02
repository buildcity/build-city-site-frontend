import { PageLayout, PageTitle, PageSubtitle } from '../components/PageLayout';
import { fadeInClasses } from '../lib/animations';

const Events = () => {
  return (
    <PageLayout>
      <PageTitle>Events</PageTitle>
      <PageSubtitle>
        Join us at upcoming Build City events, workshops, and vibathons. Stay connected, learn, and build with the community.
      </PageSubtitle>

      <div className={`flex justify-center ${fadeInClasses.delay2}`}>
        <iframe
          src="https://lu.ma/embed/calendar/cal-d1wlfLEZn2QMKYB/events?lt=dark"
          width="100%"
          height="500"
          frameBorder="0"
          style={{ borderRadius: '12px', border: '1px solid #bfcbda88', overflow: 'hidden', width: '100%', maxWidth: '100%' }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </PageLayout>
  );
};

export default Events;
