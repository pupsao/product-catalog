import { ChevronButton } from '../Buttons';
import { NumberButton } from '../Buttons';
import styles from './Pagination.module.scss';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  visiblePages?: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  pageCount,
  currentPage,
  visiblePages = 4,
  onPageChange,
}: PaginationProps) => {
  const getVisiblePages = () => {
    let start = currentPage - Math.floor(visiblePages / 2);

    if (start < 1) start = 1;
    if (start + visiblePages - 1 > pageCount) start = pageCount - visiblePages + 1;
    if (start < 1) start = 1;

    const length = Math.min(visiblePages, pageCount);
    return Array.from({ length }, (_, i) => start + i);
  };

  const pages = getVisiblePages();

  return (
    <ul className={styles.pagination}>
      <li>
        <ChevronButton
          direction="left"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          ariaLabel="Previous page"
        />
      </li>

      {pages.map((page) => (
        <li key={page}>
          <NumberButton
            text={String(page)}
            selected={page === currentPage}
            onClick={() => onPageChange(page)}
          />
        </li>
      ))}

      <li>
        <ChevronButton
          direction="right"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pageCount}
          ariaLabel="Next page"
        />
      </li>
    </ul>
  );
};
