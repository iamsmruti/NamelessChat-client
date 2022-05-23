import '../App.css'
import { Drawer, Typography, ListItem, ListItemText, List, ListItemIcon } from '@mui/material';
import SubjectIcon from '@mui/icons-material/Subject';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Avatar, IconButton } from '@mui/material';

import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns'
import { useState } from 'react'

import styles from './style.module.css'

const drawerWidth = 240;

const Layout = ({ children }, props) => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.pathname)
    const menuItems = [
        {
            text: "All Messages",
            icon: <SubjectIcon color='secondary' />,
            path: '/'
        },
        {
            text: "Write a Messsage",
            icon: <AddCircleOutlineIcon color='secondary' />,
            path: '/create'
        }
    ]

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <>
            <div>
                <Typography margin={2} marginLeft={2} variant='h5'>
                    Nameless Chat
                </Typography>
            </div>
    
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        button
                        key={item.text}
                        onClick={() => navigate(item.path)}
                        className={location.pathname === item.path ? styles.active : ''}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </>
    )
    
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div className='rootContainer'>
            <AppBar
                className={styles.appbar}
                elevation={0}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6'>
                        Have fun !
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{
                            marginLeft: 'auto'
                        }}
                    >
                        Daddy
                    </Typography>
                    <Avatar
                        src='/123.png'
                        sx={{
                            marginLeft: 1
                        }}
                    />
                </Toolbar>
            </AppBar>
            
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                className={styles.drawer}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor='left'
            >
                {drawer}
            </Drawer>
            <div className='pageBody'>
                <div className={styles.toolbar}></div>
                {children}
            </div>
        </div>
    );
}

export default Layout;