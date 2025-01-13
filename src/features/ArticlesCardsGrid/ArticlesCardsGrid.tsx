import {
  AspectRatio,
  Card,
  Center,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title
} from '@mantine/core';

import { ourJobs } from '@/mocData';

import classes from './ArticlesCardsGrid.module.css';

export function ArticlesCardsGrid() {
  const cards = ourJobs.map((article) => (
    <Card
      key={article.id}
      p="md"
      radius="md"
      component="a"
      href={article.href}
      className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container>
      <Center>
        <Title mb={20}>Наші роботи</Title>
      </Center>
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{cards}</SimpleGrid>
    </Container>
  );
}
