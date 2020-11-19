import React from 'react'
import {  Select } from 'antd'
import { icons } from '../../utils'

const { Option } = Select

interface IProvinceSelectProp {
  value?: string
  className?: string
  provinces: string[]
  size?: 'large' | 'middle'
  onChangeCallback(value: string): void
}

export const ProvinceSelect = (prop: IProvinceSelectProp) => {
  return (
    <Select size={prop.size ?? 'middle'} value={prop.value} className={prop.className} onChange={prop.onChangeCallback}>
      <Option value="nearby">{icons.pin}พื้นที่ใกล้ฉัน</Option>
      <Option value="all">{icons.doublePin}สถานที่ทั้งหมด</Option>
      { prop.provinces.map((value) => (
        <Option key={value} value={value}>{value}</Option>
      ))}
    </Select>
  )
}