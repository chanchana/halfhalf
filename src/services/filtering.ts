import { IData, IMerchant } from '../services/merchants'

export interface IFilterQuery {
    category: string
    location: string
    priceLevel: number
    priceStart?: number
    priceTo?: number
    subCategory: string
    search: string
}

const getPriceLevels = (priceStart?: number, priceTo?: number): number[] => {
    const getLevel = (price?: number, defaultLevel?: number): number => {
        if (!price) {
            return defaultLevel!
        } else {
            if (price < 100) {
                return 1
            } else if (100 <= price && price < 300) {
                return 2
            } else if (300 <= price && price < 600) {
                return 3
            } else if (600 <= price) {
                return 4
            }
        }
        return defaultLevel!
    }
    const startLevel = getLevel(priceStart, 1) 
    const toLevel = getLevel(priceTo, 4)
    const levels = []
    for (let i = startLevel; i <= toLevel; i++) {
        levels.push(i)
    }
    return levels
}

export const filter = (query: IFilterQuery, data: IData): IMerchant[] => {
    data.merchants.forEach((merchant) => {
        merchant.filterCategoryName = data.categories.find(({ name, subcategories }) => subcategories.includes(merchant.subcategoryName))?.name
    })

    let result = data.merchants

    if (query.category !== 'all') {
        result = result.filter((merchant) => merchant.filterCategoryName === query.category)
    }

    if (query.subCategory !== 'all') {
        result = result.filter((merchant) => merchant.subcategoryName === query.subCategory)
    }

    if (query.location !== 'all' && query.location !== 'nearby') {
        result = result.filter((merchant) => merchant.addressProvinceName === query.location)
    }

    if (query.category === 'ร้านอาหารและเครื่องดื่ม' && query.priceLevel !== 0) {
        result = result.filter((merchant) => merchant.priceLevel === query.priceLevel)
    }

    if (query.category !== 'ร้านอาหารและเครื่องดื่ม' && ((query.priceStart && query.priceStart !== 0) || (query.priceTo && !isNaN(query.priceTo)))) {
        const matchedLevels = getPriceLevels(query.priceStart, query.priceTo)
        result = result.filter((merchant) => matchedLevels.includes(merchant.priceLevel))
    }

    if (query.search) {
        const splittedSearch = query.search.toLowerCase().split(' ')
        result = result.filter((merchant) => splittedSearch.every((searchString) => 
            merchant.shopNameTH.toLowerCase().includes(searchString) ||
            merchant.categoryName.toLowerCase().includes(searchString) ||
            merchant.subcategoryName.toLowerCase().includes(searchString) ||
            merchant.addressDistrictName.toLowerCase().includes(searchString) ||
            merchant.addressProvinceName.toLowerCase().includes(searchString)
        ))
    }

    return result
}