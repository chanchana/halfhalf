import React from 'react'
import { Tag } from 'antd'
import { FacilityTag } from '../../components'

import { useScreen } from '../../utils'

import './card.scss'

const priceLabel = (level: number) => (
  <span>
    <span style={{color: 'black'}}>{'฿'.repeat(level)}</span>
    <span>{'฿'.repeat(4 - level)}</span>
  </span>
)

const openTag = (type: string | 'Y' | 'N' | 'N/A') => {
  switch (type) {
    case 'Y':
      return <Tag className="tag" color="#1ac300">เปิดอยู่</Tag>
    case 'N':
      return <Tag className="tag" color="#a1a1a1">ปิดแล้ว</Tag>
    default:
      return <></>
  }
}


interface ICardProp {
  shopNameTH: string
  categoryName: string
  subcategoryName: string
  coverImageId: string
  facilities: string[]
  priceLevel: number
  isOpen: string | 'N/A' | 'N' | 'Y'
  highlightText: string
  recommendedItems: string[]
  addressProvinceName: string
  addressDistrictName: string
  priceRange: string[]
}

export const Card = (prop: ICardProp) => {
  const isRestaurant = prop.categoryName === 'ร้านอาหาร'

  const screen = useScreen()


  const detail = (
    <div className="content-container">
      <div className="title"><span>{prop.shopNameTH}{openTag(prop.isOpen)}</span></div>
      <div className="subtitle-container">
        <div className="text">{prop.categoryName}</div>
        <div className="devider">|</div>
        <div className="text">{ isRestaurant ? priceLabel(prop.priceLevel) : prop.priceRange[prop.priceLevel - 1] }</div>
        <div className="devider">|</div>
        <div className="text">{prop.addressDistrictName} {prop.addressProvinceName}</div>
      </div>
      <div className="horizontal-line" />
      <p style={{marginBottom: '8px'}} dangerouslySetInnerHTML={{__html: prop.highlightText}}></p>
      <p style={{marginBottom: '8px'}} >
        <span style={{fontWeight: 500, color:'#444444', marginRight: '8px'}}>{ isRestaurant ? 'เมนูแนะนำ:' : 'สินค้าแนะนำ:'}</span>
        <span>{ prop.recommendedItems.join(', ') }</span>
      </p>
      <div className="facilities">
        { prop.facilities.map((value) => (
          <FacilityTag type={value}/>
        ))}
      </div>
    </div>
  )

  return (
    <>
      { screen.isDesktop && 
        <div className="card">
          <div className="image-container">
            <img src={prop.coverImageId} />
          </div>
          {detail}
        </div>
      }
      { (screen.isTablet || screen.isMobile) && 
        <div className="card-md">
          <div className="image-container">
            <img src={prop.coverImageId} />
          </div>
          {detail}
        </div>
      }

    </>
  )
} 