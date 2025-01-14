import { Button, Container, Group, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

import classes from './Error-404.module.css';
import { Illustration } from './Illustration';

const NotFound = () => {
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Тут нічого не видно</Title>
          <Text c="dimmed" size="lg" ta="center" className={classes.description}>
            Сторінка, яку ви намагаєтеся відкрити, не існує. Можливо, ви неправильно ввели адресу
            або сторінку переміщено на іншу URL-адресу. Якщо ви вважаєте, що це помилка, зверніться
            до служби підтримки.
          </Text>
          <Group justify="center">
            <Link to="/">
              <Button size="md">Поверни мене на головну сторінку</Button>
            </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
