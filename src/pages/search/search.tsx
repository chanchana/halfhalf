import React, { useState, useEffect, useCallback } from 'react'
import './search.scss'
import { merchantService, IData, IMerchant } from '../../services/merchants'
import { filter } from '../../services/filtering'
import { Navbar, Breadcrumb, Filter, Card, SearchBar } from '../../components'
import { getQuery, makeQuery, useScreen } from '../../utils'

export const Search = () => {

  const screen = useScreen()

  const [data, setData] = useState<IData>()
  const [merchants, setMerchants] = useState<IMerchant[]>()
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  const query = getQuery()

  const [category, setCategory] = useState(query.category as string ?? 'all')
  const [location, setLocation] = useState(query.location as string  ?? 'nearby')
  const [priceLevel, setPriceLevel] = useState(parseInt(query.priceLevel as string ?? '0'))
  const [priceStart, setPriceStart] = useState(isNaN(parseInt(query.priceStart as string)) ? undefined : parseInt(query.priceStart as string))
  const [priceTo, setPriceTo] = useState(isNaN(parseInt(query.priceTo as string)) ? undefined : parseInt(query.priceTo as string))
  const [subCategory, setSubCategory] = useState(query.subCategory as string ?? 'all')
  const [search, setSearch] = useState(query.search as string)

  useEffect(() => {
    merchantService.get().then((result) => {
      setData(result as IData)
    })
  }, [])

  useEffect(() => {
    const filterQuery = { category, location, priceLevel, priceStart, priceTo, subCategory, search }
    const queryString = makeQuery(filterQuery)
    window.history.pushState({}, '', `#/search?${queryString}`)
    if (data) {
      setMerchants(filter(filterQuery, data!))
    }
  }, [category, location, priceLevel, priceStart, priceTo, subCategory, search, data])

  const setCategoryCallback = useCallback((value) => {
    setCategory(value)
    setPriceLevel(0)
    setPriceStart(undefined)
    setPriceTo(undefined)
    setSubCategory('all')
  }, [])

  const setLocationCallback = useCallback((value) => {
    setLocation(value)
  }, [])

  const setPriceLevelCallback = useCallback((value) => {
    setPriceLevel(value)
  }, [])

  const setPriceStartCallback = useCallback((value) => {
    setPriceStart(value)
  }, [])

  const setPriceToCallback = useCallback((value) => {
    setPriceTo(value)
  }, [])
  
  const setSubCategoryCallback = useCallback((value) => {
    setSubCategory(value)
  }, [])

  const setSearchCallback = useCallback((value) => {
    setSearch(value)
  }, [])

  const setIsFilterModalOpenCallback = useCallback((state: boolean) => {
    setIsFilterModalOpen(state)
  }, [])

  const states = {
    category,
    location,
    priceLevel,
    priceStart,
    priceTo,
    subCategory,
    search,
  }

  const callbacks = {
    setCategoryCallback,
    setLocationCallback,
    setPriceLevelCallback,
    setPriceStartCallback,
    setPriceToCallback,
    setSubCategoryCallback,
    setSearch,
  }

  // console.log(states)

  const notFound = (
    <div className="not-found">
      <div className={`title ${screen.isMobile ? 'm' : ''}`}>ไม่พบสถานที่ที่คุณกำลังหา</div>
      <div className="sub-title">ร้านค้าที่ท่านค้นหาอาจไม่ได้เข้าร่วมโครงการ คนละครึ่ง</div>
    </div>
  )

  return (
    <div className="search">
      { data &&
        <>
          <Navbar showFilterButtonOnMobile setIsFilterModalOpenCallback={setIsFilterModalOpenCallback} >
            <SearchBar provinces={data.provinces} location={location} setLocationCallback={setLocationCallback} search={search} setSearchCallback={setSearchCallback} categories={data.categories} setCategoryCallback={setCategoryCallback} />
          </Navbar>
          <Breadcrumb links={[{ label: 'ค้นหา', url: '/search', isSelected: true }]} />
          <div className="content">
            <div className="title">
              ผลการค้นหา{category !== 'all' && ` ${category}${search ? `, ${search} ` : ' '}`}ทั้งหมด
            </div>
            <div className="search-content">
              <Filter isModalOpen={isFilterModalOpen} setIsModalOpenCallback={setIsFilterModalOpenCallback} categories={data.categories} priceRange={data.priceRange} provinces={data.provinces} {...callbacks} {...states} />
              <div className="result">
                { merchants ? (merchants.length > 0 ? merchants.map((merchant) => (
                      <Card key={merchant.shopNameTH} shopId={merchant.shopNameTH} {...merchant} priceRange={data.priceRange} />
                    ))
                    :
                    notFound
                  )
                  :
                  <p>Loading</p>
                }
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}