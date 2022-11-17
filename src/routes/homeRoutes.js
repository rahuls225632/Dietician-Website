import { Route, Routes } from 'react-router-dom';
import Home from '../screens/home';
import * as ROUTES from '../constants/routes';

const HomeRoutes = () => (
    <Routes>
      <Route
        path={ROUTES.HOME}
        exact
        element={ <Home />}
      />
      </Routes>
      
)

export default HomeRoutes



