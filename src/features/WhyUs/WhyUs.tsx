import { Button, Center, Flex, Text, Title } from '@mantine/core';

import TextTruncate from '@/shared/helpers/TextTruncate/TextTruncate';

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
          <TextTruncate
            text="Досвід наших співробітників у сфері Веб-розробок становить понад 12 років. Ми
            пропрацюємо Ваш сайт до дрібниць, кожен клієнт залишиться задоволеним."
            maxLength={150}
          />
        </Flex>
        <Flex className={s.bodyCard}>
          <Title order={3} className={s.title}>
            Продуктивність
          </Title>
          <TextTruncate
            text="Розроблені нами сайти завжди швидко завантажуються. Ми використовуємо чисті двигуни,
            якісний код та швидкісні сервери. Ваші клієнти не чекатимуть!"
            maxLength={150}
          />
        </Flex>
        <Flex className={s.bodyCard}>
          <Title order={3} className={s.title}>
            Оптимізація
          </Title>
          <TextTruncate
            text="При розробці сайту ми оптимізуємо його код для швидкості роботи ресурсу, а також для
            подальшого просування в пошуковій системі Google."
            maxLength={150}
          />
        </Flex>
        <Flex className={s.bodyCard}>
          <Title order={3} className={s.title}>
            Сучасний дизайн
          </Title>
          <TextTruncate
            text="Дизайн Вашого сайту буде унікальним та адаптивним під будь-які пристрої. Всі функції,
            які є на сайті та доступні для настільних ПК, ви зможете використовувати на смартфоні
            або планшеті."
            maxLength={150}
          />
        </Flex>
        <Flex className={s.bodyCard}>
          <Title order={3} className={s.title}>
            Наша перевага
          </Title>
          <TextTruncate
            text="Основна наша перевага перед конкурентами – це вартість послуг. За відносно невисоку
            вартість, ви отримаєте якісний продукт та технічну підтримку. Ми працюємо прозоро і для
            Вашої впевненості у виконанні наших зобов`язань готові укласти з Вами договір.
            Оплату приймаємо як на картку, так і на безготівковий рахунок!"
            maxLength={150}
          />
        </Flex>
        <Flex className={s.bodyCard}>
          <Title order={3} className={s.title}>
            Служба підтримки
          </Title>
          <TextTruncate
            text=" Ми завжди йдемо назустріч своїм клієнтам, тому якщо після створення сайту,
            з'явилися якісь питання (щось додати, прибрати чи замінити) – обов'язково
            допоможемо!"
            maxLength={150}
          />
        </Flex>
      </Flex>
      <Center>
        <Text className={s.buttonTitle} size="lg">
          Для замовлення перейдіт за посиланням
        </Text>
      </Center>
      <Button w={200}>
        <a className={s.controlLink} href="/order">
          Замовити
        </a>
      </Button>
    </Flex>
  );
};
