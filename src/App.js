import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Course } from './components/Course';
import { Courses } from './components/Courses';
import { AddCourse } from './components/AddCourse';
import { ToastContainer } from 'react-toastify';
import { Container, Row,Col } from 'react-bootstrap';
import { Menu } from './components/Menu';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
    <ToastContainer />    
    <Container>
      <Header/>
      <Row>
        <Col md = {4}> <Menu/></Col>
        <Col md ={8}>
          {/* <Home/> */}
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addcourses" element={<AddCourse />} />
            <Route path="/allcourses" element={<Courses/>} />
          </Routes>
          
          </Col>
      </Row>
    </Container>
    </Router>
    </div>
  );
}

export default App;
