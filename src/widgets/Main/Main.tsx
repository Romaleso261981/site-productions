import '@mantine/core/styles.css';

import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { type FC, useEffect, useState } from 'react';

import { EmailBanner, IWantSite, Prices, Strategic, WeWillCallYou, WhyUs } from '@/features';
import { ArticlesCardsGrid } from '@/features/ArticlesCardsGrid/ArticlesCardsGrid';
import { BannerSale } from '@/features/EmailBanner/EmailBanner';
import { FeaturesCards } from '@/features/FeaturesCards/FeaturesCards';
import { OrderModal } from '@/features/OrderModal/OrderModal';
import { sendMessage } from '@/shared/helpers/sendMessageIntoTelegram';
import useScrollTop from '@/shared/helpers/useScrollTop';

export const Main: FC = () => {
  const [isHiden, setIsHiden] = useState<boolean>(false);
  const [isShowCallBaner, setIsShowCallBaner] = useState<boolean>(false);
  const matches = useMediaQuery('(min-width: 25em)');

  const toggleIsHiden = () => {
    setIsHiden(!isHiden);
  };
  const toggleBaner = () => {
    setIsShowCallBaner(!isShowCallBaner);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      toggleBaner();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      toggleBaner();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    sendMessage('зайшли на головну сторінку');
  }, []);

  useScrollTop();

  return (
    <Flex direction="column" pos="relative" mt={matches ? 40 : 10}>
      {isHiden && <BannerSale toggleIsHiden={toggleIsHiden} />}
      <EmailBanner />
      <FeaturesCards />
      <Prices />
      <ArticlesCardsGrid />
      <Strategic />
      <WhyUs />
      <IWantSite />
      <OrderModal />
      {isShowCallBaner && <WeWillCallYou toggleBaner={toggleBaner} />}
    </Flex>
  );
};
