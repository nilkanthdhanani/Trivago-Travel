import React from 'react';
import './footer.scss';
import { facebook, instagram, message, twitter } from '../../assets/images/png.js';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="container-hf">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>With years of industry experience, a network of trusted partners, and a keen eye for detail, we ensure that every aspect of your journey is seamless and enriching. At Wanderlust Journeys, we believe that travel is not just about the destinations, but the stories you create along the way.</p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li>23 Shivanjali Street, Surat, Gujarat</li>
              <li>Phone: +91 9876 543 210</li>
              <li>Email: contact@trivagotravel.com</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About Us</Link></li>
              <li><Link to={"/tours"}>Tours</Link></li>
              <li><Link to={"/contactus"}>Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us:</h4>
            <div className="social-media">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={message} alt="message" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Barber Shop. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
