// https://github.com/Privoce/SocialRSS/issues/4#issuecomment-867606185
import fetchAPI from '@utils/fetch';
// import { PutPlatformData, ReactionData } from './types';
export * from './types';

export function authRegister(data: Record<string, string>) {
  return fetchAPI.post('/auth/register', data);
}

export function authLogin(data: Record<string, string>) {
  return fetchAPI.post('/auth/login', data);
}

export function authLogout() {
  return fetchAPI.delete('/auth/logout');
}

export function rssDispatch(url: string) {
  return fetchAPI.post('/rss/dispatch', { url });
}

// GET /twitter/trends?geoId={number}
// geoId shoule be WOEID: https://www.findmecity.com
// export function twitterTrends(geoId: string): Promise<IFeeds> {
//   return fetchAPI.get(`/twitter/trends?geoId=${geoId}`);
// }

// // GET /twitter/user?userId={string}
// export function twitterUser(user: string): Promise<IFeeds> {
//   return fetchAPI.get(`/twitter/user?user=${user}`);
// }

// GET /twitter/keyword?keyword={string}

// GET /wsj?lang={'en-us' | 'zh-cn' | 'zh-tw'}&category={'opinion' | 'world_news' | 'us_business' | 'makret_news' | 'technology'}

// export function getListByUser(id: string) {
//   return fetchAPI.get(`/feeds/list?userId=${id}`);
// }
// export function getAvailablePlatforms() {
//   return fetchAPI.get(`/platforms`);
// }
// export function setsubScribePlatforms(data: PutPlatformData) {
//   return fetchAPI.put(`/platforms`, data);
// }
// export function getReactionList() {
//   return fetchAPI.get(`/feed/reaction?actionType=archive`);
// }
// export function addReactionList(data: ReactionData) {
//   return fetchAPI.put(`/feed/reaction`, data);
// }
