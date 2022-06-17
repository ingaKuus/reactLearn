import { useMemo } from "react";


export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    return sortPosts(sort);
  }, [sort, posts])

  
  function sortPosts(sort) {
    if (!sort) {
      return posts;
    }

    let isReversed;

    if(sort.includes('-reverse')) {
      sort = sort.split('-reverse')[0]
      isReversed = true;
    }

    return [...posts].sort((a,b) => {
      const sortResult = a[sort].localeCompare(b[sort])
      return isReversed ?  -sortResult : sortResult;
    })
  }

  return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort)
  
  const sortedAndSearchedPosts = useMemo(() => {
    return searchPosts(query)
  }, [query, sortedPosts])

  
  function searchPosts(query) {
    return sortedPosts.filter((p) => {
      return p.title.toLowerCase().includes(query.toLowerCase());
    })
  }

  return sortedAndSearchedPosts;
}