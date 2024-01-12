import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'


const DrawerC = () => {

    const [ODrawer, setOdrawer] = useState(false)
    const navigate = useNavigate()

    function home() {
      navigate('/')
    }
    function product() {
      navigate(`/product`)
  }

    return (
        <>


            <Drawer open={ODrawer} onClose={() => setOdrawer(false)}>
                <List>
                    <ListItemButton onClick={() => {
                        home()
                        setOdrawer(false)
                    }}>
                        <ListItemIcon>
                            <ListItemText>
                                Home
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton onClick={() => {
                        setOdrawer(false)
                        product()
                    }} >
                        <ListItemIcon>
                            <ListItemText>
                                Product
                            </ListItemText>

                        </ListItemIcon>
                    </ListItemButton>

                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: "auto" }} onClick={() => setOdrawer(!ODrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerC