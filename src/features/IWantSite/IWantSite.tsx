import { IconPhoneIncoming } from '@tabler/icons-react';

import s from './IWantSite.module.css';

export const IWantSite = () => {
  return (
    <div className={s.wrapper}>
      <IconPhoneIncoming />
      <span>Хочу сайт</span>
    </div>
  );
};
