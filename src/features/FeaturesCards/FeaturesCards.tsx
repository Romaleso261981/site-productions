import { Avatar, Card, Center, Container, SimpleGrid, Text, Title } from '@mantine/core';

import { mockdata } from '@/mocData';

import classes from './FeaturesCards.module.css';

export function FeaturesCards() {
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <Center>
        <Avatar src={feature.icon} w={80} h={100} radius="sm" />
      </Center>
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="sm">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Лендінг-пейдж ідеально підходить для:
      </Title>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
