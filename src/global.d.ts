declare global {
  interface Window {
    gtag: (
      event: 'event' | 'config' | 'js' | 'set' | 'get' | 'consent',
      action: string,
      value: number,
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
