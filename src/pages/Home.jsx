import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Link } from 'react-router-dom';

const popularitem = [
  {
    id: 1,
    name: "Beef wellington",
    info: "A tender beef fillet coated in rich mushroom duxelles, wrapped beautifully in golden puff pastry.",
    image: "https://res.cloudinary.com/om6rcdxl/image/upload/v1789483152/Beef_wellington.jpg"
  },
  {
    id: 2,
    name: "Oysters and Pearls",
    info: "An exquisite, luxury starter pairing a velvety pearl tapioca sabayon with poached oysters and a mound of premium sturgeon caviar.",
    image: "https://res.cloudinary.com/om6rcdxl/image/upload/v1789483152/oysters.jpg"
  },
  {
    id: 3,
    name: "Oops! I Dropped the Lemon Tart",
    info: "A dynamic modern Italian dessert celebrating absolute imperfection, served deliberately smashed across the plate.",
    image: "https://res.cloudinary.com/om6rcdxl/image/upload/v1789483152/oops_lemon.jpg"
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbaroutside">
        <div className="navoutside_left">
          <div className="restoname">
            <Link to="/" className='homeoutside'>
              GRAND SPICE
            </Link>
          </div>
        </div>

        <div className="navoutside_right">

          <div className="homeoutside">
            <a href="/#home_section">Home</a>
          </div>

          <div className="popular_item">
            <a href="/#popular_item_section">Popular Items</a>
          </div>

          <div className="history">
            <a href="/#history_section">History</a>
          </div>

          <div className="contact">
            <a href="/#contact_section">Contact</a>
          </div>

          <div className="menu">
            <button type="button" onClick={() => navigate("/menu")}>Menu</button>
          </div>

        </div>
      </div>

      <div className="home_section">

        <section className="hero">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://res.cloudinary.com/om6rcdxl/video/upload/v1789476647/resto_overview.mp4" />

          </video>

          <div className="hero-content">
            <h1>Welcome to Our Restaurant</h1>
            <p>Experience the taste you will remember.</p>
          </div>

        </section>

      </div>

      <div className="popular_item_section">
        <p className="heading1">OUR SPECIALS</p>
        <p className="heading2">Popular at our restorent.</p>
        <div className="popular-cards">
          {popularitem.map((item) => (
            <div className="popular-card" key={item.id}>
              <div className="popular-image">
                <img src={item.image} alt={item.name} srcset="" />
              </div>

              <div className="popular-content">
                <h2>{item.name}</h2>
                <p>{item.info}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="history">
        <div className="history-container">
          {/* Left Side - Image */}
          <div className="history-image">
            <img
              src="https://res.cloudinary.com/om6rcdxl/image/upload/v1789498777/historical_image.jpg"
              alt="Restaurant interior"
            />

            <div className="history-year">
              <span>Since</span>
              <strong>1998</strong>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="history-content">

            <p className="history-small-title">
              OUR STORY
            </p>

            <h2>
              A Tradition of Taste,
              <span> Served With Love</span>
            </h2>

            <p className="history-intro">
              What started as a small family restaurant has grown into
              a place where generations come together to enjoy good food,
              warm hospitality, and unforgettable moments.
            </p>

            <div className="history-timeline">

              <div className="history-item">
                <div className="history-dot"></div>

                <div>
                  <h3>1998 — Where It All Began</h3>
                  <p>
                    Our journey began in 1998 with a simple dream —
                    to serve delicious food made with fresh ingredients
                    and the warmth of home.
                  </p>
                </div>
              </div>

              <div className="history-item">
                <div className="history-dot"></div>

                <div>
                  <h3>2008 — Growing With Our Guests</h3>
                  <p>
                    With the love and support of our guests, we expanded
                    our menu and introduced new dishes while keeping our
                    traditional recipes at the heart of our kitchen.
                  </p>
                </div>
              </div>

              <div className="history-item">
                <div className="history-dot"></div>

                <div>
                  <h3>Today — Tradition Meets Modern Taste</h3>
                  <p>
                    Today, we continue the same tradition while bringing
                    modern dining experiences to our guests. Every dish
                    is prepared with care, quality, and passion.
                  </p>
                </div>
              </div>

            </div>

            <div className="history-quote">
              <p>
                "Good food brings people together,
                but great memories bring them back."
              </p>
            </div>

          </div>

        </div>
      </div>

      <div className="contact">
        {/* Section Heading */}
        <div className="contact-heading">
          <p className="contact-subtitle">GET IN TOUCH</p>

          <h2>
            We'd Love to <span>Hear From You</span>
          </h2>

          <p className="contact-description">
            Whether you have a question, want to make a reservation,
            or simply want to say hello, we're always happy to hear from you.
          </p>
        </div>

        <div className="contact-container">

          {/* Left Side */}
          <div className="contact-info">

            <div className="contact-card">
              <div className="contact-icon">📍</div>

              <div>
                <h3>Visit Us</h3>
                <p>
                  Main Road, Near City Center,
                  <br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>

              <div>
                <h3>Call Us</h3>
                <p>
                  +91 98765 43210
                  <br />
                  +91 91234 56789
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">✉️</div>

              <div>
                <h3>Email Us</h3>
                <p>
                  info@yourrestaurant.com
                  <br />
                  support@yourrestaurant.com
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="opening-hours">
              <h3>Opening Hours</h3>

              <div className="hours-row">
                <span>Monday - Friday</span>
                <span>10:00 AM - 11:00 PM</span>
              </div>

              <div className="hours-row">
                <span>Saturday</span>
                <span>10:00 AM - 12:00 AM</span>
              </div>

              <div className="hours-row">
                <span>Sunday</span>
                <span>9:00 AM - 11:00 PM</span>
              </div>
            </div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-box">

            <h3>Send Us a Message</h3>

            <p>
              Have something to ask? Fill out the form and
              we'll get back to you.
            </p>

            <form>

              <div className="form-row">

                <div className="form-group">
                  <label>Your Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    placeholder="Enter your phone"
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="contact-btn">
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Map */}
        <div className="contact-map">

          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps?q=Mumbai,Maharashtra,India&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>
      </div>
      <p>you are in home page</p>
      <button onClick={() => navigate("/menu")}>
        Go to Menu
      </button>
    </div>
  )
}

export default Home