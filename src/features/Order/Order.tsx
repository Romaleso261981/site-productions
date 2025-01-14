import {
  Button,
  Center,
  Container,
  Flex,
  Group,
  Select,
  Text,
  Textarea,
  TextInput
} from '@mantine/core';
import { useEffect, useState } from 'react';

import { sendMessage } from '@/shared/helpers/sendMessageIntoTelegram';

import classes from './Order.module.css';

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

const countryCodes = [
  { value: '+1', label: 'USA (+1)' },
  { value: '+380', label: 'Ukraine (+380)' },
  { value: '+44', label: 'UK (+44)' }
  // Додайте інші країни за потреби
];

const saveToLocalStorage = (key: string, value: string) => {
  const existingValues = JSON.parse(localStorage.getItem(key) || '[]');
  if (!existingValues.includes(value)) {
    existingValues.push(value);
    localStorage.setItem(key, JSON.stringify(existingValues));
  }
};

const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '[]');
};

export default function Order() {
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<string>(countryCodes[0].value);
  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([]);
  const [phoneSuggestions, setPhoneSuggestions] = useState<string[]>([]);

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
        send_to: 'AW-16615527475/7wEbCNWWwbsZELOo8_I9',
        value: '50.0',
        currency: 'UAH'
      });
    }
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+?[0-9]{12}$/;
    return phoneRegex.test(phone);
  };

  const handleSendMessage = () => {
    const fullPhoneNumber = countryCode + phone;
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(fullPhoneNumber);

    if (!isEmailValid) {
      setEmailError('Невірний формат пошти');
      return;
    } else {
      setEmailError(null);
    }

    if (!isPhoneValid) {
      setPhoneError('Невірний формат номера телефону');
      return;
    } else {
      setPhoneError(null);
    }

    sendMessage(`email: ${email} phone: ${fullPhoneNumber} message: ${message}`);
    window.gtag('config', 'AW-16615527475');
    window.dataLayer.push({ event: 'formSubmit' });

    saveToLocalStorage('emails', email);
    saveToLocalStorage('phones', fullPhoneNumber);

    setEmail('');
    setPhone('');
    setMessage('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleEmailFocus = () => {
    setEmailSuggestions(getFromLocalStorage('emails'));
  };

  const handlePhoneFocus = () => {
    setPhoneSuggestions(getFromLocalStorage('phones'));
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
            error={emailError}
            onFocus={handleEmailFocus}
            data-autocomplete={emailSuggestions}
          />
          <Select
            value={countryCode}
            onChange={(value) => setCountryCode(value!)}
            data={countryCodes}
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <TextInput
            value={phone}
            onChange={(event) => setPhone(event.currentTarget.value)}
            placeholder="Ваш номер телефону"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
            onKeyDown={handleKeyPress}
            error={phoneError}
            onFocus={handlePhoneFocus}
            data-autocomplete={phoneSuggestions}
          />
          <Textarea
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
            placeholder="Ваше повідомлення"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
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
