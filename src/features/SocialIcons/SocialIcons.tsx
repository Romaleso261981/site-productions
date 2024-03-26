import { Flex } from '@mantine/core';
import { FaTelegramPlane, FaViber, FaWhatsapp } from 'react-icons/fa';

import s from './SocialIcons.module.css';

export default function SocialIcons() {
  const handleTelegramClick = () => {
    window.open('https://t.me/Leso_Roman', '_blank');
  };

  const handleWhatsappClick = () => {
    window.open('https://wa.me/380689478723', '_blank');
  };

  const handleViberClick = () => {
    window.open('viber://chat?number=380689478723', '_blank');
  };
  return (
    <Flex mt={20} gap={10} direction="row" justify="center">
      <FaTelegramPlane color="blue" className={s.link} onClick={handleTelegramClick} />
      <FaWhatsapp color="blue" className={s.link} onClick={handleViberClick} />
      <FaViber color="green" className={s.link} onClick={handleWhatsappClick} />
    </Flex>
  );
}
