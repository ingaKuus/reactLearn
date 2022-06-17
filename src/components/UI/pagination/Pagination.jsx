import React from 'react';
import { getPagesArray } from '../../utils/pages';
import { usePages } from './../../../hooks/usePages';

const Pagination = ({totalPages, page, changePage}) => {

  return usePages(totalPages, page, changePage)

};

export default Pagination;