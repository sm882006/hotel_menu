import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Link } from 'react-router-dom';


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
                <button type="button" onClick={()=>navigate("/menu")}>Menu</button>
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

        </div>

        <div className="history">

        </div>

        <div className="contact">

        </div>
        <p>you are in home page</p>
        <button onClick={() => navigate("/menu")}>
            Go to Menu
        </button>
    </div>
  )
}

export default Home