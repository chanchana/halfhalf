import React from 'react'
import './filter.scss'
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';

import { DownOutlined, UserOutlined } from '@ant-design/icons';

import { Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd'
import { AudioOutlined } from '@ant-design/icons';
import { Radio, Input } from 'antd';


const { Option } = Select
const { Search } = Input

const PinIcon = (props: any) => (
  <svg style={props.style} width="16" height="20" viewBox="0 0 14 20" fill="none" ><path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="#000"></path></svg>
)



export const Filter = () => {
  // onChange = e => {
  //   console.log('radio checked', e.target.value);
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };
  const menu = (
    <Menu onClick={() => {}}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="filter">
      <div className="text-header" style={{marginTop: '0px'}}>ประเภทร้านค้า</div>
      <div className="option-box">
        <Radio.Group onChange={() => {}} value={1}>
          <Radio className="radio-select" value={1}>ทั้งหมด</Radio>
          <Radio className="radio-select" value={2}>ร้านอาหารและเครื่องดื่ม</Radio>
          <Radio className="radio-select" value={3}>ร้านค้า OTOP</Radio>
          <Radio className="radio-select" value={4}>ร้านธงฟ้า</Radio>
          <Radio className="radio-select" value={5}>สินค้าทั่วไป</Radio>
        </Radio.Group>
      </div>

      <div className="text-header">จังหวัด/ใกล้ฉัน</div>
      <div className="option-box-secondary">
        <Select defaultValue="nearby" className="location-select">
          <Option value="nearby"><PinIcon style={{ marginRight: '8px', marginBottom: '-6px' }} />พื้นที่ใกล้ฉัน</Option>
          <Option value="Sign In">Sign In</Option>
        </Select>
      </div>

      <div className="text-header" style={{marginTop: '33px'}}>ราคา</div>
      <div className="option-box-secondary">
        <Select defaultValue="nearby" className="location-select">
          <Option value="nearby">a</Option>
          <Option value="Sign In">Sign In</Option>
        </Select>
      </div>

      <div className="text-header">ประเภทร้านอาหารและเครื่องดื่ม</div>
      <div className="option-box">
        <Radio.Group onChange={() => {}} value={1}>
          <Radio className="radio-select" value={1}>ทั้งหมด</Radio>
          <Radio className="radio-select" value={2}>ร้านอาหารและเครื่องดื่ม</Radio>
          <Radio className="radio-select" value={3}>ร้านค้า OTOP</Radio>
          <Radio className="radio-select" value={4}>ร้านธงฟ้า</Radio>
          <Radio className="radio-select" value={5}>สินค้าทั่วไป</Radio>
        </Radio.Group>
      </div>

      {/* <div className="text-header" style={{marginTop: '33px'}}>ช่วงราคาสินค้า (บาท)</div>
      <div className="option-box-secondary">
        <div className="price-range-select" style={{display: 'flex'}}>
          <InputNumber style={{flexGrow: 1}} min={1} max={10} placeholder="ss" onChange={() => {}} />
          <div className="price-dash">-</div>
          <InputNumber style={{flexGrow: 1}} min={1} max={10} placeholder="ss"  onChange={() => {}} />
        </div>

        <Button block type="ghost" className="button">ตกลง</Button>

      </div> */}
    </div>
  )
}