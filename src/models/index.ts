import { useEffect } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

export const fzjList = atom({
  key: 'FZJ_LIST',
  default: {
    pageInfo: {},
    list: [],
  },
});
