import React from 'react'
import { useParams } from 'react-router-dom'
import { useScreen } from '../../utils'
import './breadcrumb.scss'

interface ILink {
  label: string
  url: string
  isSelected: boolean
}

interface IBreadcrumbProp {
  links: ILink[]
}

export const Breadcrumb = (prop: IBreadcrumbProp) => {

  const screen = useScreen()

  const handleLink = (url: string) => {
    window.history.pushState({}, '', `${url}`)
    window.location.reload()
  }

  return (
    <div className="breadcrumb">
      <div className={`container ${screen.isMobile ? 'm' : ''}`}>
        <div onClick={() => {handleLink('/')}} className="normal">หน้าแรก</div>
        {prop.links.map(({ label, url, isSelected }) => (
          <div style={{display: 'flex'}} key={label}>
            <div className="slash">/</div>
            <div {...!isSelected && {onClick: () => {handleLink(url)}}} className={isSelected ? 'selected' : 'normal'}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 