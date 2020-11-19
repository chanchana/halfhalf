import React, { useState, useEffect, useCallback } from 'react'
import './search.scss'
import { merchantService, IMerchant } from '../../services/merchants'
import { Navbar, Breadcrumb, Filter, Card } from '../../components'
import { getQuery, makeQuery } from '../../utils'

export const Search = () => {

  const [data, setData] = useState<IMerchant>()
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  const query = getQuery()

  const [category, setCategory] = useState(query.category as string ?? 'all')
  const [location, setLocation] = useState(query.location as string  ?? 'nearby')
  const [priceLevel, setPriceLevel] = useState(parseInt(query.priceLevel as string  ?? '0'))
  const [priceStart, setPriceStart] = useState(parseInt(query.priceStart as string ?? '0'))
  const [priceTo, setPriceTo] = useState(parseInt(query.priceTo as string))
  const [subCategory, setSubCategory] = useState(query.subCategory as string ?? 'all')
  const [search, setSearch] = useState(query.search as string)

  useEffect(() => {
    merchantService.get().then((result) => {
      console.log(result)
      setData(result as IMerchant)
    })
  }, [])

  useEffect(() => {
    const queryString = makeQuery({ category, location, priceLevel, priceStart, priceTo, subCategory, search })
    window.history.pushState({}, '', `/search?${queryString}`)
  }, [category, location, priceLevel, priceStart, priceTo, subCategory, search])

  const setCategoryCallback = useCallback((value) => {
    setCategory(value)
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

  return (
    <div className="search">
      { data &&
        <>
          <Navbar provinces={data.provinces} location={location} setLocationCallback={setLocationCallback} setIsFilterModalOpenCallback={setIsFilterModalOpenCallback} search={search} setSearchCallback={setSearchCallback} categories={data.categories} setCategoryCallback={setCategoryCallback} />
          <Breadcrumb />
          <div className="content">
            <div className="title">
              ผลการค้นหา{category !== 'all' && ` ${category}${search ? `, ${search} ` : ' '}`}ทั้งหมด
            </div>
            <div className="search-content">
              <Filter isModalOpen={isFilterModalOpen} setIsModalOpenCallback={setIsFilterModalOpenCallback} categories={data.categories} priceRange={data.priceRange} provinces={data.provinces} {...callbacks} {...states} />
              <div className="result">
                {data.merchants.map((merchant) => (
                  <Card key={merchant.shopNameTH} {...merchant} priceRange={data.priceRange} />
                ))}
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}