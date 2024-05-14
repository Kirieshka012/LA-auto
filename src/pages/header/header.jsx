import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
  setIsMenuOpen(!isMenuOpen)
  }



  return (
    <div className="headerHeader">
      <div className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
        <div>
          <Link to="/" onClick={handleMenuToggle}>Главная</Link>
        </div>
        <div>
          <Link to="/novosti" onClick={handleMenuToggle}>Новости</Link>
        </div>
        <div>
          <Link to="/kontakty" onClick={handleMenuToggle}>Контакты</Link>
        </div>
        <div>
          <Link to="/oNas" onClick={handleMenuToggle}>О компании</Link>
        </div>
      </div>
      <div className="header__icons">
        <div className={`header__burger-menu ${isMenuOpen ? 'visible' : ''}`}
          onClick={handleMenuToggle}>
          <div> 
            <img src="images/icons/box.png" alt="burger" className='burger'/>
          </div>
        </div>
      </div>
      <div class = "networks">
          <a href="https://telegram.org/"><img src="images/icons/тг.png" alt="" class="img_nav" /></a>
          <a href="https://vk.com/"><img src="images/icons/вк.png" alt="" class="img_nav" /></a>
          <a href="https://instagram.com/"><img src="images/icons/инстаграм.png" alt="" class="img_nav" /></a>
      </div>

    </div>
)
}
export default PageHeader