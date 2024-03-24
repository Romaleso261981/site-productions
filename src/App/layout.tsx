import { Box, Flex } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { FooterLinks } from '@/shared/components';
import { HeaderSearch } from '@/shared/components/HeaderSearch/HeaderSearch';
import ScrollToTop from '@/shared/components/ScrollToTop/ScrollToTop';

import s from './App.module.css';

export function Layout() {
  return (
    <Flex justify="space-between" className={s.layoutWrapper} display="-ms-grid" direction="column">
      <Box>
        {/* <HeaderTabs /> */}
        <HeaderSearch />
      </Box>
      {/* <Flex mb={matches ? 40 : 10}>
        <Box ml={40}>
          <Breadcrumbs />
        </Box>
        <Flex ml={40}>
          <BreadcrumbsComponent />
        </Flex>
      </Flex> */}
      <Outlet />
      <Box>
        <FooterLinks />
      </Box>
      <ScrollToTop />
    </Flex>
  );
}
