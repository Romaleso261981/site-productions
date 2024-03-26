import { AspectRatio, Button, Center, Flex, Text, TextInput, Title } from '@mantine/core';
import { useState } from 'react';

import { sendMessage } from '@/shared/helpers/sendMessageIntoTelegram';

import image from '../../App/access/web-site/websaits-frames.jpg';
import SocialIcons from '../SocialIcons/SocialIcons';
import classes from './EmailBanner.module.css';

export function EmailBanner() {
  const [value, setValue] = useState('');

  const handleSendMessage = () => {
    sendMessage(value);
    setValue('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Flex className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Професійне виробництво сайтів</Title>
        <Text fw={500} fz="lg" mb={5}>
          Що ми пропонуємо нашим клієнтам
        </Text>
        <Text fz="sm" c="cyan">
          Ми розробляємо сайти візитки, лендінг пейдж (односторінкові сайти), інтернет-магазини та
          великі сайти з індивідуальним підходом та рішеннями. Ви можете звернутись за телефоном
          +380 (68) 947 87 23
        </Text>
        <Text fz="sm" c="cyan">
          Якщо у Вас уже є сайт, ми можемо покращити його оновити дизайн, також ми надаємо технічну
          підтримку нашим клієнтам.
        </Text>
        <Text fz="sm" c="cyan">
          Ми можемо надати Вам послуги по SEO просування та оптимізації сайту в пошуковій системі
          Google. Також надамо послугу з налаштування контекстної реклами.
        </Text>
        <Flex className={classes.sendMessageWrapper}>
          <Center>
            <Text size="lg">Для замовлення напишіть свій номер мобільного</Text>
          </Center>
          <Flex className={classes.controls}>
            <TextInput
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              placeholder="Ваш номер телефону"
              classNames={{ input: classes.input, root: classes.inputWrapper }}
              onKeyDown={handleKeyPress}
            />
            <Button onClick={handleSendMessage} ml={10} className={classes.control}>
              Замовити
            </Button>
          </Flex>
        </Flex>
        <Flex className={classes.social}>
          <Title mt={30}>+380 (68) 947 87 23</Title>
          <SocialIcons />
        </Flex>
      </div>
      <div className={classes.slide}>
        <AspectRatio ratio={1080 / 720} maw={500} className={classes.heroImage}>
          <img src={image} alt="Panda" />
        </AspectRatio>
      </div>
    </Flex>
  );
}
