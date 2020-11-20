import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar, SearchBar, Breadcrumb, openTag, priceLabel } from '../../components'
import { getQuery, icons, makeQuery, useScreen } from '../../utils'
import { merchantService, IData, IMerchant } from '../../services/merchants'
import priceTagImage from '../../assets/price-tag.png'
import './shop.scss'

export const Shop = () => {

  const screen = useScreen()

  const [data, setData] = useState<IData>()

  const query = getQuery()
  const { id }: any = useParams()

  const [merchant, setMerchant] = useState<IMerchant>()
  const [merchantCategory, setMerchantCategory] = useState('')
  const [location, setLocation] = useState(query.location as string ?? 'nearby')
  const [search, setSearch] = useState(query.search as string)

  useEffect(() => {
    merchantService.get().then((result) => {
      const resultData = result as IData
      const resultMerchant = resultData.merchants.find((merchant) => merchant.shopNameTH === id)
      const category = resultData.categories.find(({ name, subcategories }) => subcategories.includes(resultMerchant!.subcategoryName))?.name
      setData(resultData)
      setMerchant(resultMerchant)
      setMerchantCategory(category ?? 'all')
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
    query.search = search
    handleSearchCallback()
  }, [handleSearchCallback, query, search])

  const breadcrumbLinks = merchant && [
    { label: merchantCategory === 'all' ? 'ทั้งหมด' : merchantCategory, url: `#/search?category=${merchantCategory}`, isSelected: false },
    { label: merchant!.shopNameTH, url: `#/`, isSelected: true },
  ]

  const isRestaurant = merchantCategory === 'ร้านอาหารและเครื่องดื่ม'

  const detail = (
    <>
      <div className="price-tag-container">
        <div className="icon">
          <img src={priceTagImage} />
        </div>
        <div>
          <div className="label">ช่วงราคา</div>
          <div>{data && data.priceRange[(merchant && merchant.priceLevel - 1) ?? 0]}</div>
        </div>
      </div>

      <div className="title">สิ่งอำนวยความสะดวก</div>
      {merchant && merchant.facilities.map((value) => (
        <div key={value} className="detail-container">
          <div className="icon">{icons.check}</div>
          <div>{value}</div>
        </div>
      ))}
    </>
  )

  return (
    <>
      <Navbar>
        { data &&
          <SearchBar provinces={data.provinces} location={location} search={search} categories={data.categories} setLocationCallback={setLocationCallback} setSearchCallback={setSearchCallback} setCategoryCallback={setCategoryCallback} onEnter={handleEnterCallback}/>
        }
      </Navbar>
      { data && merchant &&
        <div className="shop">
          <Breadcrumb links={breadcrumbLinks!} /> 
          <div className="cover-header">
            <img src={merchant.coverImageId} />
            <div className="title-container">
              <div className="title"><span>{merchant.shopNameTH}{openTag(merchant.isOpen)}</span></div>
              <div className="subtitle-container">
                <div className="text">{merchant.categoryName}</div>
                <div className="devider">|</div>
                <div className="text">{ isRestaurant ? priceLabel(merchant.priceLevel) : data.priceRange[merchant.priceLevel - 1] }</div>
              </div>
            </div>
          </div>
          <div className="content-container">
            <div className="content">
              <div className={`main-area ${screen.isMobile ? 'm' : ''}`}>
                <div className="box">
                  <div className="title-header">รายละเอียด</div>
                  <div className="detail" dangerouslySetInnerHTML={{__html: merchant.highlightText}}></div>
                  <div className="title-header">{ isRestaurant ? 'เมนูแนะนำ' : 'สินค้าแนะนำ'}</div>
                  {merchant.recommendedItems.map((value) => (
                    <div key={value} className="tag">{value}</div>
                  ))}
                </div>
                { screen.isMobile && 
                  <div className="box">
                    {detail}
                  </div>
                }
              </div>
              { !screen.isMobile && 
                <div className="side-area">
                  <div className="content">
                    {detail}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      }
    </>
  )
}