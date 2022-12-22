import { Route, Routes } from 'react-router-dom';
import Programms from '../screens/Programms';
import * as ROUTES from '../constants/routes';

const ProgrammsRoutes = () => (
    <Routes>
      <Route
        path={ROUTES.PROGRAMMS}
        exact
        element={ <Programms />}
      />
      </Routes>
      
)

export default ProgrammsRoutes



