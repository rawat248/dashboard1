import React, { useState } from "react";
import { Box, useTheme, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CategoryIcon from '@mui/icons-material/Category';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Link } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  const menuItems = [
    { title: "Dashboard", icon: <MenuOutlinedIcon sx={{ color: "white" }}/>, to: "/" },
    { title: "Product", icon: <CategoryIcon sx={{ color: "white" }}/>, to: "/product" },
    { title: "Customers", icon: <ContactsOutlinedIcon sx={{ color: "white" }}/>, to: "/customers" },
    { title: "Income", icon: <ReceiptOutlinedIcon sx={{ color: "white" }}/>, to: "/income" },
    { title: "Promote", icon: <PersonOutlinedIcon sx={{ color: "white" }}/>, to: "/promote" },
    { title: "Help", icon: <HelpOutlineOutlinedIcon sx={{ color: "white" }}/>, to: "/help" },
  ];

  return (
    <Box width="20%" backgroundColor={colors.blue[300]} height="100vh">
      <Box display="flex" ml="10px" mt="10px" gap="10px" mb="20px">
        <MenuOutlinedIcon sx={{ color: "white" }} />
        <Typography variant="h4" color={colors.white[500]}>
          Dashboard
        </Typography>
      </Box>
      <List>
        {menuItems.map((menuItem) => (
          <ListItem
            
            key={menuItem.title}
            selected={selected === menuItem.title}
            onClick={() => setSelected(menuItem.title)}
            component={Link}
            to={menuItem.to}
          >
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <ListItemText primary={menuItem.title} sx={{ color: "white" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;



