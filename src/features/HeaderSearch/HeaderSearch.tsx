import { Button, Flex, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { MdContactPage } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { ADMIN } from '@/constans/constans';

import MainLogo from '../MainLogo/MainLogo';
import classes from './HeaderSearch.module.css';

const links = [
  { link: '/about', label: 'Про нас' },
  { link: '/adress', label: 'Адресса' }
];

export function HeaderSearch() {
  const { t } = useTranslation();

  const items = links.map((link) => (
    <Flex key={link.label}>
      <Link className={classes.link} to={link.link}>
        {link.label}
      </Link>
    </Flex>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group ml={40}>
          <MainLogo />
        </Group>
        <Flex className={classes.list} direction="column">
          <Flex gap={20}>
            <IoMdMail />
            <Link className={classes.link} to="/">
              ladclimatservice@gmail.com
            </Link>
          </Flex>
          <Group>
            <FaPhoneVolume />
            <Link className={classes.link} to="/">
              +380 (68) 947 87 23
            </Link>
          </Group>
          <Group>
            <MdContactPage />
            <Link className={classes.link} to="/contacts">
              Контакти
            </Link>
          </Group>
        </Flex>
        <Flex
          gap={15}
          display="flex"
          justify="flex-end"
          p={5}
          direction={useMediaQuery('(min-width: 55.625rem)') ? 'row' : 'column'}
          visibleFrom="sm">
          {items}
          {ADMIN === 'admin' && (
            <Button>
              <a href="/community">{t('header.kolyaRobota')}</a>
            </Button>
          )}
        </Flex>
      </div>
    </header>
  );
}
