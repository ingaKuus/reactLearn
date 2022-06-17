import React from 'react';
import { getPagesArray } from '../../utils/pages';
import { usePages } from './../../../hooks/usePages';

const Pagination = ({totalPages, page, changePage}) => {
  const pagesArr = getPagesArray(totalPages)
  
  return (
    <div className="page-btns-wrapper">
      {pagesArr.map(p => {
        console.log(p);
        return <span 
          className={page === p ? 'page-btn current' : 'page-btn'} 
          key={p}
          onClick={() => changePage(p)}
          >
            {p}
          </span>
      })}
    </div>
  );
};

export default Pagination;