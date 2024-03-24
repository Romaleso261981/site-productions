import '@mantine/core/styles.css';

import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { type FC } from 'react';

import { EmailBanner } from '@/features/Banner/EmailBanner';
import useScrollTop from '@/shared/helpers/useScrollTop';

const MainPage: FC = () => {
  const matches = useMediaQuery('(min-width: 25em)');

  useScrollTop();

  return (
    <Flex direction="column" mt={matches ? 40 : 10}>
      <EmailBanner />
      {/* <CardsCarousel /> */}
      {/* <Container size="lg">
        <ImageGroupBanner />
      </Container> */}
      {/* <StatsGrid /> */}
      {/* <FaqWithHeader /> */}
      {/* <Asymmetrical /> */}
      {/* <CommentHtml /> */}
      {/* <Container size="lg">
        <ContactUs />
      </Container> */}
    </Flex>
  );
};

export default MainPage;
