import React, { useEffect, useState } from 'react'
import { Button, Drawer, Select, InputNumber, Radio } from 'antd'
import { ProvinceSelect } from '../../components'
import { useScreen, icons } from '../../utils'
import './filter.scss'

const { Option } = Select

interface IFilterProp {
  isModalOpen: boolean
  setIsModalOpenCallback(state: boolean): void
  categories: {
    name: string
    subcategories: string[]
  }[]
  provinces: string[]
  priceRange: string[]
  category: string
  location: string
  priceLevel: number
  priceStart?: number
  priceTo?: number
  subCategory: string
  setCategoryCallback(value: any): void
  setLocationCallback(value: any): void
  setPriceLevelCallback(value: any): void
  setPriceStartCallback(value: any): void
  setPriceToCallback(value: any): void
  setSubCategoryCallback(value: any): void
}

export const Filter = (prop: IFilterProp) => {

  const screen = useScreen()

  const [priceStart, setPriceStart] = useState(prop.priceStart)
  const [priceTo, setPriceTo] = useState(prop.priceTo)

  useEffect(() => {
    setPriceStart(prop.priceStart)
    setPriceTo(prop.priceTo)
  }, [prop.priceStart, prop.priceTo, prop.category])

  const handleSetPriceStart = (value: any) => {
    setPriceStart(value)
  }

  const handleSetPriceTo = (value: any) => {
    setPriceTo(value)
  }

  const handleUpdatePriceRange = () => {
    prop.setPriceStartCallback(priceStart)
    prop.setPriceToCallback(priceTo)
  }

  const filterArea = (
    <>
      <div className="text-header" style={{ marginTop: '0px' }}>ประเภทร้านค้า</div>
      <div className="option-box">
        <Radio.Group onChange={(e) => {prop.setCategoryCallback(e.target.value)}} value={prop.category}>
          <Radio className="radio-select" value="all">ทั้งหมด</Radio>
          {prop.categories.map(({ name }) =>
            <Radio key={name} className="radio-select" value={name}>{name}</Radio>
          )}
        </Radio.Group>
      </div>

      <div className="text-header">จังหวัด/ใกล้ฉัน</div>
      <div className="option-box-secondary">
        <ProvinceSelect className="location-select" value={prop.location} provinces={prop.provinces} onChangeCallback={prop.setLocationCallback} />
      </div>

      { prop.category === 'ร้านอาหารและเครื่องดื่ม' ?
        <>
          <div className="text-header" style={{ marginTop: '33px' }}>ราคา</div>
          <div className="option-box-secondary">
            <Select defaultValue={0} value={prop.priceLevel} className="location-select" onChange={prop.setPriceLevelCallback}>
              <Option value={0}>ทั้งหมด</Option>
              {prop.priceRange.map((value, index) => (
                <Option key={value} value={index + 1}>{value}</Option>
              ))}
            </Select>
          </div>
        </>
        :
        <>
          <div className="text-header" style={{ marginTop: '33px' }}>ช่วงราคาสินค้า (บาท)</div>
          <div className="option-box-secondary">
            <div className="price-range-select" style={{ display: 'flex' }}>
              <InputNumber style={{ flexGrow: 1 }} min={0} placeholder="ราคาต่ำสุด" value={priceStart} onChange={handleSetPriceStart} />
              <div className="price-dash">-</div>
              <InputNumber style={{ flexGrow: 1 }} min={0} placeholder="ราคาสูงสุด" value={priceTo} onChange={handleSetPriceTo} />
            </div>

            <Button block type="ghost" className="button" onClick={handleUpdatePriceRange}>ตกลง</Button>

          </div>
        </>
      }

      { prop.category !== 'all' &&
        <>
          <div className="text-header">ประเภท{prop.category}</div>
          <div className="option-box">
            <Radio.Group onChange={(e) => {prop.setSubCategoryCallback(e.target.value)}} value={prop.subCategory}>
              <Radio className="radio-select" value="all">ทั้งหมด</Radio>
              {prop.categories.find(({ name }) => name === prop.category)?.subcategories.map((value) => (
                <Radio key={value} className="radio-select" value={value}>{value}</Radio>
              ))}
            </Radio.Group>
          </div>
        </>
      }
    </>
  )

  const modal = (
    <Drawer visible={prop.isModalOpen} className="filter-modal" width="100%" closable={false}>
      <div>
        <div className="header">
          <div className="arrow-icon" onClick={() => prop.setIsModalOpenCallback(false)}>
            {icons.arrow}
          </div>
          <div>กรอกผล</div>
        </div>
        <div className="container">
          {filterArea}
        </div>
      </div>
    </Drawer>
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