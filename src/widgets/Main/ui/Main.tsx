import '@mantine/core/styles.css';

import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { type FC } from 'react';

import { EmailBanner, Prices, Strategic, WhyUs } from '@/features';
import { ArticlesCardsGrid } from '@/features/ArticlesCardsGrid/ArticlesCardsGrid';
import { FeaturesCards } from '@/features/FeaturesCards/FeaturesCards';
import useScrollTop from '@/shared/helpers/useScrollTop';

export const Main: FC = () => {
  const matches = useMediaQuery('(min-width: 25em)');

  useScrollTop();

  return (
    <Flex direction="column" mt={matches ? 40 : 10}>
      <EmailBanner />
      <FeaturesCards />
      <Prices />
      <ArticlesCardsGrid />
      <Strategic />
      <WhyUs />
    </Flex>
  );
};
