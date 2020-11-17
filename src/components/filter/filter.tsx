import React from 'react'
import './filter.scss'
import { Menu, Dropdown, Button, message, Tooltip, Drawer } from 'antd';

import { DownOutlined, UserOutlined } from '@ant-design/icons';

import { Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd'
import { AudioOutlined } from '@ant-design/icons';
import { Radio, Input } from 'antd';

import { ProvinceSelect, IScreen } from '../../components'

const { Option } = Select
const { Search } = Input


const arrowIcon = (
  <svg viewBox="24 24 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
)

interface IFilterProp {
  isModalOpen: boolean
  setIsModalOpenCallback(state: boolean): void
  categories: {
    name: string
    subcategories: string[]
  }[]
  provinces: string[]
  priceRange: string[]
  selectedCategory: string
  screen: IScreen
}


export const Filter = (prop: IFilterProp) => {
  // onChange = e => {
  //   console.log('radio checked', e.target.value);
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };
  const screen = prop.screen

  const menu = (
    <Menu onClick={() => { }}>
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

  const filterArea = (
    <>
      <div className="text-header" style={{ marginTop: '0px' }}>ประเภทร้านค้า</div>
      <div className="option-box">
        <Radio.Group onChange={() => { }} value="ร้านอาหารและเครื่องดื่ม">
          <Radio className="radio-select" value="all">ทั้งหมด</Radio>
          {prop.categories.map(({ name }) =>
            <Radio className="radio-select" value={name}>{name}</Radio>
          )}
        </Radio.Group>
      </div>

      <div className="text-header">จังหวัด/ใกล้ฉัน</div>
      <div className="option-box-secondary">
        <ProvinceSelect className="location-select" defaultValue="nearby" provinces={prop.provinces} onChangeCallback={(e) => { }} />

      </div>


      { prop.selectedCategory === 'ร้านอาหารและเครื่องดื่ม' ?
        <>
          <div className="text-header" style={{ marginTop: '33px' }}>ราคา</div>
          <div className="option-box-secondary">
            <Select defaultValue="all" className="location-select">
              <Option value="all">ทั้งหมด</Option>
              {prop.priceRange.map((value) => (
                <Option value={value}>{value}</Option>
              ))}
            </Select>
          </div>
        </>
        :
        <>
          <div className="text-header" style={{ marginTop: '33px' }}>ช่วงราคาสินค้า (บาท)</div>
          <div className="option-box-secondary">
            <div className="price-range-select" style={{ display: 'flex' }}>
              <InputNumber style={{ flexGrow: 1 }} min={1} max={10} placeholder="ss" onChange={() => { }} />
              <div className="price-dash">-</div>
              <InputNumber style={{ flexGrow: 1 }} min={1} max={10} placeholder="ss" onChange={() => { }} />
            </div>

            <Button block type="ghost" className="button">ตกลง</Button>

          </div>
        </>
      }

      { prop.selectedCategory !== 'all' &&
        <>
          <div className="text-header">ประเภท{prop.selectedCategory}</div>
          <div className="option-box">
            <Radio.Group onChange={() => { }} value="all">
              <Radio className="radio-select" value="all">ทั้งหมด</Radio>
              {prop.categories.find(({ name }) => name === prop.selectedCategory)?.subcategories.map((value) => (
                <Radio className="radio-select" value={value}>{value}</Radio>
              ))}
            </Radio.Group>
          </div>
        </>
      }
    </>
  )

  const modal = (

    // <div className="filter-modal">
    <Drawer visible={prop.isModalOpen} className="filter-modal" width="100%" closable={false}>
      <div>
        <div className="header">
          <div className="arrow-icon" onClick={() => prop.setIsModalOpenCallback(false)}>
            {arrowIcon}
          </div>
          <div>กรอกผล</div>
        </div>
        <div className="container">
          {filterArea}
        </div>
      </div>
    </Drawer>
    // </div>
  )

  return (
    <>
      {modal}
      {(screen.isDesktop || screen.isTablet) &&
        <div className="filter">
          {filterArea}
        </div>
      }
    </>
  )
}