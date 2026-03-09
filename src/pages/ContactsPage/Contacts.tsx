import styles from './Contacts.module.scss';
import { Icon } from '../../components/common/Icon';
import { ArrowButton } from '../../components/common/Buttons';
import { useTranslation } from 'react-i18next';
import { getCleanImagePath } from '../../utils/getCleanImagePath';

export const Contacts: React.FC = () => {
  const { t } = useTranslation();

  const dmytroHPhoto = getCleanImagePath('/img/dmytroh-contacts.jpg');
  const dmytroKPhoto = getCleanImagePath('/img/dmytrok-contacts.jpg');
  const stanislavPhoto = getCleanImagePath('/img/stanislav-contacts.webp');
  const adelinaPhoto = getCleanImagePath('/img/adelina-contacts.jpg');
  const renataPhoto = getCleanImagePath('/img/renata-contacts.jpg');
  const oleksandrPhoto = getCleanImagePath('/img/oleksandr-contacts.webp');

  return (
    <main className={styles.contacts}>
      <ArrowButton
        text="Back"
        back
      />
      <h1>{t('contacts.title')}</h1>

      <p className={styles.subtitle}>{t('contacts.subtitle')}</p>
      <section className={styles.team}>
        <div className={styles.card}>
          <img
            src={dmytroHPhoto}
            alt="Dmytro Halieba"
            className={styles.photo}
          />

          <h3>Dmytro Halieba</h3>

          <div className={styles.links}>
            <a
              href="mailto:dmytro.halyeba@gmail.com"
              className={styles.link}
            >
              <Icon
                name="mail"
                size={18}
              />
              dmytro.halyeba@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/dmytro-halieba-86b365374/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkedinIcon}>
                <Icon
                  name="linkedin"
                  size={18}
                />
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={stanislavPhoto}
            alt="Stanislav Mosakov"
            className={styles.photo}
          />

          <h3>Stanislav Mosakov</h3>

          <div className={styles.links}>
            <a
              href="mailto:stanislav.mosakov.dev@gmail.com"
              className={styles.link}
            >
              <Icon
                name="mail"
                size={18}
              />
              stanislav.mosakov.dev@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/stanislav-mosakov-02a285238/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkedinIcon}>
                <Icon
                  name="linkedin"
                  size={18}
                />
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={dmytroKPhoto}
            alt="Dmytro Kerziuk"
            className={styles.photo}
          />

          <h3>Dmytro Kerziuk</h3>

          <div className={styles.links}>
            <a
              href="mailto:dmytro.kerziuk@gmail.com"
              className={styles.link}
            >
              <Icon
                name="mail"
                size={18}
              />
              dmytro.kerziuk@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/dmytro-kerziuk-388a9b3a5/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkedinIcon}>
                <Icon
                  name="linkedin"
                  size={18}
                />
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={renataPhoto}
            alt="Renata Khotiakova"
            className={styles.photo}
          />

          <h3>Renata Khotiakova</h3>

          <div className={styles.links}>
            <a
              href="mailto:khotiakovarena@gmail.com"
              className={styles.link}
            >
              <Icon
                name="mail"
                size={18}
              />
              khotiakovarena@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/renata-khotiakova-620a183b0/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkedinIcon}>
                <Icon
                  name="linkedin"
                  size={18}
                />
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={adelinaPhoto}
            alt="Adelina Yovdii"
            className={styles.photo}
          />

          <h3>Adelina Yovdii</h3>

          <div className={styles.links}>
            <a
              href="mailto:adelincaiovdii@gmail.com"
              className={styles.link}
            >
              <Icon
                name="mail"
                size={18}
              />
              adelincaiovdii@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/adelina-iovdii-9496863ab/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkedinIcon}>
                <Icon
                  name="linkedin"
                  size={18}
                />
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={oleksandrPhoto}
            alt="Braslavskyi Oleksand"
            className={styles.photo}
          />

          <h3>Braslavskyi Oleksandr</h3>

          <div className={styles.links}>
            <a
              href="mailto:brasal07@gmail.com"
              className={styles.link}
            >
              <Icon
                name="mail"
                size={18}
              />
              brasal07@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/oleksandr-braslavskyi-46b1553b1/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkedinIcon}>
                <Icon
                  name="linkedin"
                  size={18}
                />
              </span>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
