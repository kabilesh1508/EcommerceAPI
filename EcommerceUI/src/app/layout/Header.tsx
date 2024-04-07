import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}
const midlinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]
const rightlinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]
const navStyles = {

    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: "grey.400"
    },
    '&.active': {
        color: 'secondary.main'
    }

}

export default function Header({ darkMode, handleThemeChange }: Props) {
    const {basket} = useAppSelector(state => state.basket);
    const itemCount = basket?.items.reduce((sum,item)=> sum + item.quantity,0)
    return (
        <>
            <AppBar position="sticky"  sx={{ mb: 4 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Box display="flex" alignItems='center'>
                        <Typography component={NavLink} to='/' variant="h6"
                            sx={navStyles}>
                            Urban Hive
                        </Typography>
                        {/* Switch button */}
                        <Switch checked={darkMode} onChange={handleThemeChange} />
                        {/* mid navlinks */}
                        <List sx={{ display: 'flex' }}>
                            {midlinks.map(({ title, path }) => (
                                <ListItem component={NavLink} to={path} key={path}
                                    sx={navStyles}>
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box display='flex' alignItems='center'>
                        <IconButton component={NavLink} to={'/basket'} key={'/basket'} size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
                            <Badge badgeContent={itemCount} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                        {/* right navlinks */}
                        <List sx={{ display: 'flex' }}>
                            {rightlinks.map(({ title, path }) => (
                                <ListItem component={NavLink} to={path} key={path}
                                    sx={navStyles}>
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
} 