import React from 'react'
import { Input, AutoComplete } from 'antd'
import { ProvinceSelect } from '../../components'
import { useScreen, icons } from '../../utils'
import './searchBar.scss'

interface ISearchBarProp {
  provinces: string[]
  location: string
  search: string
  categories: {
    name: string
    subcategories: string[]
  }[]
  setLocationCallback(value: any): void 
  setSearchCallback(value: any): void
  setCategoryCallback(value: any): void
  onEnter?(e: any): void
  large?: boolean
}

export const SearchBar = (prop: ISearchBarProp) => {

  const screen = useScreen()

  const options = prop.categories.map(({ name }) => ({ value: '', label: (
    <div key={name} onClick={() => {prop.setCategoryCallback(name)}}>
      <span style={{width: '1rem', marginRight: '0.5rem'}}>{name === 'ร้านธงฟ้า' ? icons.shop : icons.food}</span> 
      <span>{name}</span>
    </div>)}
  ))

  return (
    <div className={`search-container ${screen.isMobile ? 'm' : ''} ${prop.large ? 'l' : ''}`}>
      <Input.Group size="large" className="input-group" compact>
        {!screen.isMobile && <ProvinceSelect value={prop.location} size="large" className="select" provinces={prop.provinces} onChangeCallback={prop.setLocationCallback} />}
        <AutoComplete id={screen.isMobile ? 'm' : 'td'} value={prop.search} className="search-bar" options={options}>
          <Input.Search className="input" size="large" {...prop.onEnter && {onPressEnter: prop.onEnter}} onChange={(e) => {prop.setSearchCallback(e.target.value)}} placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป" />
        </AutoComplete>
      </Input.Group>
    </div>
  )
}