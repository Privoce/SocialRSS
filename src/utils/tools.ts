import dayjs from 'dayjs';

export const fmtDate = (date: string) =>
  dayjs(date).format('YYYY-MM-DD hh:ss:mm');

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
