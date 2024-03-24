import { Flex } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { FooterLinks } from '@/shared/components';
import { HeaderSearch } from '@/shared/components/HeaderSearch/HeaderSearch';

import s from './App.module.css';

export function Layout() {
  return (
    <Flex justify="space-between" className={s.layoutWrapper} display="-ms-grid" direction="column">
      <HeaderSearch />
      <Outlet />
      <FooterLinks />
    </Flex>
  );
}
