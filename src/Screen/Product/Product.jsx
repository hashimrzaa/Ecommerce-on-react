
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../../components/card.jsx'
import { CircularProgress } from '@mui/material'


const Product = () => {

  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setdata(res.data)
      }).catch((error) => {
        console.log(error);
      })
  }, [])
  return (
    <>
      <div className='d-flex justify-content-evenly flex-wrap gap-4 ' style={{ margin: "30px", marginTop: "80px" }} >
        {data.length > 0 ? data.map((item) => {
          return <Cards height={320} width={300} key={item.id} title={item.title} src={item.image} price={item.price} id={item.id} />
        }) : <h2>Loading <CircularProgress/></h2>}
        
      </div>
    </>

  )
}

export default Product