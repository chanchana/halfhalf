import React from 'react'

import { IScreen } from '../../components'

import './breadcrumb.scss'

interface IBreadcrumbProp {
  screen: IScreen
}

export const Breadcrumb = (prop: IBreadcrumbProp) => {
  const screen = prop.screen
  return (
    <div className="breadcrumb">
      <div className={`container ${screen.isMobile ? 'm' : ''}`}>
        <a href="" className="normal">หน้าแรก</a>
        <div className="slash">/</div>
        <div className="selected">ค้นหา</div>
      </div>
    </div>
  )
} 