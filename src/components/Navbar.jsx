import React, { useEffect, useState } from 'react'
import { Tabs, Toolbar, Tab, AppBar, useMediaQuery, useTheme, Typography } from '@mui/material';
import { ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import DrawerC from './Drawer';
import { useNavigate } from 'react-router-dom'



const Navbar = () => {

  const [value, setValue] = useState(0)
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()

  function home() {
    navigate('/')
  }
  function product() {
    navigate(`/product`)
}
useEffect(()=>{
  if(value == 0){
    home()
  }else if(value == 1){
    product()
  }
},[])

  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <ShoppingCartCheckoutOutlined />
          <Typography sx={{ fontSize: "1.5rem", marginLeft: "1%" ,cursor:"pointer"}} onClick={home}>
            Hasho
          </Typography>
          {
            isMatch ? (
              <>
                <DrawerC />
              </>
            ) : (
              <>
                <Tabs sx={{ marginLeft: "auto" }} textColor='inherit' value={value} onChange={(e,value)=>{
                  setValue(value)
                }}
                  indicatorColor='primary'>
                  <Tab label='Home' onClick={home}/>
                  <Tab label="Product" onClick={product}/>
                </Tabs>
              </>
            )
          }

        </Toolbar>
      </AppBar>

    </>
  )
}

export default Navbar