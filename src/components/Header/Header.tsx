import React, { FunctionComponent } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { selectPersonalInfo } from '../../pages/PersonalInfo/ducks/selectors';


const Header: FunctionComponent = () => {
  const { name } = useSelector(selectPersonalInfo);
  return (
    <AppBar position="static" sx={{
      backgroundColor: "white",
      boxShadow: "none"
    }}>
      <Toolbar variant="dense" sx={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "0 !important"
      }}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"300px"} px={2} py={1} sx={{
          backgroundColor: "error.dark",
          borderRadius: "0px 0px 0px 24px"
        }}>
          <Typography variant="body1" color="inherit" component="div" textTransform={"uppercase"} sx={{
             width: "100%",
             overflow: "hidden",
             whiteSpace: "nowrap",
             textOverflow: "ellipsis",
             textAlign: "left"
          }}>
            {name !== "" ? name : "User"}
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2 }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
