import type { FC } from 'react';

import s from './WeWillCallYou.module.css';

type WeWillCallYouProps = {
  toggleBaner: () => void;
};

export const WeWillCallYou: FC<WeWillCallYouProps> = ({ toggleBaner }) => {
  return (
    <section className={s.wrapper}>
      <div className={s.crosDiv}>
        <div className={s.container}>
          <button onClick={() => toggleBaner()} className={s.closet}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              enableBackground="new 0 0 24 24"
              xmlSpace="preserve">
              <polygon points="24,0.993 22.985,-0.024 12,10.983 1.015,-0.024 0,0.993 10.985,12 0,23.008 1.015,24.023 12,13.017 22.985,24.023 24,23.008 13.015,12 "></polygon>
            </svg>
          </button>
          <div className={s.bingcWeWillCallYou}>
            Хочете, зателефонуємо Вам
            <br />
            <span>за 30 секунд?</span>
          </div>
          <div className={s.phoneForm}>
            <form action="submit">
              <input type="text" placeholder="Ваш номер телефону" />
              <button>Зателефонуйте</button>
            </form>
          </div>
          <div>
            <span className={s.timer}>
              <span>00:</span>29<span>:99</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
