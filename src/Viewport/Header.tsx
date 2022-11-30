import React, { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

// import logo from '@/assets/logo.png';
import { useMenu } from "@/client";
import type { MenuItemType } from '@/client';

const Header: React.FC = () => {
    const { menuItems } = useMenu();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (path: string) => {
        if (path === "home") {
            navigate("/", { state: { data: path } });
        }
        else {
            navigate(`/${path}`, { state: { data: path } });
        }
    }

    return (
        <AppBar color="transparent" position="static" elevation={0}>
            {menuItems &&
                <Toolbar >
                    <Box sx={{ flexGrow: 1 }}>
                        <Link onClick={() => handleNavigate('home')} component="button" sx={{ cursor: 'pointer' }} underline="none" color="inherit">
                            {/* <CardMedia component="img" sx={{ width: { xs: '40vw', sm: 200 } }} loading="lazy" src={logo} alt="Time to grow" /> */}
                            Time to grow
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {menuItems.map((item: MenuItemType, index: number) =>
                            <MenuButton item={item} onClick={() => handleNavigate(item.fields.slug)} key={index} />
                        )}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton onClick={handleClick} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}   >
                            {menuItems.map((item: MenuItemType, index: number) =>
                                <SmallMenuButton item={item} key={index} onClick={() => { handleNavigate(item.fields.slug), handleClose() }} />
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            }
        </AppBar>
    )
}
export default Header;

type MenuButtonProps = {
    item: MenuItemType;
    onClick: () => void;
    href?: string;
}

const SmallMenuButton = (props: MenuButtonProps) => {
    const { item } = props;

    return (
        <>
            {item.fields.slug === 'home' ?
                null
                :
                <MenuItem  {...props}>
                    {item.fields.name}
                </MenuItem>
            }
        </>
    )

}

const MenuButton = (props: MenuButtonProps) => {
    const { item } = props;

    return (
        <>
            {item.fields.slug === 'home' ?
                null
                :
                <Button sx={{ mx: 1 }} color="inherit" {...props}>
                    {item.fields.name}
                </Button>
            }
        </>
    )
}