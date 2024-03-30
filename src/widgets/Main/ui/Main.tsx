import '@mantine/core/styles.css';

import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { type FC, useEffect } from 'react';

import { EmailBanner } from '@/features';
import { ArticlesCardsGrid } from '@/features/ArticlesCardsGrid/ArticlesCardsGrid';
import { FeaturesCards } from '@/features/FeaturesCards/FeaturesCards';
import useScrollTop from '@/shared/helpers/useScrollTop';

export const Main: FC = () => {
  const matches = useMediaQuery('(min-width: 25em)');

  useEffect(() => {
    console.log('render');
  }, []);

  useScrollTop();

  return (
    <Flex direction="column" mt={matches ? 40 : 10}>
      <EmailBanner />
      <FeaturesCards />
      <ArticlesCardsGrid />
    </Flex>
  );
};
