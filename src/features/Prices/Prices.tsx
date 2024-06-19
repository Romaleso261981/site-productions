import { Center, Container, Flex, Title } from '@mantine/core';

import s from './Prices.module.css';

export const Prices = () => {
  return (
    <section className={s.bg}>
      <Container py="sm">
        <div className={s.wrapper}>
          <Center p={5} mb={30}>
            <Title fw={700} w="90%">
              Ціни на розробку та просування сайту у Вінниці
            </Title>
          </Center>
          <Flex className={s.groupsWrapper}>
            <Flex className={s.group1}>
              <h3>СТВОРЕННЯ САЙТІВ</h3>
              <ul>
                <li>
                  <p>Простий сайт</p>
                  <span>від 5200 грн.</span>
                </li>
                <li>
                  <p>Сайт візитка</p>
                  <span>від 9600 грн.</span>
                </li>
                <li>
                  <p>Лендінг</p>
                  <span>від 5000 грн.</span>
                </li>
                <li>
                  <p>Офіційний сайт</p>
                  <span>від 15000 грн.</span>
                </li>
                <li>
                  <p>Інтернет магазин</p>
                  <span>від 20000 грн.</span>
                </li>
                <li>
                  <p>Корпоративний сайт</p>
                  <span>від 20000 грн.</span>
                </li>
              </ul>
            </Flex>
            <Flex className={s.group2}>
              <h3>SEO</h3>
              <ul>
                <li>
                  <p>Контекстна реклама</p>
                  <span>від 5500 грн.</span>
                </li>
                <li>
                  <p>Просування (SEO)</p>
                  <span>від 9600 грн.</span>
                </li>
                <li>
                  <p>SEO аудит сайту</p>
                  <span>від 10000 грн.</span>
                </li>
                <li>
                  <p>Комплексне просування</p>
                  <span>від 15000 грн.</span>
                </li>
                <li>
                  <p>Стратегія розвитку бізнесу</p>
                  <span>від 50000 грн.</span>
                </li>
                <li>
                  <p>Корпоративний сайт</p>
                  <span>від 20000 грн.</span>
                </li>
              </ul>
            </Flex>
            <Flex className={s.group3}>
              <h3>Послуги</h3>
              <ul>
                <li>
                  <p>Технічна підтримка</p>
                  <span>від 5200 грн.</span>
                </li>
                <li>
                  <p>Додаткові модулі, опції</p>
                  <span>від 4000 грн.</span>
                </li>
                <li>
                  <p>Редизайн сайту</p>
                  <span>від 10000 грн.</span>
                </li>
                <li>
                  <p>Розробка логотипу</p>
                  <span>від 3000 грн.</span>
                </li>
                <li>
                  <p>Індивідуальний дизайн</p>
                  <span>від 20000 грн.</span>
                </li>
                <li>
                  <p>Домен, Хостинг</p>
                  <span>від 2000 грн.</span>
                </li>
              </ul>
            </Flex>
          </Flex>
        </div>
      </Container>
    </section>
  );
};
