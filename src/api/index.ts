// https://github.com/Privoce/SocialRSS/issues/4#issuecomment-867606185
import fetchAPI from '@utils/fetch';
import { IFeeds } from './types';
export * from './types';

// GET /twitter/trends?geoId={number}
// geoId shoule be WOEID: https://www.findmecity.com
export function twitterTrends(geoId: string): Promise<IFeeds> {
  return fetchAPI.get(`/twitter/trends?geoId=${geoId}`);
}

// GET /twitter/user?userId={string}
export function twitterUser(user: string): Promise<IFeeds> {
  return fetchAPI.get(`/twitter/user?user=${user}`);
}

// GET /twitter/keyword?keyword={string}

// GET /wsj?lang={'en-us' | 'zh-cn' | 'zh-tw'}&category={'opinion' | 'world_news' | 'us_business' | 'makret_news' | 'technology'}
