import React from 'react'
import logo from '../../assets/logo.png'
import logoMini from '../../assets/logo-mini.png'
import filterImage from '../../assets/filter.png'
import { useScreen } from '../../utils'
import './navbar.scss'

interface INavbarProp {
  showFilterButtonOnMobile?: boolean
  setIsFilterModalOpenCallback?(state: boolean): void
  children?: any
}

export const Navbar = (prop: INavbarProp) => {

  const screen = useScreen()
  
  const filterButton = (
    <div className="filter-icon" onClick={() => {prop.setIsFilterModalOpenCallback!(true)}}>
      <img src={filterImage} alt="Filter Icon" />
    </div>
  )

  return (
    <div className="navbar">
      <div className="container">
        <div className={`img-container ${screen.isMobile ? 'm' : ''}`}>
          <img src={screen.isMobile ? logoMini : logo} alt="Logo" />
        </div>
        {prop.children && prop.children }
        {prop.showFilterButtonOnMobile && screen.isMobile && filterButton}
        {!prop.showFilterButtonOnMobile && screen.isMobile && <div style={{width: '16px'}} />}
      </div>
    </div>
  )
}