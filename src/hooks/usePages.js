import { useMemo } from "react";
import { getPagesArray } from "../components/utils/pages";


export const usePages = (totalPages, page, changePage) => {
  let pageBtns = useMemo( () => {
    const pagesArray = getPagesArray(totalPages)
    console.log(`total pages: ${totalPages}`);

    return (
      <div className="page-btns-wrapper">
        {pagesArray.map(p => {
          return <span 
            className={page === p ? 'page-btn current' : 'page-btn'} 
            key={p}
            onClick={(e) => {
              changePage(p)
            }}
            >
              {p}
            </span>
        })}
      </div>
    );
  }, [totalPages, page]);

  return pageBtns
}