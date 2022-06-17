import { useMemo } from 'react';
import { getPagesArray, getPageCount } from '../components/utils/pages';

export const usePages = (totalCount, limit) => {
  console.log(totalCount);
  const totalPages = getPageCount(totalCount, limit);
  
  const pagesArr = useMemo(() => {
    return getPagesArray(totalPages)
  }, [totalPages])

  return pagesArr;
}