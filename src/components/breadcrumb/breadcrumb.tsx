import React from 'react'
import { useScreen } from '../../utils'
import './breadcrumb.scss'

interface IBreadcrumbProp {
}

export const Breadcrumb = (prop: IBreadcrumbProp) => {

  const screen = useScreen()

  return (
    <div className="breadcrumb">
      <div className={`container ${screen.isMobile ? 'm' : ''}`}>
        {/* TODO: change href to valid link */}
        <a href="/search" className="normal">หน้าแรก</a>
        <div className="slash">/</div>
        <div className="selected">ค้นหา</div>
      </div>
    </div>
  )
} 