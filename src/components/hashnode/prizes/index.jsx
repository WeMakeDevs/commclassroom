import clsx from 'clsx';

import styles from './index.module.css';

import Hashnode from '../../../assets/hashnode/Special-Prize.png';

const Prizes = ({ background }) => {
  return (
    <section
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg'
      )}
    >
      <div className={clsx('layout', styles.layout)}>
        <h1 className='h1'> Current event & Prize </h1>
        <hr className={clsx('styled-hr', styles.hr)} />
        <img className={styles.hashnodeSpecial} src={Hashnode} />
      </div>
    </section>
  );
};

export default Prizes;
