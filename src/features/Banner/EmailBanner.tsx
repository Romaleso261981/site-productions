import { AspectRatio, Button, Flex, Text, Title } from '@mantine/core';

import image from '../../App/access/web-site/websaits-frames.jpg';
import SocialIcons from '../SocialIcons/SocialIcons';
import classes from './EmailBanner.module.css';

export function EmailBanner() {
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
          <Flex className={classes.controls}>
            <Button w={200}>
              <a className={classes.controlLink} href="/order">
                Замовити
              </a>
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
