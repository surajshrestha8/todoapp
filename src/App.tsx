import { Suspense } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './assets/styles/app.css';
import BackdropLoader from './components/elements/loader/BackdropLoader';
import queryClient from './http/queryClient';
import Routes from './routes';

function App() {
  return (
    <Suspense fallback={<BackdropLoader open={true} />}>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
