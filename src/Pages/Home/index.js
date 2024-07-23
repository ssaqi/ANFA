import React from 'react'
import Herosection from '../../Components/Herosection'
import Itemsections from '../../Components/Itemssections'
import About from './Aboutus/About'
import Services from './Ourservices/Services'
import Gallery from './Gallery/Gallery'

function Homepage() {
  return (
    <div>
      <Herosection/>
      <Itemsections/>
      <About/>
      <Services/>
      <Gallery/>
    </div>
  )
}

export default Homepage
