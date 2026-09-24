import React, { useState } from 'react'
import "./Menu.css";



const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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
                className={`menu_category ${category === activeCategory ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
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