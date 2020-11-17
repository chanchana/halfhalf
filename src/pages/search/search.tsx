import React, { useState, useEffect, useCallback } from 'react'
import './search.scss'
import { merchantService, IMerchant } from '../../services/merchants'

import { Navbar, Breadcrumb, Filter, Card, IScreen } from '../../components'

interface ISearchProp {
  screen: IScreen
}

export const Search = (prop: ISearchProp) => {

  const [data, setData] = useState<IMerchant>()

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  const setIsFilterModalOpenCallback = useCallback((state: boolean) => {
    setIsFilterModalOpen(state)
  }, [])

  useEffect(() => {
    merchantService.get().then((result) => {
      console.log(result)
      setData(result as IMerchant)
    })
  }, [])

  return (
    <div className="search">
      { data &&
        <>
          <Navbar provinces={data.provinces} screen={prop.screen} setIsFilterModalOpenCallback={setIsFilterModalOpenCallback} />
          <Breadcrumb screen={prop.screen} />
          <div className="content">
            <div className="title">
              ผลการค้นหา ร้านอาหารและเครื่องดื่ม ทั้งหมด
            </div>
            <div className="search-content">
              <Filter isModalOpen={isFilterModalOpen} setIsModalOpenCallback={setIsFilterModalOpenCallback} selectedCategory="ร้านอาหารและเครื่องดื่ม" categories={data.categories} priceRange={data.priceRange} provinces={data.provinces} screen={prop.screen} />
              <div className="result">
                {data.merchants.map((merchant) => (
                  <Card {...merchant} priceRange={data.priceRange} screen={prop.screen} />
                ))}
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}