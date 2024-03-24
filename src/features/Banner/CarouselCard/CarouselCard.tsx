import { Carousel } from '@mantine/carousel';
import { Card, Image } from '@mantine/core';

import classes from './CarouselCard.module.css';

const images = [
  'https://marketer.ua/wp-content/uploads/2020/12/create-online-store-1024x532.jpg',
  'https://websait.uz.ua/wp-content/uploads/2012/01/websaits-frames.jpg',
  'https://wezom.com.ua/storage/services/medium/hfJv0RlpqMLoexPRhFQwm6wTRuSJQyyu81dkXfbO.png?v=1687365037',
  'https://internera.com/StyleSheets/Images/layout/main-slider-images/extreme.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGwX6KvseMmaiHjiX4LcXFng3AmAwblKHMtWKJqwucg&s'
];

export function CarouselCard() {
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} className={classes.images} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder>
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator
          }}>
          {slides}
        </Carousel>
      </Card.Section>
    </Card>
  );
}
