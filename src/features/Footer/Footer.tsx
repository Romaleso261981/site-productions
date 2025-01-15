import { Box, Flex, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { footerLinkdata } from '@/mocData';

import MainLogo from '../MainLogo/MainLogo';
import SocialIcons from '../SocialIcons/SocialIcons';
import classes from './FooterLinks.module.css';

export function FooterLinks() {
  const groups = footerLinkdata.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}>
        {link.label}
      </Text>
    ));

    return (
      <Box className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </Box>
    );
  });

  return (
    <footer className={classes.footer}>
      <Flex className={classes.inner}>
        <Flex className={classes.logoWrapper}>
          <Flex>
            <MainLogo />
          </Flex>
          <Flex direction="column">
            <Text mt={20} mb={20} fw={900} size="sm">
              Додаткові види зв&rsquo;язку
            </Text>
            <Flex>
              <Text>ladiginscormag@gmail.com</Text>
            </Flex>
            <Box>
              <Link className={classes.phoneLink} to="/">
                +380 (68) 947 87 23
              </Link>
            </Box>
          </Flex>
          <SocialIcons />
        </Flex>
        <Box visibleFrom="sm" className={classes.groups}>
          {groups}
        </Box>
      </Flex>
      <Flex className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2019-2025 Працюємо по всій Україні
        </Text>
      </Flex>
    </footer>
  );
}
