import { Button, Center, Container, Flex, Group, Text, TextInput } from '@mantine/core';
import { useState } from 'react';

import { sendMessage } from '@/shared/helpers/sendMessageIntoTelegram';

import classes from './Order.module.css';

export default function Order() {
  const [value, setValue] = useState('');

  const handleSendMessage = () => {
    sendMessage(value);
    setValue('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };
  return (
    <Container>
      <Flex className={classes.sendMessageWrapper}>
        <Center>
          <Text size="lg">Для замовлення напишіть свій номер мобільного</Text>
        </Center>
        <Flex className={classes.controls}>
          <TextInput
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            placeholder="Ваша пошта"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <TextInput
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            placeholder="Ваш номер телефону"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
            onKeyDown={handleKeyPress}
          />
          <Group>
            <Button onClick={handleSendMessage} ml={10} className={classes.control}>
              Замовити
            </Button>
          </Group>
        </Flex>
      </Flex>
    </Container>
  );
}
