
// // color design tokens export
// export function tokens(mode) {
//     return ({
//         ...(mode === "dark"
//             ? {
//                 grey: {
//                     100: "#e0e0e0",
//                     200: "#c2c2c2",
//                     300: "#a3a3a3",
//                     400: "#858585",
//                     500: "#666666",
//                     600: "#525252",
//                     700: "#3d3d3d",
//                     800: "#292929",
//                     900: "#141414",
//                 },
//                 primary: {
//                     100: "#d0d1d5",
//                     200: "#a1a4ab",
//                     300: "#727681",
//                     400: "#1F2A40",
//                     500: "#141b2d",
//                     600: "#101624",
//                     700: "#0c101b",
//                     800: "#080b12",
//                     900: "#040509",
//                 },
//                 greenAccent: {
//                     100: "#dbf5ee",
//                     200: "#b7ebde",
//                     300: "#94e2cd",
//                     400: "#70d8bd",
//                     500: "#4cceac",
//                     600: "#3da58a",
//                     700: "#2e7c67",
//                     800: "#1e5245",
//                     900: "#0f2922",
//                 },
//                 redAccent: {
//                     100: "#f8dcdb",
//                     200: "#f1b9b7",
//                     300: "#e99592",
//                     400: "#e2726e",
//                     500: "#db4f4a",
//                     600: "#af3f3b",
//                     700: "#832f2c",
//                     800: "#58201e",
//                     900: "#2c100f",
//                 },
//                 blueAccent: {
//                     100: "#e1e2fe",
//                     200: "#c3c6fd",
//                     300: "#a4a9fc",
//                     400: "#868dfb",
//                     500: "#6870fa",
//                     600: "#535ac8",
//                     700: "#3e4396",
//                     800: "#2a2d64",
//                     900: "#151632",
//                 },
//             }
//             : {
//                 grey: {
//                     100: "#141414",
//                     200: "#292929",
//                     300: "#3d3d3d",
//                     400: "#525252",
//                     500: "#666666",
//                     600: "#858585",
//                     700: "#a3a3a3",
//                     800: "#c2c2c2",
//                     900: "#e0e0e0",
//                 },
//                 primary: {
//                     100: "#040509",
//                     200: "#080b12",
//                     300: "#0c101b",
//                     400: "#f2f0f0",
//                     500: "#141b2d",
//                     600: "#1F2A40",
//                     700: "#727681",
//                     800: "#a1a4ab",
//                     900: "#d0d1d5",
//                 },
//                 greenAccent: {
//                     100: "#0f2922",
//                     200: "#1e5245",
//                     300: "#2e7c67",
//                     400: "#3da58a",
//                     500: "#4cceac",
//                     600: "#70d8bd",
//                     700: "#94e2cd",
//                     800: "#b7ebde",
//                     900: "#dbf5ee",
//                 },
//                 redAccent: {
//                     100: "#2c100f",
//                     200: "#58201e",
//                     300: "#832f2c",
//                     400: "#af3f3b",
//                     500: "#db4f4a",
//                     600: "#e2726e",
//                     700: "#e99592",
//                     800: "#f1b9b7",
//                     900: "#f8dcdb",
//                 },
//                 blueAccent: {
//                     100: "#151632",
//                     200: "#2a2d64",
//                     300: "#3e4396",
//                     400: "#535ac8",
//                     500: "#6870fa",
//                     600: "#868dfb",
//                     700: "#a4a9fc",
//                     800: "#c3c6fd",
//                     900: "#e1e2fe",
//                 },
//             }),
//     });
// }


// const cake = function (bread) {
//     return {
//         bread: bread,
//         ...(bread === "aqua" ? { cake: 1, yam: 2 } : { ha: 4, ui: 9 })
//     }
// }

// console.log(cake("aqua"))

import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Ed Roh
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>
                        <Item
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;