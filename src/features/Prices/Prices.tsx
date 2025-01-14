import { Center, Container, Flex, Title } from '@mantine/core';

import { pricesForServices } from '@/mocData';

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
              <h3>{pricesForServices[0].title}</h3>
              <ul>
                {pricesForServices[0].work.map((item) => (
                  <li key={item.id}>
                    <p>{item.title}</p>
                    <span>{`від ${item.price} грн.`}</span>
                  </li>
                ))}
              </ul>
            </Flex>
            <Flex className={s.group2}>
              <h3>{pricesForServices[1].title}</h3>
              <ul>
                {pricesForServices[1].work.map((item) => (
                  <li key={item.id}>
                    <p>{item.title}</p>
                    <span>{`від ${item.price} грн.`}</span>
                  </li>
                ))}
              </ul>
            </Flex>
            <Flex className={s.group3}>
              <h3>{pricesForServices[2].title}</h3>
              <ul>
                {pricesForServices[2].work.map((item) => (
                  <li key={item.id}>
                    <p>{item.title}</p>
                    <span>{`від ${item.price} грн.`}</span>
                  </li>
                ))}
              </ul>
            </Flex>
          </Flex>
        </div>
      </Container>
    </section>
  );
};
