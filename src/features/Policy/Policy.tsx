import { Container, Text, Title } from '@mantine/core';

import classes from './Policy.module.css';

export function Policy() {
  return (
    <Container className={classes.root}>
      <Title className={classes.title}>Privacy policy</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Цей веб-сайт використовує файли cookie для покращення користувацького досвіду. Дізнайтеся
        більше про нашу <a href="/privacy-policy">політику конфіденційності</a> тут.
      </Text>
    </Container>
  );
}
