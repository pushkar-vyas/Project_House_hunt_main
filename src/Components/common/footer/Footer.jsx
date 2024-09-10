import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='foot'>
            <div className='text'>
              <h1>Do You Have <span>Questions</span> <span>?</span></h1>
              <p>We'll help you to grow your <span>career and growth.</span></p>
            </div>
            <Link to='/contact'><button className='btn5'>Contact Us Today</button></Link>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input '>
                <input type='text' placeholder='Email Address' />
                <button className="bg-green-800 p-[15px] ml-[3px] ">Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val ,index) => (
            <div className='tag' key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 HOUSE HUNT. Designd By Pushkar Vyas.</span>
      </div>
    </>
  )
}

export default Footer
