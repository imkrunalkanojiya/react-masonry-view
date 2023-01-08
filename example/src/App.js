import React from 'react'

import 'react-masonry-view/dist/index.css'
// import {MasonryGrid} from 'react-masonry-grid'
import {MasonryView} from "react-masonry-view"


import Img1 from './assets/img1.jpg'
import Img2 from './assets/img2.jpg'
import Img3 from './assets/img3.jpg'
import Img4 from './assets/img4.jpg'
import Img5 from './assets/img5.jpg'
import Img6 from './assets/img6.jpg'
import Img7 from './assets/img7.jpg'
import Img8 from './assets/img8.jpg'
import Img9 from './assets/img9.jpg'

const App = () => {
  const imgDetails = [
    {
      id: 1,
      imgUrl: Img1
    },
    {
      id: 2,
      imgUrl: Img2
    },
    {
      id: 3,
      imgUrl: Img3
    },
    {
      id: 4,
      imgUrl: Img4
    },
    {
      id: 5,
      imgUrl: Img5
    },
    {
      id: 6,
      imgUrl: Img6
    },
    {
      id: 7,
      imgUrl: Img7
    },
    {
      id: 8,
      imgUrl: Img8
    },
    {
      id: 9,
      imgUrl: Img9
    }
  ]
  return (
    <>
      <MasonryView imgDetails={imgDetails} />
    </>
  )
}

export default App
