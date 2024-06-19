declare global {
  interface Window {
    gtag: (
      event: 'event' | 'config' | 'js' | 'set' | 'get' | 'consent',
      action: string,
      config?: {
        page_path?: string;
        send_to?: string;
        [key: string]: string | undefined;
      }
    ) => void;
    dataLayer: {
      push: (...args: { [key: string]: unknown }[]) => void;
    };
  }
}

import { Button, Center, Container, Flex, Group, Text, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';

import { sendMessage } from '@/shared/helpers/sendMessageIntoTelegram';

import classes from './Order.module.css';

export default function Order() {
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      fetch('http://remontonlineback.up.railway.app/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        referrerPolicy: 'unsafe-url'
      })
        .then((response) => response.json())
        .then((result) => {
          console.log('Success:', result);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      sendMessage('зайшли на сторінку замовлення');
      window.gtag('event', 'conversion', {
        send_to: 'AW-16595988829/XDt6CJv7_LcZEN3iyuk9',
        transaction_id: ''
      });
    }
  }, []);

  const handleSendMessage = () => {
    sendMessage(`email: ${email} phone: ${phone}`);
    window.gtag('config', 'AW-16615527475');
    window.dataLayer.push({ event: 'formSubmit' });
    setEmail('');
    setPhone('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };
  return (
    <Container>
      <Flex className={classes.sendMessageWrapper}>
        <Center pl={15} pr={15} pt={20}>
          <Text size="lg">Для замовлення напишіть свій номер мобільного</Text>
        </Center>
        <Flex className={classes.controls}>
          <TextInput
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            placeholder="Ваша пошта"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <TextInput
            value={phone}
            onChange={(event) => setPhone(event.currentTarget.value)}
            placeholder="Ваш номер телефону"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
            onKeyDown={handleKeyPress}
          />
          <Group>
            <Button onClick={handleSendMessage} ml={10} className={classes.control}>
              <a href="/">Замовити</a>
            </Button>
          </Group>
        </Flex>
      </Flex>
    </Container>
  );
}
