import React, { useState, JSX } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { THeader } from "@/types";
import { fetchContent } from "@/views/Content/api";

const appName = import.meta.env.VITE_APP_NAME || "";

const Header = (): JSX.Element => {
    const res = useQuery(["menu", "assembly", "site-root", 1], fetchContent);
    const content = res.data?.items[0] as THeader;
    const menuItems = content?.fields.blocks.filter(
        (item) => item.fields.pageSlug !== "home"
    );

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const handleNavigate = (path: string): void => {
        setAnchorEl(null);
        if (!path) {
            return;
        }
        if (path === "home") {
            navigate("/", { state: { data: path } });
        }
        navigate(`/${path}`, { state: { data: path } });
    };

    return (
        <>
            <AppBar
                sx={{ my: 4 }}
                color="transparent"
                position="relative"
                elevation={0}>
                {menuItems && (
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }}>
                            <Link
                                onClick={() =>
                                    navigate("/", { state: { data: "home" } })
                                }
                                component="button"
                                sx={{ cursor: "pointer" }}
                                underline="none"
                                color="inherit">
                                {appName}
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                "&:hover": { color: "grey.200" },
                            }}>
                            {menuItems.map((item, index) => (
                                <Button
                                    key={index}
                                    sx={{
                                        mx: 1,
                                        "&:hover": {
                                            color: "primary.main",
                                            backgroundColor:
                                                "background.default",
                                        },
                                    }}
                                    color="inherit"
                                    onClick={() =>
                                        handleNavigate(item.fields.pageSlug)
                                    }>
                                    {item.fields.name}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton onClick={handleClick} color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}>
                                {menuItems.map((item, index) => (
                                    <Button
                                        key={index}
                                        sx={{ mx: 1 }}
                                        color="inherit"
                                        onClick={() =>
                                            handleNavigate(item.fields.pageSlug)
                                        }>
                                        {item.fields.name}
                                    </Button>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                )}
            </AppBar>
        </>
    );
};

export default Header;
