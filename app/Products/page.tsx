import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import Bestdeal from '@/components/Bestdeal'
import FilterBar from '@/components/FilterBar'
import { ProductList } from '@/components/product/ProductList'

const page = () => {
  return (
    <div>
      <Header/>
      <FilterBar />
      <ProductList/>
      <Bestdeal/>
      <Footer/>
    </div>
  )
}

export default page
