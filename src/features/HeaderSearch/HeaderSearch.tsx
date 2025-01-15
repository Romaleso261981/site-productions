import { Flex, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { MdContactPage } from 'react-icons/md';
import { Link } from 'react-router-dom';

import MainLogo from '../MainLogo/MainLogo';
import classes from './HeaderSearch.module.css';
import { ColorSwitch, Navbar } from './UI';
import LanguagePicker from './UI/LanguagePicker/LanguagePicker';

export function HeaderSearch() {
  const { t } = useTranslation('footer');
  const mob = useMediaQuery('(max-width: 768px)');

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group ml={40}>
          <MainLogo />
        </Group>
        <Flex className={classes.list} direction={mob ? 'column' : 'row'}>
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
              {t('contacts')}
            </Link>
          </Group>
        </Flex>
        <Group display="flex" align="center" justify="center">
          <ColorSwitch />
          <LanguagePicker type="collapsed" />
          <Navbar />
        </Group>
      </div>
    </header>
  );
}
