import { config } from '../config/config';

export const sendMessage = async (message: string): Promise<void> => {
  try {
    console.log(message);
    // const URL = `${URI_API}${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text${message}`;
    const URL = `${config.URI_API}/sendMessage?chat_id=${config.chatID}&text=site production ${message}`;
    await fetch(URL);
  } catch (e) {
    console.log(e);
  }
};
