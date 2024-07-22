import React from 'react'
import './Item.css'
import IMG from '../../Assets/f1.png'
import IMG2 from '../../Assets/f2.png'
import IMG3 from '../../Assets/f3.png'


function Itemsections() {
  return (
    <div className='container bg-clr' style={{width:"2500px"}}>
       <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
  <div className="card mb-3 border-0" style={{ maxWidth: 540,backgroundColor:"antiquewhite" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={IMG} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-start">Daily moisturizer</h5>
        <p className="card-text text-start">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
       
      </div>
    </div>
  </div>
</div>

  </div>
  <div className="col">
  <div className="card mb-3 border-0" style={{ maxWidth: 540,backgroundColor:"antiquewhite"  }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={IMG2} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-start">Cavira Collagen</h5>
        <p className="card-text text-start">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
       
      </div>
    </div>
  </div>
</div>
  </div>
  <div className="col">
  <div className="card mb-3 border-0" style={{ maxWidth: 540 ,backgroundColor:"antiquewhite" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={IMG3} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-start">Extra firming mask</h5>
        <p className="card-text text-start">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
       
      </div>
    </div>
  </div>
</div>
  </div>
</div>

    </div>
  )
}

export default Itemsections
