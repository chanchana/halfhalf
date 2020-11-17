import React from 'react'
import './navbar.scss'
import logo from '../../assets/logo.png'
import logoMini from '../../assets/logo-mini.png'
import filterImage from '../../assets/filter.png'

import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd'
import { AudioOutlined } from '@ant-design/icons';

import { ProvinceSelect, IScreen } from '../../components'


const { Option } = Select
const { Search } = Input

interface INavbarProp {
  provinces: string[]
  setIsFilterModalOpenCallback(state: boolean): void
  screen: IScreen
}

export const Navbar = (prop: INavbarProp) => {
  const screen = prop.screen
  
  const filterIcon = (
    <div className="filter-icon" onClick={() => {prop.setIsFilterModalOpenCallback(true)}}>
      <img src={filterImage} />
    </div>
  )

  return (
    <div className="navbar">
      <div className="container">
        <div className={`img-container ${screen.isMobile ? 'm' : ''}`}>
          <img src={screen.isMobile ? logoMini : logo} />
        </div>
        <div className={`search-container ${screen.isMobile ? 'm' : ''}`}>
          <Input.Group size="large" className="input-group" compact>
            {!screen.isMobile && <ProvinceSelect defaultValue="nearby" size="large" className="select" provinces={prop.provinces} onChangeCallback={() => {}} />}
            <AutoComplete id={screen.isMobile ? 'm' : 'td'} className="search-bar" options={[{ value: 'text 1' }, { value: 'text 2' }]}>
              <Input.Search className="input" size="large" placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป" />
            </AutoComplete>
          </Input.Group>
        </div>
        {screen.isMobile && filterIcon}
      </div>
    </div>
  )
}