import React from 'react'
import './Services.css'
import IMG1 from '../../../Assets/s1.png'
import IMG2 from '../../../Assets/s2.png'
import IMG3 from '../../../Assets/s3.png'
import IMG4 from '../../../Assets/s4.png'


function Services() {
  return (
    <div className='container-fluid bg'>
      <div className='container'>

        <div class="card border-0 text-center my-5" style={{ backgroundColor: "antiquewhite" }}>
          <div class="card-body ">
            <h1 class="card-title">Our Services</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card border-0" style={{ backgroundColor: "antiquewhite" }}>
              <img src={IMG1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-start">Massages</h5>
                <p className="card-text text-start">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ backgroundColor: "antiquewhite" }}>
              <img src={IMG2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-start">Facials</h5>
                <p className="card-text text-start">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ backgroundColor: "antiquewhite" }}>
              <img src={IMG3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-start">Nails + Waxing</h5>
                <p className="card-text text-start">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ backgroundColor: "antiquewhite" }}>
              <img src={IMG4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-start">Body Treatments</h5>
                <p className="card-text text-start">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services
