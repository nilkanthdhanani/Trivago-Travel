import React from 'react'
import './home.scss';
import { about1, hero1, hero2, hero3, hero4, hero5, hero6, secret, about2, about3, unique, nature1, nature2, nature3, nature4, deals1, deals2, deals3, conProfile } from '../../assets/images/jpg';
import { secretBg } from '../../assets/images/svg';
import { quotes, uniqueBg, board, location, world, facebook2, instagram2, twitter2 } from '../../assets/images/png';

export default function Home() {
  return (
    <div>
      <section className='travel'>
        <div className="container">
          <div className="travel-head">
            <h1 data-aos="fade-up" data-aos-duration="1000">Travel With Us</h1>
            <p data-aos="fade-down" data-aos-duration="1000">Some of life’s usual rules go out of the window when you’re travelling. You don’t have to set your alarm clock and you don’t have to worry about ironing, washing the dishes or any of that other boring grown-up stuff.</p>
          </div>
          <div className="travel-grid">
            <div className="travel-grid1">
              <img data-aos="fade-up" data-aos-duration="1000" src={hero1} alt="hero1" />
            </div>
            <div className="travel-grid2">
              <img data-aos="fade-up" data-aos-duration="1000" src={hero2} alt="hero2" />
              <img data-aos="fade-up" data-aos-duration="1000" src={hero3} alt="hero3" />
            </div>
            <div className="travel-grid3">
              <img data-aos="fade-up" data-aos-duration="1000" src={hero4} alt="hero4" />
              <img data-aos="fade-up" data-aos-duration="1000" src={hero5} alt="hero5" />
            </div>
            <div className="travel-grid4">
              <ol>
                <li data-aos="fade-left" data-aos-duration="1000">Take risks</li>
                <li data-aos="fade-left" data-aos-duration="1000">Take risks</li>
                <li data-aos="fade-left" data-aos-duration="1000">Make connections</li>
                <li data-aos="fade-left" data-aos-duration="1000">Tread lightly</li>
                <li data-aos="fade-left" data-aos-duration="1000">Give something back</li>
              </ol>
              <img src={hero6} alt="hero6" />
            </div>
          </div>
        </div>
      </section>

      <section className='secrets'>
        <div className="container">
          <div className="secrets-grid">
            <div className="secrets-grid1">
              <h2>The S​ecrets of Nature</h2>
              <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
              <div className="learn-button">
                <button>LEARN MORE</button>
              </div>
            </div>
            <div className="secrets-grid2">
              <img src={secretBg} alt="secretBg" data-aos="fade-left" data-aos-duration="1000" />
              <div className="secrets-grid2-abso">
                <img src={secret} alt="secret" data-aos="fade-up" data-aos-duration="2000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about'>
        <div className="container">
          <div className="about-grid">
            <div className="about-grid1" data-aos="fade-up" data-aos-duration="1000">
              <img src={about1} alt="about1" />
              <div className="about-grid1-box">
                <img src={quotes} alt="quotes" />
                <p>Happiness is not at the top of the mountains but in how to climb it.</p>
              </div>
            </div>
            <div className="about-grid2" data-aos="fade-up" data-aos-duration="1000">
              <img src={about2} alt="about2" />
              <div className="about-grid2-box">
                <h2>About Us</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="learn-button">
                  <button>LEARN MORE</button>
                </div>
              </div>
            </div>
            <div className="about-grid3" data-aos="fade-up" data-aos-duration="1000">
              <img src={about3} alt="about3" />
            </div>
          </div>
        </div>
      </section>

      <section className='unique'>
        <div className="container">
          <div className="unique-grid">
            <div className="unique-grid1"></div>
            <div className="unique-grid2">
              <img src={uniqueBg} alt="uniqueBg" data-aos="fade-left" data-aos-duration="1000" />
              <div className="unique-grid2-abso">
                <img src={unique} alt="unique" data-aos="fade-up" data-aos-duration="2000" />
              </div>
            </div>
          </div>
          <div className="unique-grid1-head">
            <h2>Every traveler <br />is unique</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="learn-button">
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>

      <section className='nature'>
        <div className="container">
          <div className="nature-grid">
            <div className="nature-grid1" data-aos="fade-up" data-aos-duration="1000">
              <div className="nature-grid1-box">
                <h2>Nature Tours</h2>
                <p>Fringilla ut morbi tincidunt augue interdum velit euismod in. Vel pharetra vel turpis nunc eget. Vel pretium lectus quam id leo in vitae turpis massa. Nulla facilisi cras fermentum odio eu feugiat pretium.</p>
                <div className="learn-button2">
                  <button>LEARN MORE</button>
                </div>
              </div>
              <img src={nature1} alt="nature1" />
            </div>
            <div className="nature-grid2" data-aos="fade-up" data-aos-duration="1000">
              <img src={nature2} alt="nature2" />
              <img src={nature3} alt="nature3" />
            </div>
            <div className="nature-grid3" data-aos="fade-up" data-aos-duration="1000">
              <img src={nature4} alt="nature4" />
              <div className="nature-grid3-box">
                <h2>Exclusive deals</h2>
                <p>The entire crew deserves an unforgettable vacation. When searching for the perfect accommodations, use the family-friendly badge to discover hotels that provide extra amenities for kids. </p>
                <div className="learn-button">
                  <button>LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='deals'>
        <div className="container">
          <div className="deals-head">
            <h2 data-aos="fade-up" data-aos-duration="1000">Travel Deals and Promotions</h2>
            <p data-aos="fade-down" data-aos-duration="1000">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          </div>
          <div className="deals-grid">
            <div className="deals-grid1">
              <img src={deals1} alt="deals1" />
            </div>
            <div className="deals-grid2">
              <div className="deals-grid2-box">
                <img src={location} alt="location" />
                <h3>Explore The World</h3>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              </div>
            </div>
            <div className="deals-grid1">
              <img src={deals2} alt="deals2" />
            </div>
            <div className="deals-grid2">
              <div className="deals-grid2-box">
                <img src={world} alt="world" />
                <h3>Traveller Tours</h3>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              </div>
            </div>
            <div className="deals-grid1">
              <img src={deals3} alt="deals3" />
            </div>
            <div className="deals-grid2">
              <div className="deals-grid2-box">
                <img src={board} alt="board" />
                <h3>Adventure Vacations</h3>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='contact'>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-grid1" data-aos="fade-right" data-aos-duration="1000">
              <img src={conProfile} alt="conProfile" />
              <h2>Travel With Us</h2>
            </div>
            <div className="contact-grid2" data-aos="fade-left" data-aos-duration="1000">
              <h3>Pharetra magna ac placerat vestibulum lectus mauris ultrices. Ut pharetra sit amet aliquam id.</h3>
              <p>Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras sed felis eget. Amet risus nullam eget felis eget nunc. Lacus vestibulum sed arcu non odio euismod. Consectetur adipiscing elit duis tristique.Pharetra magna ac placerat vestibulum lectus mauris ultrices.</p>
              <span>Mon – Fri: 9:00 am – 8:00 pm,</span>
              <span>Sat – Sun: 9:00 am – 10 pm</span>
              <a href="email">contactus@trivago.com</a>
              <div className="contact-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebook2} alt="facebook2" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitter2} alt="twitter2" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagram2} alt="instagram2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='ncwd'></section>

    </div>
  )
}
