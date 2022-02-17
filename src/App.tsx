import { Suspense } from 'react';
import './assets/styles/app.css';
import BackdropLoader from './components/elements/loader/BackdropLoader';
import Routes from './routes';

function App() {
  return (
    <Suspense fallback={<BackdropLoader open={true} />}>
      <Routes />
    </Suspense>
  );
}

export default App;
