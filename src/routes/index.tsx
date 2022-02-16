import { lazy } from 'react';
import { Route, Routes as Wrapper } from 'react-router-dom';
const HomePage = lazy(() => import('../pages/home'));

const Routes = () => {
  return (
    <Wrapper>
      <Route path="/" element={<HomePage />} />
    </Wrapper>
  );
};

export default Routes;
