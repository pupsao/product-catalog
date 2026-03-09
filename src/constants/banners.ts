import { getCleanImagePath } from '../utils/getCleanImagePath';

export const BANNERS = [
  {
    path: 'img/main.png',
    alt: 'iPhone 14 Pro promo',
  },
  {
    path: 'img/banner-phones.png',
    alt: 'New phones collection',
  },
  {
    path: 'img/banner-accessories.png',
    alt: 'Premium accessories',
  },
];

export const BANNER_IMAGES = BANNERS.map((banner) => ({
  ...banner,
  src: getCleanImagePath(banner.path),
}));
