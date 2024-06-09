import { Container } from '@mantine/core';

import s from './Prices.module.css';

export const Prices = () => {
  return (
    <section>
      <Container py="xl">
        <div className={s.wrapper}>Prices</div>
      </Container>
    </section>
  );
};
