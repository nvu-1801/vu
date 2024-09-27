import React from 'react';
import MenuItem from './MenuItem';  // Import MenuItem from the separate file
import { menuItems } from './data'; // Assuming you have a `data.js` file with the `menuItems` array

const PizzaHouse = () => {
  return (
    <>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container px-5">
            <h2 className="navbar-brand fs-3 fw-normal mb-0">Pizza House</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center mx-4" id="navbarNav">
              <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
              <form className="d-flex ms-auto" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-danger" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      {/* Banner */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./imges/slide1.jpg" className="d-block w-100" alt="Pizza 1" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Neapolitan Pizza</h3>
              <p>If you're looking for traditional Italian pizza, the Neapolitan is the best option!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./imges/slide2.jpg" className="d-block w-100" alt="Pizza 2" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Cheese Pizza</h3>
              <p>Cheese lovers, this is for you!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./imges/slide3.jpg" className="d-block w-100" alt="Pizza 3" />
            <div className="carousel-caption text-black d-none d-md-block">
              <h3>Pepperoni Pizza</h3>
              <p>For those who love a bit of spice!</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Menu Section */}
      <div className="bg-dark text-white py-5">
        <section className="container px-5">
          <h2 className="text-left mb-4">Our Menu</h2>
          <div className="row g-4 justify-content-center">
            <MenuItem items={menuItems} />
          </div>
        </section>
      </div>

      {/* Form Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">Book Your Table</h2>
          <div className="row justify-content-center mx-4">
            <form>
              <div className="row mb-3">
                <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="Your Name *" />
                </div>
                <div className="col-md-4">
                  <input type="email" className="form-control" placeholder="Your Email *" />
                </div>
                <div className="col-md-4">
                  <select className="form-control">
                    <option>Select a Service</option>
                    <option>Dine In</option>
                    <option>Takeaway</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Please write your comment" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-warning w-20">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PizzaHouse;
