import axios from 'axios'

export interface IMerchant {
  shopNameTH: string
  filterCategoryName?: string
  categoryName: string
  subcategoryName: string
  coverImageId: string
  facilities: string[]
  priceLevel: number
  isOpen: string | 'N/A' | 'N' | 'Y'
  highlightText: string
  recommendedItems: string[]
  addressProvinceName: string
  addressDistrictName: string
}

export interface IData {
  categories: {
    name: string
    subcategories: string[]
  }[]
  provinces: string[]
  priceRange: string[]
  merchants: IMerchant[]
}

const testFetch = {
  "categories": [
    {
      "name": "ร้านอาหารและเครื่องดื่ม",
      "subcategories": [
        "อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว",
        "ก๋วยเตี๋ยว ก๋วยจั๊บ",
        "ชาบู สุกี้ยากี้ หม้อไฟ",
        "ปิ้งย่าง หมูกะทะ",
        "ของหวาน ไอศกรีม เบเกอรี่ เครื่องดื่ม",
        "ผับ ร้านเหล้า บาร์",
        "ร้านขายผลไม้ / ร้านขายผัก",
        "ร้านอาหารอีสาน",
        "ร้านอาหารญี่ปุ่น",
        "ข้าวต้ม โจ๊ก เกาเหลา",
        "คาราโอเกะ",
        "บุฟเฟ่ต์",
        "บุฟเฟ่ต์โรงแรม",
        "พิซซ่า ฟาสต์ฟู้ด จานด่วน",
        "อาหารจีน",
        "อาหารเจ มังสวิรัติ สุขภาพ",
        "อาหารใต้",
        "อาหารทะเล",
        "อาหารนานาชาติ",
        "อาหารมุสลิม อิสลาม",
        "อาหารเวียดนาม",
        "อาหารอินเดีย",
        "อาหารเหนือ",
        "อาหารว่าง ขนม ของกินเล่น",
        "อื่นๆ"
      ]
    },
    {
      "name": "ร้านค้า OTOP",
      "subcategories": [
        "ผลิตภัณฑ์อาหาร",
        "ผลิตภัณฑ์เครื่องดื่ม",
        "ผลิตภัณฑ์ผ้า / เครื่องแต่งกาย / เครื่องประดับ",
        "ผลิตภัณฑ์ของใช้ / ของตกแต่ง / ของที่ระลึก",
        "ผลิตภัณฑ์สมุนไพรที่ไม่ใช่อาหาร"
      ]
    },
    { "name": "ร้านธงฟ้า", "subcategories": [] },
    {
      "name": "สินค้าทั่วไป",
      "subcategories": [
        "ร้านขายของฝาก",
        "ร้านจำหน่ายอะไหล่รถทุกประเภท",
        "ร้านขายรถยนต์/มอเตอร์ไซต์",
        "ร้านขายอุปกรณ์เพื่อการกีฬา",
        "ร้านขายสินค้าเกษตร",
        "ร้านเกี่ยวกับสัตว์เลี้ยง / ขายอาหารสัตว์",
        "ร้านจัดสวน / ขายต้นไม้ / ดอกไม้ / พวงหรีด",
        "สินค้าเกี่ยวกับการตกแต่งบ้าน",
        "ร้านขายเสื้อผ้า / เครื่องประดับ / สินค้าแฟชั่น",
        "ร้านขายเครื่องสำอางและบำรุงผิวพรรณ",
        "ร้านขายยาและอาหารเสริม",
        "ร้านขายของใช้ / อุปกรณ์",
        "มินิมาร์ท / ร้านขายของชำ",
        "ตลาดสด",
        "ซุปเปอร์มาร์เก็ต"
      ]
    }
  ],
  "provinces": [
    "กรุงเทพมหานคร",
    "สมุทรปราการ",
    "นนทบุรี",
    "ปทุมธานี",
    "พระนครศรีอยุธยา",
    "อ่างทอง",
    "ลพบุรี",
    "สิงห์บุรี",
    "ชัยนาท",
    "สระบุรี",
    "ชลบุรี",
    "ระยอง",
    "จันทบุรี",
    "ตราด",
    "ฉะเชิงเทรา",
    "ปราจีนบุรี",
    "นครนายก",
    "สระแก้ว",
    "นครราชสีมา",
    "บุรีรัมย์",
    "สุรินทร์",
    "ศรีสะเกษ",
    "อุบลราชธานี",
    "ยโสธร",
    "ชัยภูมิ",
    "อำนาจเจริญ",
    "หนองบัวลำภู",
    "ขอนแก่น",
    "อุดรธานี",
    "เลย",
    "หนองคาย",
    "มหาสารคาม",
    "ร้อยเอ็ด",
    "กาฬสินธุ์",
    "สกลนคร",
    "นครพนม",
    "มุกดาหาร",
    "เชียงใหม่",
    "ลำพูน",
    "ลำปาง",
    "อุตรดิตถ์",
    "แพร่",
    "น่าน",
    "พะเยา",
    "เชียงราย",
    "แม่ฮ่องสอน",
    "นครสวรรค์",
    "อุทัยธานี",
    "กำแพงเพชร",
    "ตาก",
    "สุโขทัย",
    "พิษณุโลก",
    "พิจิตร",
    "เพชรบูรณ์",
    "ราชบุรี",
    "กาญจนบุรี",
    "สุพรรณบุรี",
    "นครปฐม",
    "สมุทรสาคร",
    "สมุทรสงคราม",
    "เพชรบุรี",
    "ประจวบคีรีขันธ์",
    "นครศรีธรรมราช",
    "กระบี่",
    "พังงา",
    "ภูเก็ต",
    "สุราษฎร์ธานี",
    "ระนอง",
    "ชุมพร",
    "สงขลา",
    "สตูล",
    "ตรัง",
    "พัทลุง",
    "ปัตตานี",
    "ยะลา",
    "นราธิวาส",
    "บึงกาฬ"
  ],
  "priceRange": [
    "ไม่เกิน 100 บาท",
    "100 - 300 บาท",
    "300 - 600 บาท",
    "มากกว่า 600 บาท"
  ],
  "merchants": [
    {
      "shopNameTH": "Kanysorn Cafe",
      "categoryName": "งานบริการอื่นๆ / เบ็ดเตล็ด",
      "subcategoryName": "สินค้า และ บริการ เกี่ยวกับการตกแต่งบ้าน",
      "coverImageId": "https://images.unsplash.com/photo-1597227772909-a6d166b48b79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "facilities": ["ที่จอดรถ"],
      "priceLevel": 1,
      "isOpen": "Y",
      "highlightText": "<strong>ร้านทุกอย่าง</strong> โต๊ะ ตู้ เตียง",
      "recommendedItems": ["แจกัน", "จานชาม", "เก้าอี้สามขา"],
      "addressProvinceName": "กรุงเทพมหานคร",
      "addressDistrictName": "เขตธนบุรี"
    },
    {
      "shopNameTH": "Wiput Shop",
      "categoryName": "แฟชั่น",
      "subcategoryName": "ร้านขายเสื้อผ้า / เครื่องประดับ / สินค้าแฟชั่น",
      "coverImageId": "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
      "facilities": ["ที่จอดรถ", "สามารถนำสัตว์เลี้ยงเข้าได้"],
      "priceLevel": 2,
      "isOpen": "N/A",
      "highlightText": "Custom Keyboard By <strong>Wiput</strong>, จัดจำหน่าย Keychron ทุกรุ่น",
      "recommendedItems": ["Keychron K2", "Keychron K4"],
      "addressProvinceName": "กรุงเทพมหานคร",
      "addressDistrictName": "เขตพระนคร"
    },
    {
      "shopNameTH": "YWC Shop",
      "categoryName": "ร้านอาหาร",
      "subcategoryName": "อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว",
      "coverImageId": "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "facilities": ["ที่จอดรถ"],
      "priceLevel": 4,
      "isOpen": "N",
      "highlightText": "ร้านนี้ไม่ค่อยมีอะไรขาย เน้นขายขำเป็นหลัก <strong>มีที่จอดรถ</strong>",
      "recommendedItems": ["กาแฟสด", "ขนมปังปิ้ง", "ข้าวไข่เจียวแหนม"],
      "addressProvinceName": "กรุงเทพมหานคร",
      "addressDistrictName": "เขตพระนคร"
    },
    {
      "shopNameTH": "Chayanon Cafe",
      "categoryName": "ร้านอาหาร",
      "subcategoryName": "อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว",
      "coverImageId": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
      "facilities": ["ที่จอดรถ"],
      "priceLevel": 3,
      "isOpen": "N",
      "highlightText": "<strong>ร้านกาแฟสด</strong> ดริปเองโดยบาริสต้าชื่อดังระดับประเทศ",
      "recommendedItems": ["กาแฟสด", "ขนมปังปิ้ง"],
      "addressProvinceName": "กรุงเทพมหานคร",
      "addressDistrictName": "เขตลาดกระบัง"
    },
    {
      "shopNameTH": "วายดับบลิวซีหมูกระทะ",
      "categoryName": "ร้านอาหาร",
      "subcategoryName": "อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว",
      "coverImageId": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "facilities": ["ที่จอดรถ", "รับจองล่วงหน้า"],
      "priceLevel": 3,
      "isOpen": "Y",
      "highlightText": "สด สะอาด <strong>ราคาเป็นมิตร</strong> จนต้องมากินซ้ำ",
      "recommendedItems": ["หมูกระทะ", "สุกี้"],
      "addressProvinceName": "กรุงเทพมหานคร",
      "addressDistrictName": "เขตธนบุรี"
    }
  ]
}

const get = (): Promise<void | IData> => {
  return axios.get('https://panjs.com/ywc18.json', {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }).then((result) => {
    return result.data
  }).catch((error) => {
    console.log(error)
    return testFetch
  })
}

export const merchantService = {
  get,
}