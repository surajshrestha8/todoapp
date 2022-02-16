import { Suspense } from 'react';
import './assets/styles/app.css';
import BackdropLoader from './components/elements/loader/BackdropLoader';
import Header from './components/layout/Header';
import Routes from './routes';

function App() {
  return (
    <Suspense fallback={<BackdropLoader open={true} />}>
      <Header />
      <Routes />
    </Suspense>
  );
}

export default App;
