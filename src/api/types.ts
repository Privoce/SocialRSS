// https://github.com/Privoce/SocialRSS/issues/4#issue-929190164

export interface IFeedsItem {
  creator?: string;
  title: string;
  link: string; // "https://twitter.com/DIYgod/status/1404712003688566790",
  pubDate?: string; // "Tue, 15 Jun 2021 08:06:54 GMT",
  author?: string;
  content: string; // Could be HTML for some platforms
  contentSnippet: string; // usually plain text
  guid: string; // "https://twitter.com/DIYgod/status/1404712003688566790",
  isoDate?: string; // "2021-06-15T08:06:54.000Z"
}

export interface IFeeds {
  items: Array<IFeedsItem>;
  description: string;
  title?: string;
  webMaster: string;
  generator: 'RSSHub';
  link: string;
  language: string;
  lastBuildDate: string; // "Thu, 24 Jun 2021 11:58:19 GMT",
  ttl: string; // "60",
  feedUrl: string; // "http://rsshub.app/twitter/user/DIYgod?showEmojiForRetweetAndReply=true&readable=true",
  image?: {
    link: string; // "https://twitter.com/DIYgod/",
    url: string; // "http://pbs.twimg.com/profile_images/1372755693275545608/jxW-To-D_normal.jpg",
    title: string; // "Twitter @DIYgod"
  };
}
