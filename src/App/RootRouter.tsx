import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Spiner } from '@/features/Loader/Loader';
import AboutPage from '@/pages/About/AboutPage';
import { RoutersPaths } from '@/shared/types/enums';

import { Layout } from './layout';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const NotFound = lazy(() => import('../widgets/Error-404/Error-404'));
const Order = lazy(() => import('../pages/OrderPage/OrderPage'));
const Contacts = lazy(() => import('../pages/Contacts/ContactsPage'));
const PrivacyPolicyMessage = lazy(() => import('../pages/PrivacyPolicy/PrivacyPolicy'));

export default function RootRouter() {
  return (
    <Suspense fallback={<Spiner />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={RoutersPaths.MAIN} element={<MainPage />} />
          <Route path={RoutersPaths.ORDER} element={<Order />} />
          <Route path={RoutersPaths.PRIVACY} element={<PrivacyPolicyMessage />} />
          <Route path={RoutersPaths.ABOUT} element={<AboutPage />} />
          <Route path={RoutersPaths.ADRESS} element={<AboutPage />} />
          <Route path={RoutersPaths.CONTACTS} element={<Contacts />} />
          <Route path={RoutersPaths.NOFOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
