import {
  AspectRatio,
  Button,
  Card,
  Center,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';

import { ourJobs } from '@/mocData';
import TextTruncate from '@/shared/helpers/TextTruncate/TextTruncate';

import classes from './ArticlesCardsGrid.module.css';

export function ArticlesCardsGrid() {
  const [visibleCount, setVisibleCount] = useState(6);

  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const cards = ourJobs.slice(0, visibleCount).map((article) => (
    <Card key={article.id} p="md" radius="md" component="a" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text className={classes.title} mt={5}>
        <TextTruncate maxLength={50} text={article.title} href={article.href} />
      </Text>
    </Card>
  ));

  return (
    <Container>
      <Center>
        <Title className={classes.mainTitle}>Наші роботи</Title>
      </Center>
      <SimpleGrid cols={isMobile ? 1 : isTablet ? 2 : 3} spacing="md">
        {cards}
      </SimpleGrid>
      {visibleCount < ourJobs.length && (
        <Center mt="md">
          <Button w={200} onClick={handleShowMore}>
            Показати більше
          </Button>
        </Center>
      )}
    </Container>
  );
}
