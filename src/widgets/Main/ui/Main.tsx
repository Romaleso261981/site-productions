import '@mantine/core/styles.css';

import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { type FC } from 'react';

import { EmailBanner } from '@/features';
import useScrollTop from '@/shared/helpers/useScrollTop';

export const Main: FC = () => {
  const matches = useMediaQuery('(min-width: 25em)');

  useScrollTop();

  return (
    <Flex direction="column" mt={matches ? 40 : 10}>
      <EmailBanner />
    </Flex>
  );
};
