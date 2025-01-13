import { useState } from 'react';

type TextTruncateProps = {
  text: string;
  maxLength: number;
  href?: string;
};

export default function TextTruncate({ text, maxLength, href }: TextTruncateProps) {
  const [showMore, setShowMore] = useState(false);

  const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + ' ...' : text;

  return (
    <div>
      {showMore ? (
        <div>
          <p>{text}</p>
        </div>
      ) : (
        <div>
          <p>{truncatedText}</p>
        </div>
      )}
      {text.length > maxLength && (
        <div>
          <button
            style={{
              marginLeft: '10px',
              background: 'none',
              color: 'blue',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => setShowMore(!showMore)}
            aria-expanded={showMore}>
            {showMore ? 'Показати менше' : 'Показати більше'}
          </button>
          <a
            style={{ marginLeft: '10px', color: 'Blue', border: 'none', textDecoration: 'none' }}
            href={href}>
            Перейти
          </a>
        </div>
      )}
    </div>
  );
}
