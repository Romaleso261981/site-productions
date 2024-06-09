import { Button, Center, Container, Text } from '@mantine/core';

import s from './Strategic.module.css';

export const Strategic = () => {
  return (
    <section>
      <Container py="xl">
        <div className={s.wrapper}>
          <h2 className={s.mainTitle}>
            Розробка ефективних сайтів, інтернет магазинів, Landing Page щвидко та якісно.
          </h2>
          <h3>Стратегія нашого підходу</h3>
          <p>
            Ми розробляємо сайти візитки, лендінг пейдж (односторінкові сайти), інтернет-магазини та
            великі сайти з індивідуальним підходом та рішеннями. Ви можете звернутись за телефоном
            +380 (68) 947 87 23
          </p>
          <p>
            З нами ви отримаєте максимум конверсій: ми створимо вам форму зворотного зв&apos;язку,
            корпоративну пошту і модуль контактів, щоб ваші потенційні клієнти завжди могли з
            зв&apos;язатись.
          </p>
          <p>
            Зрештою, ми гарантуємо максимально швидкий запуск! Беремо на себе всю техпідтримку,
            навчимо керувати сайтом і ні від кого не залежати, укласти офіційний договір з
            прописаними термінами та цінами.
          </p>
        </div>
        <Center>
          <Text className={s.strategicTitle} size="lg">
            Для замовлення перейдіт за посиланням
          </Text>
        </Center>
        <Button fullWidth className={s.control}>
          <a className={s.controlLink} href="/order">
            Замовити
          </a>
        </Button>
      </Container>
    </section>
  );
};
