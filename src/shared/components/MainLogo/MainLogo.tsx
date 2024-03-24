import { Flex, Image } from '@mantine/core';

import s from './MainLogo.module.css';

export default function MainLogo() {
  return (
    <Flex className={s.imageWrapper}>
      <a href="/">
        <Image
          radius="md"
          h={80}
          src="https://w7.pngwing.com/pngs/925/348/png-transparent-logo-online-and-offline-e-online-design-text-logo-online-and-offline.png"
        />
      </a>
    </Flex>
  );
}
