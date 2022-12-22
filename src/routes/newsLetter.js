import { Route, Routes } from 'react-router-dom';
import CustomForm from '../screens/NewsLetter';
import * as ROUTES from '../constants/routes';

const NewsLetterRoutes = () => (
    <Routes>
      <Route
        path={ROUTES.PROGRAMMS}
        exact
        element={ <CustomForm />}
      />
      </Routes>
      
)

export default NewsLetterRoutes



