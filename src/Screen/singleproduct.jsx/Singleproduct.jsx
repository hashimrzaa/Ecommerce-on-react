import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Cards from '../../components/card.jsx'
import { CircularProgress} from '@mui/material'



const Singleproduct = ({ id }) => {
    const [data, setData] = useState(false);
    const param = useParams()
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${param.id}`)
            .then((res) => {
                setData(res.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <div className='d-flex justify-content-center' style={{margin:"30px", marginTop: "80px", }}>
                {data ? <Cards b={true} price={data.price} height={500} width={500} btn={false} title={data.title} description={data.description} src={data.image} /> : <h2>Loading <CircularProgress/></h2>}
            </div>
        </>
    )
}

export default Singleproduct