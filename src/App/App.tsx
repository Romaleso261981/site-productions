import { MantineProvider } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import type { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@/redux/store';

import RootRouter from './RootRouter';
import { myTheme } from './theme';

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider theme={myTheme} defaultColorScheme="light">
          <RootRouter />
          <Analytics />
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
