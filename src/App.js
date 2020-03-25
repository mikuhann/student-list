import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CreateStudentForm from './components/create-student-form';
import StudentList from './components/student-list';
import EditStudent from './components/edit-student';


import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand>
                <Link to='/create-student' className='nav-link'>
                  Student list
                </Link>
              </Navbar.Brand>
              <Nav className='justify-content-end'>
                <Nav>
                  <Link to='/create-student' className='nav-link'>
                    Create Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to='/edit-student/:id' className='nav-link'>
                    Edit Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to='/student-list' className='nav-link'>
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container className='mt-3'>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Switch>
                  <Route exact path='/' component={CreateStudentForm} />
                  <Route path='/create-student' component={CreateStudentForm} />
                  <Route path='/edit-student/:id' component={EditStudent} />
                  <Route path='/student-list' component={StudentList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
