import React from 'react'
import { Tag } from 'antd'
import { FacilityTag } from '../../components'

import './card.scss'

const imgSrc = "https://images.unsplash.com/photo-1597227772909-a6d166b48b79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"

const priceLabel = (level: number) => (
  <span>
    <span style={{color: 'black'}}>{'฿'.repeat(level)}</span>
    <span>{'฿'.repeat(4 - level)}</span>
  </span>
)

export const Card = () => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={imgSrc} />
      </div>
      <div className="content-container">
        <div className="title"><span>ชื่อร้าน</span><Tag className="tag" color="#1ac300">เปิดอยู่</Tag></div>
        <div className="subtitle-container">
          <p>ชื่อร้าน</p>
          <div className="devider">|</div>
          <p>{priceLabel(2)}</p>
          <div className="devider">|</div>
          <p>ชื่อร้าน</p>
        </div>
        <div className="horizontal-line" />
        <p>ชื่อร้าน</p>
        <div className="facilities">
          <FacilityTag type="ที่จอดรถ" />
          <FacilityTag type="รับจองล่วงหน้า" />
          <FacilityTag type="สามารถนำสัตว์เลี้ยงเข้าได้" />
        </div>
      </div>
    </div>
  )
} 