import { Button, Center, Flex, Text, Title } from '@mantine/core';

import s from './WhyUs.module.css';

export const WhyUs = () => {
  return (
    <Flex className={s.wrapper}>
      <Title>Чому ми?</Title>
      <Flex className={s.body}>
        <Flex className={s.bodyCard}>
          <Title order={3} className={s.title}>
            Команда та досвід
          </Title>
          <p className={s.text}>
            Досвід наших співробітників у сфері Веб-розробок становить понад 12 років. Ми
            пропрацюємо Ваш сайт до дрібниць, кожен клієнт залишиться задоволеним.
          </p>
        </Flex>
        <Flex className={s.bodyCard}>
          <Title order={3} className={s.title}>
            Продуктивність
          </Title>
          <p className={s.text}>
            Розроблені нами сайти завжди швидко завантажуються. Ми використовуємо чисті двигуни,
            якісний код та швидкісні сервери. Ваші клієнти не чекатимуть!
          </p>
        </Flex>
        <Flex className={s.bodyCard}>
          <Title order={3} className={s.title}>
            Оптимізація
          </Title>
          <p className={s.text}>
            При розробці сайту ми оптимізуємо його код для швидкості роботи ресурсу, а також для
            подальшого просування в пошуковій системі Google.
          </p>
        </Flex>
        <Flex className={s.bodyCard}>
          <Title order={3} className={s.title}>
            Сучасний дизайн
          </Title>
          <p className={s.text}>
            Дизайн Вашого сайту буде унікальним та адаптивним під будь-які пристрої. Всі функції,
            які є на сайті та доступні для настільних ПК, ви зможете використовувати на смартфоні
            або планшеті.
          </p>
        </Flex>
        <Flex className={s.bodyCard}>
          <Title order={3} className={s.title}>
            Наша перевага
          </Title>
          <p className={s.text}>
            Основна наша перевага перед конкурентами – це вартість послуг. За відносно невисоку
            вартість, ви отримаєте якісний продукт та технічну підтримку. Ми працюємо прозоро і для
            Вашої впевненості у виконанні наших зобов&apos;язань готові укласти з Вами договір.
            Оплату приймаємо як на картку, так і на безготівковий рахунок!
          </p>
        </Flex>
        <Flex className={s.bodyCard}>
          <Title order={3} className={s.title}>
            Служба підтримки
          </Title>
          <p className={s.text}>
            Ми завжди йдемо назустріч своїм клієнтам, тому якщо після створення сайту,
            з&apos;явилися якісь питання (щось додати, прибрати чи замінити) – обов&apos;язково
            допоможемо!
          </p>
        </Flex>
      </Flex>
      <Center>
        <Text className={s.buttonTitle} size="lg">
          Для замовлення перейдіт за посиланням
        </Text>
      </Center>
      <Button fullWidth className={s.control}>
        <a className={s.controlLink} href="/order">
          Замовити
        </a>
      </Button>
    </Flex>
  );
};
