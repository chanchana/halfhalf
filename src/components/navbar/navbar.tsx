import React from 'react'
import './navbar.scss'
import logo from '../../assets/logo.png'

import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd'
import { AudioOutlined } from '@ant-design/icons';


const { Option } = Select
const { Search } = Input

const PinIcon = (props: any) => (
  <svg style={props.style} width="16" height="20" viewBox="0 0 14 20" fill="none" ><path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="#000"></path></svg>
)


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="img-container">
          <img src={logo} />
        </div>
        <div className="search-container">
          <Input.Group size="large" className="input-group" compact>
            <Select size="large" defaultValue="nearby" className="select">
              <Option value="nearby"><PinIcon style={{ marginRight: '8px', marginBottom: '-6px' }} />พื้นที่ใกล้ฉัน</Option>
              <Option value="Sign In">Sign In</Option>
            </Select>
            <AutoComplete className="search-bar" options={[{ value: 'text 1' }, { value: 'text 2' }]}>
              <Input.Search className="input" size="large" placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป" />
            </AutoComplete>
            {/* <Search placeholder="input search text" onSearch={() => {}} style={{ width: '70%' }} options={[{ value: 'text 1' }, { value: 'text 2' }]} /> */}
          </Input.Group>
        </div>
      </div>
    </div>
  )
}