import React from 'react'
import logo from '../../assets/logo.png'
import logoMini from '../../assets/logo-mini.png'
import filterImage from '../../assets/filter.png'
import { Input, AutoComplete } from 'antd'
import { ProvinceSelect } from '../../components'
import { useScreen , icons} from '../../utils'
import './navbar.scss'

interface INavbarProp {
  provinces: string[]
  location: string
  search: string
  categories: {
    name: string
    subcategories: string[]
  }[]
  setLocationCallback(value: any): void 
  setIsFilterModalOpenCallback(state: boolean): void
  setSearchCallback(value: any): void
  setCategoryCallback(value: any): void
}

export const Navbar = (prop: INavbarProp) => {

  const screen = useScreen()
  
  const filterButton = (
    <div className="filter-icon" onClick={() => {prop.setIsFilterModalOpenCallback(true)}}>
      <img src={filterImage} alt="Filter Icon" />
    </div>
  )

  const options = prop.categories.map(({ name }) => ({ value: name, label: (
    <div key={name} onClick={() => {prop.setCategoryCallback(name)}}>
      <span style={{width: '1rem', marginRight: '0.5rem'}}>{name === 'ร้านธงฟ้า' ? icons.shop : icons.food}</span> 
      <span>{name}</span>
    </div>)}
  ))

  return (
    <div className="navbar">
      <div className="container">
        <div className={`img-container ${screen.isMobile ? 'm' : ''}`}>
          <img src={screen.isMobile ? logoMini : logo} alt="Logo" />
        </div>
        <div className={`search-container ${screen.isMobile ? 'm' : ''}`}>
          <Input.Group size="large" className="input-group" compact>
            {!screen.isMobile && <ProvinceSelect value={prop.location} size="large" className="select" provinces={prop.provinces} onChangeCallback={prop.setLocationCallback} />}
            <AutoComplete id={screen.isMobile ? 'm' : 'td'} value={prop.search} className="search-bar" options={options}>
              <Input.Search className="input" size="large" onChange={(e) => {prop.setSearchCallback(e.target.value)}} placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป" />
            </AutoComplete>
          </Input.Group>
        </div>
        {screen.isMobile && filterButton}
      </div>
    </div>
  )
}