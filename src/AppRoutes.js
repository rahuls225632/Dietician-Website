import { BrowserRouter as Router } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import HomeRoutes from './routes/homeRoutes';
import AboutRoutes from './routes/aboutRoutes';
import Header from './screens/header'
import NewsLetterRoutes from './routes/newsLetter';
import VideosRoutes from './routes/videosRoutes';
import Programms from './screens/Programms';
import Footer from './componenets/Home/Footer';
import ProgrammsRoutes from './routes/programms';

export default function AppRouter() {
  
const a=0

  return (
    <Router>
       <>
       <Header/>
       <div >
       <HomeRoutes/>
           <AboutRoutes/> 
           <NewsLetterRoutes />
           <VideosRoutes/>
           <ProgrammsRoutes />
           
</div> 
<Footer/> 
      </>
     
    </Router>
  );
}
