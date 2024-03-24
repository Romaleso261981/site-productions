import { Button, Flex, Text, TextInput, Title } from '@mantine/core';
import { FaTelegramPlane, FaViber, FaWhatsapp } from 'react-icons/fa';

import { CarouselCard } from './CarouselCard/CarouselCard';
import classes from './EmailBanner.module.css';
// import image from './image.svg';

export function EmailBanner() {
  const sendMessage = () => {
    alert('Ваше повідомлення відправленно');
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

        <Flex className={classes.controls}>
          <TextInput
            placeholder="Ваш електронна пошта"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button onClick={sendMessage} ml={10} className={classes.control}>
            Замовити
          </Button>
        </Flex>
        <Flex justify="flex-start" gap={20} align="center" direction="row">
          <Title mt={30}>+380 (68) 947 87 23</Title>
          <Flex mt={20} gap={10} direction="row" justify="center">
            <FaTelegramPlane />
            <FaWhatsapp />
            <FaViber />
          </Flex>
        </Flex>
      </div>
      <Flex className={classes.slide}>
        <CarouselCard />
      </Flex>
      {/* <Image src={image} className={classes.image} /> */}
    </Flex>
  );
}
