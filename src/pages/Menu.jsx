import React from 'react'
import "./Menu.css";



const Menu = () => {
  const categories=[
    "All",
    "Starter",
    "Chinese",
    "Indian",
    "Italian",
    "Thai",
    "Japanese",
    "Mexican",
    "Main Courses",
    "Biryani/Rice",
    "Dessert",

  ];

  return (
    <div>
      <div className="menu_page">
        
        <div className="search_bar">
          <input type="text" placeholder='Search Items ....' />
        </div>

        <div className="menunavbar">
          <div className="menu_categories"> 
            {categories.map((category) => ( 
              <button 
                key={category} 
                className={`menu_category ${ 
                  category === "All" ? "active" : "" 
                }`} 
              > 
                {category} 
              </button> 
            ))} 
          </div>
        </div>


      </div>
      
    </div>
  )
}

export default Menu;