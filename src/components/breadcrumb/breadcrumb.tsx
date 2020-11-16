import React from 'react'

import './breadcrumb.scss'

export const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <a href="" className="normal">หน้าแรก</a>
        <div className="slash">/</div>
        <div className="selected">ค้นหา</div>
      </div>
    </div>
  )
} 