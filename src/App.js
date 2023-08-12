import {
  GLOBAL_TEXT_COLOR,
  NAVBAR_HEIGHT,
  NAVBAR_LINKS,
} from "./config-global";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SigningCosmWasmProvider } from './contexts/cosmwasm'
import {
  NAVBAR_BACKGROUND_COLOR,
  NAVBAR_LINK_COLOR,
  NAVBAR_LINK_SELECTED_BADGE_SIZE,
  NAVBAR_LINK_SELECTED_COLOR,
  WALLETCONNECT_BUTTON_COLOR,
} from "./config-global";
import Navbar from "./layouts/navbar";
import Launchpad from "./pages/launchpad";
import Preview from "./pages/preview";
import Nfts from "./pages/nfts";
import { Box, Button, Container, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";




function App() {
 
  
 
  return (
    <SigningCosmWasmProvider>
      <BrowserRouter>
      <Navbar />

      
 
   
   
        
      </BrowserRouter>
    </SigningCosmWasmProvider>
  );
}

export default App;
