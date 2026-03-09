import { Icon } from '../../components/common/Icon';
import styles from './About.module.scss';
import { ArrowButton } from '../../components/common/Buttons';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className={styles.about}>
        <ArrowButton
          text="Back"
          back
        />
        <h1>{t('about.title')}</h1>

        <section className={styles.section}>
          <a
            href="https://github.com/product-catalog-frontend/product-catalog-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoButton}
          >
            <Icon
              name="gitHub"
              strokeWidth={1.5}
            />
            {t('about.repo')}
          </a>
        </section>

        <section className={styles.section}>
          <h2>{t('about.team')}</h2>

          <div className={styles.team}>
            <a
              href="https://github.com/dmytro-halieba"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div>
                <h3>Dmytro Halieba</h3>
                <p>Team Lead</p>
              </div>

              <div className={styles.github}>
                <Icon
                  name="gitHub"
                  strokeWidth={1.5}
                />
                @dmytro-halieba
              </div>
            </a>

            <a
              href="https://github.com/Staskovych"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div>
                <h3>Stanislav Mosakov</h3>
                <p>Project Manager</p>
              </div>

              <div className={styles.github}>
                <Icon
                  name="gitHub"
                  strokeWidth={1.5}
                />
                @Staskovych
              </div>
            </a>

            <a
              href="https://github.com/pupsao"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div>
                <h3>Dmytro Kerziuk</h3>
                <p>Frontend Developer</p>
              </div>

              <div className={styles.github}>
                <Icon
                  name="gitHub"
                  strokeWidth={1.5}
                />
                @pupsao
              </div>
            </a>

            <a
              href="https://github.com/Renata11111-afk"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div>
                <h3>Renata Khotiakova</h3>
                <p>Frontend Developer</p>
              </div>

              <div className={styles.github}>
                <Icon
                  name="gitHub"
                  strokeWidth={1.5}
                />
                @Renata11111
              </div>
            </a>

            <a
              href="https://github.com/AdelinaY18"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div>
                <h3>Adelina Yovdii</h3>
                <p>Frontend Developer</p>
              </div>

              <div className={styles.github}>
                <Icon
                  name="gitHub"
                  strokeWidth={1.5}
                />
                @AdelinaY18
              </div>
            </a>

            <a
              href="https://github.com/Starkillerr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div>
                <h3>Braslavskyi Oleksandr</h3>
                <p>Frontend Developer</p>
              </div>

              <div className={styles.github}>
                <Icon
                  name="gitHub"
                  strokeWidth={1.5}
                />
                @Starkillerr
              </div>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};
