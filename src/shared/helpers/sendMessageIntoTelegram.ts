export const sendMessage = async (message: string): Promise<void> => {
  try {
    // const URL = `${URI_API}${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text${message}`;
    const URL = `https://api.telegram.org/bot7166529046:AAFXNKOWsQYnhm3ImL9PvXjVihHjY_jNpBM/sendMessage?chat_id=-1001973163442&text=${message}`;
    const res = await fetch(URL);
    console.log('res', res);
  } catch (e) {
    console.log(e);
  }
};
