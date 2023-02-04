import clsx from 'clsx';
import { FaGraduationCap, FaMagic, FaUsers, FaYoutube } from 'react-icons/fa';

import styles from './index.module.css';

const Stats = () => {
  return (
    <div className={clsx(styles.section)}>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Numbers say it all</h2>
        <hr className={clsx('styled-hr', styles.headingLine)} />
        <div className={styles.statsContainer}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaUsers />
            </div>
            <div className={styles.number}>56,000+</div>
            <div className={styles.title}>Members</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaMagic />
            </div>
            <div className={styles.number}>20,000+</div>
            <div className={styles.title}>Positive Reviews</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaYoutube />
            </div>
            <div className={styles.number}>350,000+</div>
            <div className={styles.title}>Youtube</div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaGraduationCap />
            </div>
            <div className={styles.number}>500+</div>
            <div className={styles.title}>Colleges</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
