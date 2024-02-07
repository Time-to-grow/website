import { useState, JSX } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Modal from "@mui/material/Modal";
import Toolbar from "@mui/material/Toolbar";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { THeader } from "@/types";
import { fetchContent } from "@/views/Content/api";

const appName = import.meta.env.VITE_APP_NAME || "";

const Header = (): JSX.Element => {
    const res = useQuery({
        queryKey: ["menu", "assembly", "site-root", 1],
        queryFn: fetchContent,
    });
    const content = res.data?.items[0] as THeader;
    const menuItems = content?.fields.blocks.filter(
        (item) => item.fields.pageSlug !== "home"
    );
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleClick = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    const handleNavigate = (path: string): void => {
        setOpen(false);
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
                id="header"
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
                            <Modal
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                                open={open}
                                onClose={handleClose}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                    <Avatar
                                        onClick={handleClose}
                                        sx={{
                                            width: 75,
                                            height: 75,
                                            bgcolor: "primary.main",
                                            cursor: "pointer",
                                        }}>
                                        <CloseIcon fontSize="large" />
                                    </Avatar>
                                    <Box
                                        sx={{
                                            height: "50vh",
                                            backgroundColor: "primary.main",
                                            borderRadius: "0.25rem",
                                            mt: 1,
                                        }}>
                                        <List
                                            sx={{
                                                maxWidth: 500,
                                                minWidth: 300,
                                            }}>
                                            {menuItems.map((item, index) => (
                                                <ListItem key={index}>
                                                    <ListItemButton
                                                        sx={{ color: "white" }}
                                                        onClick={() =>
                                                            handleNavigate(
                                                                item.fields
                                                                    .pageSlug
                                                            )
                                                        }>
                                                        {item.fields.name}
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </Box>
                            </Modal>
                        </Box>
                    </Toolbar>
                )}
            </AppBar>
        </>
    );
};

export default Header;
