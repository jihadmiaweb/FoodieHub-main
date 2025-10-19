import React, { useState } from 'react'
import Header from '../component/Header'
import ExploreMenu from '../component/ExploreMenu'
import FoodDisplay from '../component/FoodDisplay'

const Home = () => {

  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
