import React from 'react'
import { Hero } from '../Components/hero/hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { Newsletter } from '../Components/Newsletter/Newsletter'
import { Footer } from '../Components/Footer/Footer'


export const Home = () => {
  return (
    <div>
     <Hero/>
     <Popular/>
     <Offers/>
     <NewCollections/>
     <Newsletter/>
     
    </div>
  )
}

