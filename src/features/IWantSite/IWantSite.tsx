import { IconPhoneIncoming } from '@tabler/icons-react';

import s from './IWantSite.module.css';

export const IWantSite = () => {
  return (
    <a href={'order'} className={s.wrapper}>
      <IconPhoneIncoming />
      <span>Хочу сайт</span>
    </a>
  );
};
