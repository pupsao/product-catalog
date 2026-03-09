import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

import styles from './ImageCarousel.module.scss';
import { ChevronButton } from '../common/Buttons';
import { BANNER_IMAGES } from '../../constants';

export const ImageCarousel = () => {
  return (
    <article>
      <div className={styles.banner}>
        <ChevronButton
          direction="left"
          className={styles['js-prev']}
        />

        <div className={styles.banner__slider}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: `.${styles.banner__pagination}`,
            }}
            navigation={{
              prevEl: `.${styles['js-prev']}`,
              nextEl: `.${styles['js-next']}`,
            }}
          >
            {BANNER_IMAGES.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.banner__image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ChevronButton
          direction="right"
          className={styles['js-next']}
        />

        {/* Pagination Container */}
        <div className={styles.banner__pagination} />
      </div>
    </article>
  );
};
