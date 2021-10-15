import { GlobalStyle } from './globalStyles';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./Pages/Home'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const ScroollToTop = lazy(() => import('./components/ScrollToTop'));



function App() {
  return <>
    <Suspense fallback={null}>
      <GlobalStyle />
      <Header />

      <Home />

      <Footer />

      <ScroollToTop />
    </Suspense>
  </>
}

export default App;
