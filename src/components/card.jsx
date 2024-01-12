import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Cards = ({ title, description, price, src, id, width, btn = true, height ,b=false}) => {
    const navigate = useNavigate()

    function single() {
        navigate(`singleProduct/${id}`)
    }
    function back() {
        navigate(`/product`)
    }
    return (
        <>
            <Card className='d-flex ' sx={{ maxWidth: { width }, justifyContent: "space-between", flexDirection: "column" }}>
                <CardMedia
                    component="img"
                    alt={title}
                    height={height}
                    image={src}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {price}$
                    </Typography>
                </CardContent>
                <CardActions>
                    {btn ? <Button sx={{":hover" :{background:"lightblue"},color:"white" , background:"#063970",padding:"8px"}} size="small" onClick={single}>Show more</Button> : null}
                    {b ? <Button  size="big" onClick={back}><ArrowBackIcon/> back</Button> : null}
                </CardActions>
            </Card>
        </>
    );
}

export default Cards