import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from '../../components/common/DropdownMenu/DropdownMenu';
import { Pagination } from '../../components/common/Pagination';
import styles from './ProductsPage.module.scss';
import { ArrowButton } from '../../components/common/Buttons';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { ProductList } from '../ProductList/ProductList';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { getCatalogProducts } from '../../api/products';
import type { Product } from '../../types/product';

type CategoryParam = {
  category?: 'phones' | 'tablets' | 'accessories';
};

export const ProductsPage = () => {
  const { category } = useParams<CategoryParam>();
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') || 'age';
  const perPage = searchParams.get('perPage') || 'all';
  const page = Number(searchParams.get('page')) || 1;

  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { t } = useTranslation();

  const ITEMS_OPTIONS = [
    { label: '4', value: '4' },
    { label: '8', value: '8' },
    { label: '16', value: '16' },
    { label: t('products.all'), value: 'all' },
  ];

  const SORT_OPTIONS = [
    { label: t('sort.newest'), value: 'age' },
    { label: t('sort.alphabetically'), value: 'title' },
    { label: t('sort.lowToHigh'), value: 'priceAsc' },
    { label: t('sort.highToLow'), value: 'priceDesc' },
  ];

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      setIsLoading(true);

      try {
        const { products, total } = await getCatalogProducts({
          category,
          page,
          perPage,
          sort,
        });

        if (isMounted) {
          setProducts(products);
          setTotal(total);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadProducts();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    return () => {
      isMounted = false;
    };
  }, [category, page, perPage, sort]);

  const pageCount = perPage === 'all' ? 1 : Math.ceil(total / Number(perPage)) || 1;

  const currentSortLabel = SORT_OPTIONS.find((option) => option.value === sort)?.label || 'Newest';

  const handleSortChange = (value: string) => {
    setSearchParams((prev) => {
      prev.set('sort', value);
      prev.delete('page');
      return prev;
    });
  };

  const handlePerPageChange = (value: string) => {
    setSearchParams((prev) => {
      if (value === 'all') {
        prev.delete('perPage');
      } else {
        prev.set('perPage', value);
      }
      prev.delete('page');
      return prev;
    });
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams((prev) => {
      if (newPage === 1) {
        prev.delete('page');
      } else {
        prev.set('page', String(newPage));
      }
      return prev;
    });
  };

  if (!['phones', 'tablets', 'accessories'].includes(category as string)) {
    return <NotFoundPage />;
  }

  return (
    <div className={styles.productsPage}>
      {category && <Breadcrumbs categoryName={category} />}

      <ArrowButton
        text="Back"
        back
      />

      <h1 className={styles.title}>
        {category === 'phones' && t('products.category.phones')}
        {category === 'tablets' && t('products.category.tablets')}
        {category === 'accessories' && t('products.category.accessories')}
      </h1>
      <p className={styles.count}>
        {total} {t('products.models')}
      </p>

      {total !== 0 ?
        <>
          <div className={styles.controls}>
            <div className={styles.control}>
              <span className={styles.controlLabel}>{t('products.sortBy')}</span>
              <Dropdown>
                <DropdownTrigger>{currentSortLabel}</DropdownTrigger>
                <DropdownContent>
                  {SORT_OPTIONS.map((option) => (
                    <DropdownItem
                      key={option.value}
                      onSelect={() => handleSortChange(option.value)}
                    >
                      {option.label}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </Dropdown>
            </div>

            <div className={styles.control}>
              <span className={styles.controlLabel}>{t('products.itemsOnPage')}</span>
              <Dropdown>
                <DropdownTrigger>{perPage === 'all' ? t('products.all') : perPage}</DropdownTrigger>
                <DropdownContent>
                  {ITEMS_OPTIONS.map((option) => (
                    <DropdownItem
                      key={option.value}
                      onSelect={() => handlePerPageChange(option.value)}
                    >
                      {option.label}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </Dropdown>
            </div>
          </div>

          <ProductList
            isLoading={isLoading}
            products={products}
          />

          {perPage !== 'all' && pageCount > 1 && (
            <div className={styles.pagination}>
              <Pagination
                pageCount={pageCount}
                currentPage={page}
                visiblePages={4}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      : <p className={styles.noProducts}>{t('products.noProducts')}</p>}
    </div>
  );
};
