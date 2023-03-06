import BannerImage from 'assets/home/courses.png';
import { BsCalendar, BsClock } from 'react-icons/bs';

import { About, Register, Speakers } from '@/components/IndividualWebinar';
import Layout, { ColumnSection } from '@/components/layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import ListItem from '@/components/Listitem';

const IndividualWebinarPage = ({ content }) => {
  return (
    <Layout content={content}>
      <About content={content} />
      <ColumnSection
        id='takeaways'
        src={BannerImage}
        title='What you will learn'
        direction='right'
      >
        {content.takeaways.map((takeaway) => (
          <ListItem key={takeaway}>{takeaway}</ListItem>
        ))}
      </ColumnSection>
      <section id='time'>
        <div
          className='layout'
          style={{
            paddingBlock: '6rem',
          }}
        >
          <h2 className='h1'>Time & Date</h2>
          <hr
            className='styled-hr'
            style={{
              marginBlock: '1.5rem',
            }}
          />
          <div
            className='h2'
            style={{
              display: 'flex',
              justifyContent: 'cetner',
              gap: '1rem',
              flexDirection: 'column',
            }}
          >
            <p
              style={{
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'cetner',
                alignItems: 'center',
                gap: '1rem',
                flexDirection: 'row',
              }}
            >
              <BsCalendar /> <b> {new Date(content.time).toDateString()}</b>
            </p>
            <p
              style={{
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'cetner',
                alignItems: 'center',
                gap: '1rem',
                flexDirection: 'row',
              }}
            >
              <BsClock /> <b> {new Date(content.time).toTimeString()}</b>
            </p>
            <ArrowLink
              as={ButtonLink}
              href='#register'
              openNewTab
              className='h4'
              style={{
                marginTop: '1rem',
              }}
            >
              Register
            </ArrowLink>
          </div>
        </div>
      </section>
      <Speakers speakers={content.speakers} />
      <Register />
    </Layout>
  );
};
export default IndividualWebinarPage;
