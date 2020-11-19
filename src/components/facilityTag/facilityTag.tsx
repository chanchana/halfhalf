import React from 'react'
import { Tooltip } from 'antd'
import petImage from '../../assets/facilities/pet.png'
import bookingImage from '../../assets/facilities/booking.png'
import parkingImage from '../../assets/facilities/parking.png'
import './facilityTag.scss'

interface IFacilityTagProp {
  type: string | 'ที่จอดรถ' | 'สามารถนำสัตว์เลี้ยงเข้าได้' | 'รับจองล่วงหน้า'
}

const getImage = (name: string) => {
  switch(name) {
    case 'ที่จอดรถ':
      return parkingImage
    case 'สามารถนำสัตว์เลี้ยงเข้าได้':
      return petImage
    case 'รับจองล่วงหน้า':
      return bookingImage
  }
}

export const FacilityTag = (prop: IFacilityTagProp) => {
  return (
    <Tooltip placement="top" title={prop.type}>
      <div className="facility-tag">
        <div className="img-container">
          <img src={getImage(prop.type)} alt="Facility Icon" />
        </div>
      </div>
    </Tooltip>
  )
}