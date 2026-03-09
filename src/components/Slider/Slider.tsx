import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import buttonStyle from '../BrandNewModelsCarousel/BrandNewModelsCarousel.module.scss';
import styles from './Slider.module.scss';
import '../../assets/styles/variables.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import type { Product } from '../../types/product';

interface Props {
  data: Product[];
}

export const Slider = ({ data }: Props) => {
  return (
    <div className={styles['banner__slider']}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={16}
        slidesPerView={4}
        loop={data.length > 4}
        speed={800}
        navigation={{
          prevEl: `.${buttonStyle['js-prev']}`,
          nextEl: `.${buttonStyle['js-next']}`,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
