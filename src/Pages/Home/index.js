import React from 'react'
import Herosection from '../../Components/Herosection'
import Itemsections from '../../Components/Itemssections'
import About from './Aboutus/About'
import Services from './Ourservices/Services'

function Homepage() {
  return (
    <div>
      <Herosection/>
      <Itemsections/>
      <About/>
      <Services/>
    </div>
  )
}

export default Homepage
