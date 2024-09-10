import React from "react"
import Heading from "../../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

          <form className='flexx'>
            <div className='box boxj1'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box boxj2'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box boxj3'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box boxj4'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btnj'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
