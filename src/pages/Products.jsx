import React from 'react'


// Import Swiper styles
import 'swiper/css';
import OurProducts from '../components/OurProducts';
import SeoHelmet from '../components/SeoHelmet';

export default function Products() {
  return (
    <div>
      <SeoHelmet pageKey="products" />
   <OurProducts/>
    </div>
  )
}
