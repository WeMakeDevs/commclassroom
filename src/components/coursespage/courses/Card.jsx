import styles from './index.module.css';

import ArrowLink from '../../links/ArrowLink';
import ButtonLink from '../../links/ButtonLink';

const Card = ({ image, title, description, url, btnText }) => {
  return (
    <div className={styles.card}>
      <section>
        <img src={image} alt={title + 'banner'} />
        <div className={styles.cardDetails}>
          <p>{description}</p>
          <ArrowLink as={ButtonLink} className={styles.btn1} href={url}>
            {btnText}
          </ArrowLink>
        </div>
      </section>
    </div>
  );
};

export default Card;
