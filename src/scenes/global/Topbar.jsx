import { Box, IconButton, useTheme , Typography} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";



const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex">
      <Sidebar/>
      <Box width="100%" height="20%">
      <Box display="flex" justifyContent="space-between">
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        gap="1px"
        margin="auto 0px auto 5px"
      >
        <Typography >Responsive h3</Typography>
       < WavingHandIcon sx={{color:"#ffa07a"}}/>
        
      </Box> 

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <Box
        display="flex"
        backgroundColor = "white"
       height="22px"
        borderRadius="3px"
        margin="auto 5px auto 0px"
      >
        
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase placeholder="Search" />
      </Box>
      </Box>
      </Box>
      <Box width="100%" height="90vh">
      <Outlet></Outlet>
      </Box>
    </Box>
    </Box>
  );
};

export default Topbar;