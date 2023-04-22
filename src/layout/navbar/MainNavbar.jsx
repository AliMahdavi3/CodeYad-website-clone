import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsSearch, BsPersonCircle } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <>
    <Navbar dir="rtl" expand="md" className="mb-3 navbar">
          <Container fluid>
            <Navbar.Brand className='text-light my-2 fw-bold fs-2' href="/"><img src="./assets/image/logo.png" alt="codeyad"/></Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls="offcanvasNavbar-expand-md"/>
            <Navbar.Offcanvas id="offcanvasNavbar-expand-md" aria-labelledby="offcanvasNavbarLabel-expand-md" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                  <img src="./assets/image/logo.png" alt="codeyad"/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 mx-2 my-2">
                  <NavLink className='text-light fw-bold pe-4' to="/courses">دوره ها</NavLink>
                  <NavLink className='text-light fw-bold pe-4' to="/blog">بلاگ</NavLink>
                  <NavLink className='text-light fw-bold pe-4' to="/teachers">مدرسین</NavLink>
                  <NavLink className='text-light fw-bold pe-4' to="/about">درباره ما</NavLink>
                  <NavLink className='text-light fw-bold pe-4' to="/questions">پرسش و پاسخ</NavLink>
                </Nav>
                <Form className="d-none d-lg-flex mx-2 my-2">
                  <Form.Control
                    type="search"
                    placeholder="هرچی میخوای جستجو کن"
                    className="border-0 me-2 fw-bold shadow-lg"
                    aria-label="Search"
                  />
                  <Button variant="btn btn-primary align-items-center d-flex justify-content-center"><BsSearch/></Button>
                </Form>
                <Dropdown>
                    <Dropdown.Toggle variant="warning" className='mx-2 shadow-lg rounded-5 my-2 h5' id="dropdown-basic">
                         پروفایل<BsPersonCircle className='mx-2'/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='text-center'>
                        <Dropdown.Item href="#/action-1">ورود به حساب</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">خروج</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  )
}

export default MainNavbar