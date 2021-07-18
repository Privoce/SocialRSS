import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';

import { scrollLoad } from '@utils/tools';

export default function useScroll({ fetch: fetchData }: any) {
  const [listData, setListData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleFetch = async () => {
    setLoading(true);
    const data = await fetchData();
    setLoading(false);
    setListData([...listData, ...data]);
  };

  const _scrollLoad = useCallback(
    debounce(
      () => {
        scrollLoad(handleFetch);
      },
      500,
      { leading: true }
    ),
    [listData.pageInfo]
  );

  useEffect(() => {
    window.addEventListener('scroll', _scrollLoad, false);
    return () => {
      window.removeEventListener('scroll', _scrollLoad, false);
    };
  }, []);

  useEffect(() => {
    handleFetch();
  }, []);

  return { loading, listData };
}
