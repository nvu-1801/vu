import React from "react";
import MenuItem from "./MenuItem"; // Import MenuItem from the separate file
import { data } from "./data"; // Assuming you have a `data.js` file with the `menuItems` array
import { Carousel, Image, Container, Row, Form, Col, Button } from "react-bootstrap"; 
import useMyHook from '../hooks/hooks'; // Import the custom hook

const PizzaHouse = () => {
  const menuItems = useMyHook(); // Use custom hook to get menu items

  return (
    <>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container px-5">
            <h2 className="navbar-brand fs-3 fw-normal mb-0">Pizza House</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center mx-4"
              id="navbarNav"
            >
              <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="d-flex ms-auto" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-danger" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      {/* Banner */}
      <Carousel>
        <Carousel.Item>
          <Image src="./images/pizza5.jpg" text="First slide" />
          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>
              If you're looking for traditional Italian pizza, the Neapolitan is the best option!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="./images/pizza4.jpg" text="Second slide" />
          <Carousel.Caption>
            <h3>Cheese Pizza</h3>
            <p>Cheese lovers, this is for you!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="./images/pizza3.jpg" text="Third slide" />
          <Carousel.Caption>
            <h3>Pepperoni Pizza</h3>
            <p>For those who love a bit of spice!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Menu Section */}
      <div className="bg-dark text-white py-5">
        <section className="container px-5">
          <h2 className="text-left mb-4">Our Menu</h2>
          <div className="row g-4 justify-content-center">
            {menuItems.length > 0 ? (
              <MenuItem items={menuItems} />
            ) : (
              <p>Loading menu...</p>
            )}
          </div>
        </section>
      </div>

      {/* Form Section */}
      <section className="bg-dark text-white py-5">
        <Container>
          <h2 className="text-center mb-4">Book Your Table</h2>
          <Row className="justify-content-center mx-4">
            <Form>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Your Name *" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="Your Email *" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formService">
                    <Form.Select>
                      <option>Select a Service</option>
                      <option>Dine In</option>
                      <option>Takeaway</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formComment">
                <Form.Control as="textarea" rows={4} placeholder="Please write your comment" />
              </Form.Group>
              <Button variant="warning" type="submit">
                Send Message
              </Button>
            </Form>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PizzaHouse;
