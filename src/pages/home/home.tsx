import React, { useState, useEffect, useCallback } from 'react'
import { Navbar, SearchBar } from '../../components'
import { MapContainer, TileLayer } from 'react-leaflet'
import Marker from 'react-leaflet-enhanced-marker'
import { IData, merchantService } from '../../services/merchants'
import coverImage from '../../assets/bg-half-search.png'
import { makeQuery, getQuery } from '../../utils'
import blueFlagImage from '../../assets/categories/blue-flag.png'
import etcImage from '../../assets/categories/etc.png'
import foodImage from '../../assets/categories/food.png'
import otopImage from '../../assets/categories/otop.png'
import './home.scss'

export const Home = () => {

  const [data, setData] = useState<IData>()
  const [isMarkerClicked, setIsMarkerClicked] = useState(false)
  const [location, setLocation] = useState('nearby')
  const [search, setSearch] = useState('')

  const query = getQuery()

  useEffect(() => {
    merchantService.get().then((result) => {
      setData(result as IData)
    })
  }, [])

  const handleSearchCallback = useCallback(() => {
    const queryString = makeQuery(query)
    window.history.pushState({}, '', `#/search?${queryString}`)
    window.location.reload()
  }, [query])

  const setLocationCallback = useCallback((value) => {
    query.location = value
    handleSearchCallback()
  }, [handleSearchCallback, query])

  const setSearchCallback = useCallback((value) => {
    setSearch(value)
  }, [])

  const setCategoryCallback = useCallback((value) => {
    query.category = value
    handleSearchCallback()
  }, [handleSearchCallback, query])

  const handleEnterCallback = useCallback(() => {
    query.search = search!
    handleSearchCallback()
  }, [handleSearchCallback, query, search])

  const map = (
    <MapContainer id="mapid" center={[13.736717, 100.523186]} zoom={8} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker icon={<div onClick={() => setIsMarkerClicked(!isMarkerClicked)} className={`map-cicle ${isMarkerClicked ? 'clicked' : ''}`}>{data && data.merchants.length}</div>} position={[13.736717, 100.523186]} />
    </MapContainer>
  )

  const mainCategories = [
    { src: foodImage, label: 'อาหารและเครื่องดื่ม', name: 'ร้านอาหารและเครื่องดื่ม'},
    { src: blueFlagImage, label: 'ธงฟ้า', name: 'ร้านธงฟ้า'},
    { src: otopImage, label: 'กิจการ OTOP', name: 'ร้านค้า OTOP'},
    { src: etcImage, label: 'สินค้าทั่วไป', name: 'สินค้าทั่วไป'},
  ]

  return (
    <div className="home">
      <Navbar />
      <div className="header-cover">
        <img src={coverImage} />
        <div className="container">
          <div className="title">ค้นหาร้านค้าที่เข้าร่วมโครงการ คนละครึ่ง</div>
          <div className="search-container">
            {data && <SearchBar large provinces={data.provinces} location={location} search={search} categories={data.categories} setLocationCallback={setLocationCallback} setSearchCallback={setSearchCallback} setCategoryCallback={setCategoryCallback} onEnter={handleEnterCallback}/>}
          </div>
        </div>
      </div>
      <div className="content">
        <div className="title">ประเภทร้านค้า</div>
        <div className="grid-container">
          { mainCategories.map(({ src, label, name }) => (
            <div key={label} onClick={() => {setCategoryCallback(name)}} className="grid-item">
              <img src={src} />
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <div className="title">ค้นหาตามจังหวัด</div>
        <div className="map-container">
          {map}
        </div>
      </div>
    </div>
  )
}