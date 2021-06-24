import { useEffect, useState } from 'react';
import { twitterUser } from '@/api';
import { IFeeds } from '@/api/types';

export function useTwitterUser(user: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IFeeds>();

  useEffect(() => {
    (async () => {
      const _data = await twitterUser(user);
      setLoading(false);
      setData(_data);
    })();
  }, []);

  return { loading, data };
}
