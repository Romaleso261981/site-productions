import type { FC, FormEvent } from 'react';
import { useState } from 'react';

import { sendMessage } from '@/shared/helpers/sendMessageIntoTelegram';

import s from './EmailBanner.module.css';

type BannerSaleProps = {
  toggleIsHiden: () => void;
};

export const BannerSale: FC<BannerSaleProps> = ({ toggleIsHiden }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const crossToggler = () => {
    sendMessage('закрили банер без залишення даних');
    toggleIsHiden();
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name || !email || !mobile || !isConsentGiven) {
      alert('Будь ласка, заповніть всі поля та дайте згоду на обробку персональних даних');
      return;
    }
    toggleIsHiden();
    sendMessage(
      `зробили замовлення з банера: email - ${email}, ім'я - ${name}, мобільний - ${mobile}`
    );
  };

  return (
    <div className={s.backDrop}>
      <div className={s.container}>
        <form className={s.wrapper} onSubmit={handleSubmit}>
          <button type="button" onClick={() => crossToggler()} className={s.cross}>
            X
          </button>
          <p>Поділіться email&apos;ом та</p>
          <p>
            отримайте аудит сайту<span>&nbsp;безкоштовно</span>
            {/* отримайте знижку<span>&nbsp;500грн</span> */}
          </p>
          <input
            type="text"
            placeholder="ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className={s.row}></div>
          <input
            type="email"
            placeholder="пошта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={s.row}></div>
          <input
            type="tel"
            placeholder="мобільний"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <div className={s.row}></div>
          <div className={s.policy}>
            <input
              type="checkbox"
              checked={isConsentGiven}
              onChange={(e) => setIsConsentGiven(e.target.checked)}
            />
            <p>Даю згоду на обробку персональних даних</p>
          </div>
          <button type="submit" className={s.button}>
            Підписатись
          </button>
        </form>
      </div>
    </div>
  );
};
