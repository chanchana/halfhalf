import React from 'react'

import { Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd'
import { AudioOutlined } from '@ant-design/icons';
import { Radio, Input } from 'antd';


const { Option } = Select

const PinIcon = () => (
  <svg width="16" height="20" viewBox="0 0 14 20" fill="none" style={{ marginRight: '8px', marginBottom: '-6px' }}><path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="#000"></path></svg>
)

const DoublePinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 25 30" fill="none" style={{ marginRight: '8px', marginBottom: '-6px' }} ><path d="M9 22l-.371.335.371.411.371-.41L9 22zm0 0l.371.335h0l.002-.002.004-.005.016-.017a4.45 4.45 0 00.02-.023l.04-.045c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297C16.032 11.957 16.5 10.413 16.5 9c0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 001.5 9c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.449 4.298a46.985 46.985 0 003.521 4.563l.016.017.004.005.001.002h0L9 22zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path><path d="M16 28l-.371.335.371.411.371-.41L16 28zm0 0l.371.335h0l.002-.002.004-.005.016-.017a3.037 3.037 0 00.06-.068c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297.669-1.494 1.137-3.037 1.137-4.451 0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 008.5 15c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.448 4.298a46.982 46.982 0 003.522 4.563l.016.017.004.005.001.002h0L16 28zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path></svg>
)

interface IProvinceSelectProp {
  defaultValue?: string
  className?: string
  provinces: string[]
  size?: 'large' | 'middle'
  onChangeCallback(e: Event): void
}

export const ProvinceSelect = (prop: IProvinceSelectProp) => {
  return (
    <Select size={prop.size ?? 'middle'} defaultValue={prop.defaultValue} className={prop.className}>
      <Option value="nearby"><PinIcon />พื้นที่ใกล้ฉัน</Option>
      <Option value="all"><DoublePinIcon />สถานที่ทั้งหมด</Option>
      { prop.provinces.map((value) => (
        <Option value={value}>{value}</Option>
      ))}
    </Select>
  )
}