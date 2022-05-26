import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const HeroBanner = ({bannerData}) => {
  return (
    <div className='hero-banner-container'>
        <div>
        <p className='beats-solo'>{bannerData.smallText}</p>
        <h3>{bannerData.midText}</h3>
       <h1>{bannerData.largeText1}</h1>    
       
        
            <img src={urlFor(bannerData.image)} alt='sports wear' className='hero-banner-image'></img>
        <div>
            <Link href={`/product/${HeroBanner.product}`}>
                <button type='button'>{bannerData.buttonText}</button>
            </Link>
            <div className='desc'>
                <h5>Description</h5>
                <p>{bannerData.desc}</p>
            </div>
        </div>
        </div> 
        
        </div>
  )
}

export default HeroBanner