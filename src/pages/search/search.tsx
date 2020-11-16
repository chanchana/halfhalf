import React from 'react'
import './search.scss'

import { Navbar, Breadcrumb, Filter, Card } from '../../components'

export const Search = () => {
  return (
    <div className="search">
      <Navbar />
      <Breadcrumb />
      <div className="content">
        <div className="title">
          ผลการค้นหา ร้านอาหารและเครื่องดื่ม ทั้งหมด
        </div>
        <div className="search-content">
          <Filter />
          <div className="result">
            <Card />
            <Card />
          </div>
        </div>
      </div>
      Test search
    </div>
  )
}