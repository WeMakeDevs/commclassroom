import BannerImage from 'assets/home/courses.png';
import { BsCalendar, BsClock } from 'react-icons/bs';

import { About, Register, Speakers } from '@/components/IndividualWebinar';
import Layout, { ColumnSection } from '@/components/layout';
import ListItem from '@/components/Listitem';

const IndividualWebinarPage = ({ content }) => {
  return (
    <Layout content={content}>
      <About content={content} />
      <ColumnSection
        id='takeaways'
        src={BannerImage}
        title='Why should you attend?'
        direction='right'
      >
        {content.takeaways.map((takeaway) => (
          <ListItem key={takeaway}>{takeaway}</ListItem>
        ))}
        <ListItem>
          Win exciting gifts and prizes while learning new technology.
        </ListItem>
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
              <BsClock />{' '}
              <b>
                {new Date(content.time).toLocaleTimeString()}{' '}
                {/\((.*)\)/
                  .exec(new Date(content.time).toString())[1]
                  .split(' ')
                  .map((i) => i[0].toUpperCase())
                  .join('')}
              </b>
            </p>
            {/* https://calndr.link/events/lPMjHcfoN4?secret=U5bKjEpszjXevgJ212J3t8T8gbfh2ObAcUbZ */}
            {/* Event link generator */}
            {/* <ButtonLink
              href='https://calndr.link/e/lPMjHcfoN4?s=google'
              className='h4'
              style={{
                gap: '1rem',
                marginTop: '1rem',
              }}
            >
              <SlCalender /> Add to google Calendar
            </ButtonLink>
            <ButtonLink
              href='https://calndr.link/e/lPMjHcfoN4?s=apple'
              className='h4'
              style={{
                gap: '1rem',
                marginTop: '1rem',
              }}
            >
              <BsApple /> Add to Apple Calendar or other
            </ButtonLink> */}
          </div>
        </div>
      </section>

      <Speakers speakers={content.speakers} />
      {new Date().getTime() < new Date(content.time).getTime() ? (
        <Register register={content.register} />
      ) : (
        ''
      )}
    </Layout>
  );
};
export default IndividualWebinarPage;
