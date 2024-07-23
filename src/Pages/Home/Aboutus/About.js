import React from 'react'
import IMG from '../../../Assets/okay.png'
function About() {
  return (
    <div className='container' style={{ marginTop: "90px" }}>
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card border-0">
            <div class="card-body">
              <img
                src={IMG}
                style={{ width: "500px", height: "500px" }}
              />
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card border-0">
            <div class="card-body">
              <h3 class="card-title text-start">About Us</h3>
              <p class="card-text text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p class="card-text text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
