import { Avatar, Card, Center, Container, SimpleGrid, Text, Title } from '@mantine/core';

import icon from '../../App/access/who8.png';
import classes from './FeaturesCards.module.css';

const mockdata = [
  {
    title: 'Сфери послуг',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: icon
  },
  {
    title: 'Продажу унікальних або дорогого товару',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: 'https://fabryka.cc/images/landingpage/who3.png'
  },
  {
    title: 'Оптової торгівлі',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: 'https://fabryka.cc/images/landingpage/who4.png'
  },

  {
    title: 'Навчальних програм',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: 'https://fabryka.cc/images/landingpage/who3.png'
  },
  {
    title: 'Будівельного бізнесу',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: 'https://fabryka.cc/images/landingpage/who3.png'
  },
  {
    title: 'Будівельного бізнесу',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: 'https://fabryka.cc/images/landingpage/who3.png'
  }
];

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
