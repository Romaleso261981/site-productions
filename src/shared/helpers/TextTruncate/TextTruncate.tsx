import { useState } from 'react';

import s from './TextTruncate.module.css';

type TextTruncateProps = {
  text: string;
  maxLength: number;
  href?: string;
  textColor?: string;
};

export default function TextTruncate({ text, maxLength, href }: TextTruncateProps) {
  const [showMore, setShowMore] = useState(false);

  const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + ' ...' : text;

  return (
    <div className={s.wrapper}>
      {showMore ? (
        <div className={s.showMoreWrapper}>
          <p className={s.showMoreText}>{text}</p>
        </div>
      ) : (
        <div className={s.truncatedWrapper}>
          <p className={s.truncatedText}>{truncatedText}</p>
          {text.length > maxLength && (
            <div className={s.showMoreButtonWrapper}>
              <button onClick={() => setShowMore(!showMore)} aria-expanded={showMore}>
                {showMore ? 'менше' : 'більше'}
              </button>
            </div>
          )}
        </div>
      )}
      {href && (
        <div>
          <a className={s.ancorr} href={href}>
            Перейти
          </a>
        </div>
      )}
    </div>
  );
}
