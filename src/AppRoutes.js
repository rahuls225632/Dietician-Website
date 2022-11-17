import { BrowserRouter as Router } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import HomeRoutes from './routes/homeRoutes';
import AboutRoutes from './routes/aboutRoutes';
import Header from './screens/header'

export default function AppRouter() {
  
const a=0

  return (
    <Router>
       <>
       <Header/>
      
       <div class="container">
       <HomeRoutes/>
           <AboutRoutes/> 
</div>  
      </>
     
    </Router>
  );
}
