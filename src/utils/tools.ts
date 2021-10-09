import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const fmtDate = (date: string) =>
  dayjs(date).format('YYYY-MM-DD hh:ss:mm');

export const dateToNow = (date: string) => dayjs(date).toNow();

export function scrollLoad(callback: () => void) {
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  const clientHeight =
    window.innerHeight ||
    Math.min(document.documentElement.clientHeight, document.body.clientHeight);

  if (clientHeight + scrollTop >= scrollHeight) {
    callback();
  }
}

export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts: any = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
