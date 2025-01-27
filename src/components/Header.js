import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import { Navbar, Nav, Container, Form, FormControl, Button, OverlayTrigger, Tooltip, Badge } from 'react-bootstrap';

function AppNavbar() {
  const [cartCount, setCartCount] = useState(0); // State for cart count

  return (
    <Navbar className="bg-dark text-light shadow-sm  sm-bg-light" expand="lg" sticky="top">
      <Container>
        {/* Brand Name with Unique Style */}
        <Navbar.Brand href="/" className="text-light fw-bold fs-3" style={{ letterSpacing: '2px' }}>
          <span style={{ color: '#f39c12' }}>Momos</span> Shop
        </Navbar.Brand>
        
        {/* Search Bar next to Brand */}
        <Form className="d-none d-lg-flex ms-3" style={{ maxWidth: '300px' }}>
          <FormControl
            id="searchbar"
            type="search"
            placeholder="Search"
            className="me-2 border-0"
            style={{ borderRadius: '20px', padding: '0.5rem 1rem' }}
            aria-label="Search"
          />
          <Button className="btn btn-warning text-dark fw-bold" style={{ borderRadius: '20px' }}>Search</Button>
        </Form>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* Home */}
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-home">Home</Tooltip>}>
              <Nav.Link href="/" className="text-light">
                <i className="bi bi-house-door-fill"></i> Home
              </Nav.Link>
            </OverlayTrigger>

            {/* Menu */}
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-menu">Menu</Tooltip>}>
              <Nav.Link href="/Menu" className="text-light">
                <i className="bi bi-list"></i> Menu
              </Nav.Link>
            </OverlayTrigger>

            {/* Cart with Badge */}
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-cart">Cart</Tooltip>}>
              <Nav.Link href="/Cart" className="text-light position-relative">
                <i className="bi bi-cart-fill"></i> Cart
                {cartCount > 0 && (
                  <Badge
                    pill
                    bg="warning"
                    text="dark"
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Nav.Link>
            </OverlayTrigger>

            {/* Account */}
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-account">Account</Tooltip>}>
              <Nav.Link href="/Account" className="text-light">
                <i className="bi bi-person-circle"></i> Account
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
