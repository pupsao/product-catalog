import React from 'react';
import styles from './Privacy.module.scss';
import { ArrowButton } from '../../components/common/Buttons';
import { useTranslation } from 'react-i18next';

export const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className={styles.privacy}>
        <ArrowButton
          text="Back"
          back
        />
        <h1>{t('privacy.title')}</h1>

        <section>
          <h2>{t('privacy.copyright')}</h2>
          <p>
            All materials on this website, including text, graphics, logos, icons, images, and code,
            are the property of the Nice Gadgets Project Team.
          </p>
          <p>© 2026 Nice Gadgets Project Team. All rights reserved.</p>
        </section>

        <section>
          <h2>{t('privacy.mit')}</h2>
          <p>Copyright (c) 2026 Nice Gadgets Project Team</p>
          <p>
            Permission is hereby granted, free of charge, to any person obtaining a copy of this
            software and associated documentation files (&quot;Software&quot;), to use, copy,
            modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
            to permit others to do so, subject to the following conditions:
          </p>
          <p>
            The above copyright notice and this permission notice shall be included in all copies or
            substantial portions of the Software.
          </p>
          <p>
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
            HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF
            CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR
            THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          </p>
        </section>
      </main>
    </>
  );
};
