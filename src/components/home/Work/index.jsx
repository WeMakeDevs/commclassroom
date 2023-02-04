import clsx from 'clsx';

import styles from './index.module.css';

import Adobe from '../../../assets/home/adobe.svg';
import Amazon from '../../../assets/home/amazon.svg';
import Cisco from '../../../assets/home/Cisco.svg';
import Google from '../../../assets/home/google.svg';
import Microsoft from '../../../assets/home/microsoft.svg';
import Razorpay from '../../../assets/home/razorpay.svg';
import Samsung from '../../../assets/home/Samsung.svg';
import Virtusa from '../../../assets/home/virtusa.svg';

const index = () => {
  return (
    <div>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Our students work at</h2>
        <hr className={clsx('styled-hr', styles.headingWorkLine)} />
        <div className={styles.workImg}>
          <img className={styles.workGoogle} src={Google} alt='google' />
          <img className={styles.workAmazon} src={Amazon} alt='amazon' />
          <img className={styles.workMicro} src={Microsoft} alt='microsoft' />
          <img className={styles.workAdobe} src={Adobe} alt='adobe' />
          <img className={styles.Samsung} src={Samsung} alt='samsung' />
          <img className={styles.virtusa} src={Virtusa} alt='virtusa' />
          <img className={styles.Cisco} src={Cisco} alt='Cisco' />
          <img className={styles.Razorpay} src={Razorpay} alt='Razorpay' />
        </div>
      </div>
    </div>
  );
};

export default index;
