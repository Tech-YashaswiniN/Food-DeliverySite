import React from 'react'
import '../Footer/Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
                <img src={assets.logo} alt="img" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nostrum optio labore quod dolores, iure sit fugit beatae. Atque, esse!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="img" />
                    <img src={assets.twitter_icon} alt="img" />
                    <img src={assets.linkedin_icon} alt="img" />
                </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-123-1223-1234</li>
                    <li>company@tomato.com</li>
                </ul>
        </div>

      </div>
      <hr />
      <p className="footer-copy-right">Copyright 2024 &copy;Tomato.com - All Right Reserved
      </p>
    </div>
  )
}

export default Footer
