import React from 'react'
import './Nav.css'
function Navigation() {
  return (
<nav className="navbar navbar-expand-lg p-3" style={{backgroundColor:"#F2E9D8"}}>
  <div className="container">
    <a className="navbar-brand" href="#">
      LOGO HERE
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-5">
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
          Products
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
          Gallery
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
          Testimonials
          </a>
        </li>


        <li className="nav-item">
          <a className="nav-link" href="#">
          Deals
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
          Contact Us
          </a>
        </li>
   
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link" href="#">
          <i class="bi bi-search"></i>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
          <i class="bi bi-person-circle"></i>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
          <i class="bi bi-cart4"></i>
          </a>
        </li>

        <button className='btnn'>
        Book An Appointment 
        </button>
     </ul>

    </div>
  </div>
</nav>

  )
}

export default Navigation
