import { AspectRatio, Card, Container, Image, SimpleGrid, Text } from '@mantine/core';

import classes from './ArticlesCardsGrid.module.css';

const mockdata = [
  {
    id: '1',
    title: 'Невеличкий лендінг по виробничтву сайтів',
    image: 'https://www.site-productions.com.ua/assets/websaits-frames-28d18892.jpg',
    href: 'https://www.site-productions.com.ua/',
    date: 'August 18, 2022'
  },
  {
    id: '2',
    title: 'Інтернет магазин попродажу кованих виробів',
    image: 'https://images.prom.ua/3754838004_3754838004.jpg',
    href: 'https://www.deshevakovka.site/',
    date: 'August 27, 2022'
  },
  {
    id: '3',
    title: 'Інтернет магазин для продажу кондиціонерів',
    image:
      'https://ladclimatservice.com.ua/wp-content/uploads/2024/05/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4-1-2048x898-1.png',
    href: 'https://www.ladclimatservice.com.ua/',
    date: 'September 9, 2022'
  },
  {
    id: '4',
    title: 'Невеличкий лендінг магазин з продажу кофе',
    image: 'https://l-coffee-shop.netlify.app/images/home-img.jpg',
    href: 'https://l-coffee-shop.netlify.app/',
    date: 'September 12, 2022'
  },
  {
    id: '5',
    title: 'Лендінг "Будівелна компанія"',
    image:
      'https://chevalierseguin.com/wp-content/uploads/2023/03/expertise_entrepreneur_general_chevalier_seguin-300x300.png',
    href: 'https://site-wp.netlify.app/',
    date: 'September 9, 2022'
  },
  {
    id: '6',
    title: 'Просто ще один невелички лендінг на одну сторінку',
    image: 'https://stunning-strudel-576147.netlify.app/img/main/Bg.jpg',
    href: 'https://stunning-strudel-576147.netlify.app/',
    date: 'September 12, 2022'
  },
  {
    id: '7',
    title: 'Просто ще один невелички лендінг на одну сторінку',
    image: '/Screenshot_1.png',
    href: 'https://my-own-store.vercel.app/',
    date: 'September 12, 2022'
  }
];

export function ArticlesCardsGrid() {
  const cards = mockdata.map((article) => (
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
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{cards}</SimpleGrid>
    </Container>
  );
}
