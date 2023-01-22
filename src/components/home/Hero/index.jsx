import clsx from 'clsx';

import styles from './index.module.css';

import ArrowLink from '../../links/ArrowLink';
import ButtonLink from '../../links/ButtonLink';

const Hero = () => {
  return (
    <section className={styles['header-container']}>
      <div className={clsx('layout', styles.layout)}>
        <h1 className='heading'>Inspire. Educate. Empower</h1>
        <p className={styles.tagLine}>
          This is a community which provides{' '}
          <span className='highlight highlight--light'>
            free hands-on training
          </span>{' '}
          in various fields of computer science and have an inclusive community
          focusing on a{' '}
          <span className='highlight highlight--light'>learn by doing</span>{' '}
          approach.
        </p>
        <div className={styles.links}>
          <ArrowLink
            as={ButtonLink}
            href='https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3'
          >
            Courses
          </ArrowLink>
          <ArrowLink
            as={ButtonLink}
            href='https://github.com/WeMakeDevs/roadmaps'
          >
            Mentorship
          </ArrowLink>
          <ArrowLink
            as={ButtonLink}
            href='https://github.com/WeMakeDevs/events'
          >
            Events
          </ArrowLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
