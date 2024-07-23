import React from 'react'
import IMG1 from '../../../Assets/s1.png'
import IMG2 from '../../../Assets/s2.png'
import IMG3 from '../../../Assets/s3.png'
import IMG4 from '../../../Assets/s4.png'
import './Gallery.css'
function Gallery() {
    return (
        <div className='container-fluid bgimg'>
            <div className='container'>
                <br /><br />

                <div>
                    <h1 class="card-title">Our Gallery</h1>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <br />
                <div className='container'>
                    <div className="row row-cols-1 row-cols-md-3 g-2">
                    <div className="col">
                            <div className="card bg-transparent h-100 border-0">
                                <img src={IMG1} className="card-img-top img rounded-0" alt="..." />
                                <div className="card h-100 border-0 rounded-0 my-2">
                                <img src={IMG2}  className="card-img-top img rounded-0" alt="..." />
                                
                                </div>
                            
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-transparent h-100 border-0 rounded-0">
                                <img src={IMG3}  className="card-img-top img2 rounded-0" alt="..." />
                                {/* <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..." />
                                
                                </div> */}
                            
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-transparent h-100 border-0 rounded-0">
                                <img src={IMG4}  className="card-img-top img rounded-0 "  alt="..." />
                                <div className="card h-100 border-0 rounded-0 my-2">
                                <img src={IMG1}  className="card-img-top img rounded-0" alt="..." />
                                
                                </div>
                            
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Gallery
