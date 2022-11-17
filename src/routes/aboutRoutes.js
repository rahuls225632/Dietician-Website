import { Route, Routes } from 'react-router-dom';
import { ABOUT } from '../constants/routes';
import About from '../screens/About';
import * as ROUTES from '../constants/routes';

const AboutRoutes = () => (
    <Routes>
      <Route
        path={ROUTES.ABOUT}
        exact
        element={ <About/>}
      />
      </Routes>
      
)

export default AboutRoutes
