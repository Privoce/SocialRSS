import dayjs from 'dayjs';

export const fmtDate = (date: string) =>
  dayjs(date).format('YYYY-MM-DD hh:ss:mm');
