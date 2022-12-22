import { Route, Routes } from 'react-router-dom';
import VideosScreen from '../screens/Videos';
import * as ROUTES from '../constants/routes';

const VideosRoutes = () => (
    <Routes>
      <Route
        path={ROUTES.VIDEOS}
        exact
        element={ <VideosScreen />}
      />
      </Routes>
      
)

export default VideosRoutes



