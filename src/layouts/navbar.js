import {
  NAVBAR_BACKGROUND_COLOR,
  NAVBAR_HEIGHT,
  NAVBAR_LINKS,
  NAVBAR_LINK_COLOR,
  NAVBAR_LINK_SELECTED_BADGE_SIZE,
  NAVBAR_LINK_SELECTED_COLOR,
  WALLETCONNECT_BUTTON_COLOR,
} from "../config-global";

import React, { useEffect } from "react";
import { Box, Button, Container, Link } from "@mui/material";
import { useLocation } from "react-router-dom";

import { useSigningClient } from '../contexts/cosmwasm'
import {Unity, useUnityContext}  from "react-unity-webgl";
export default function Navbar() {
  const currentPath = useLocation();

  const {
    walletAddress,
    connectWallet,
    signingClient,
    disconnect,
    getBalances,
  } = useSigningClient()

  useEffect(() => {
    let account = localStorage.getItem("address")
    if (account != null) {
      connectWallet(true)
    }
  }, [])

  useEffect(() => {
    if (!signingClient || walletAddress.length === 0)
      return
    getBalances()
  }, [walletAddress, signingClient])

  const handleConnect = () => {
    if (walletAddress.length === 0) {
      connectWallet(false)
    } else {
      disconnect()
    }
  }
  const {unityProvider, sendMessage, isLoaded } = new useUnityContext({
    loaderUrl: "./Megaman/Build/testegidiyor.loader.js",
    dataUrl: "./Megaman/Build/testegidiyor.data",
    frameworkUrl: "./Megaman/Build/testegidiyor.framework.js",
    codeUrl: "./Megaman/Build/testegidiyor.wasm",
    
  });
  function handleClickSpawnEnemies() {
    
    
    sendMessage("LeaderBoard", "SettingWalletAddress", walletAddress);
  }
  function handleClick() {
    
    window.location.reload();
  }
  
const handleButtonClick = () => {
  handleClick();
    
  };
  
  return (
    
      <div
        sx={{
          // border: "1px solid red",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: { sm: "flex", xs: "none" },
            height: "100%",
            padding: { sm: "16px 0", xs: "20px 0" },
            img: {
              height: "100%",
            },
          }}
        >
          <img alt="" src="./logo-export.png" />
        </Box>
        <Box
          sx={{
            display: { sm: "none", xs: "flex" },
            height: "100%",
            padding: { sm: "16px 0", xs: "20px 0" },
            img: {
              height: "100%",
            },
          }}
        >
          <img alt="" src="./logo-export.png" />
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: { sm: "row", xs: "column" },
              alignItems: { sm: "center", xs: "start" },
              justifyContent: "space-between",
              padding: "16px 0",
              ".link-item": {
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0 10px 0 20px",
                ".link-selected-badge": {
                  position: "absolute",
                  left: "5px",
                  top: `calc(50% - ${NAVBAR_LINK_SELECTED_BADGE_SIZE / 2}px)`,
                  width: `${NAVBAR_LINK_SELECTED_BADGE_SIZE}px`,
                  aspectRatio: 1,
                  borderRadius: `${NAVBAR_LINK_SELECTED_BADGE_SIZE}px`,
                  padding: "0",
                  background: NAVBAR_LINK_SELECTED_COLOR,
                },
                ".MuiLink-root": {
                  fontSize: { sm: "16px", xs: "14px" },
                  lineHeight: { sm: "16px", xs: "14px" },
                },
              },
            }}
          >
            
            
            
          </Box>
          
          
        </Box>
        <Box
            sx={{
              marginLeft: "10px",
              ".MuiButton-root": {
                width: { sm: "140px", xs: "110px" },
                height: { sm: "36px", xs: "32px" },
                border: `1px solid ${WALLETCONNECT_BUTTON_COLOR}`,
                borderRadius: "18px",
                color: WALLETCONNECT_BUTTON_COLOR,
                textTransform: "none",
                fontSize: { sm: "16px", xs: "12px" },
                lineHeight: { sm: "16px", xs: "12px" },
              },
            }}
          >
            <Button onClick={handleConnect}>
              {walletAddress ? walletAddress.substring(0, 12) + "..." + walletAddress.substring(walletAddress.length - 6, walletAddress.length) : 'Connect Wallet'}
            </Button>
          </Box>
        <div >
      {walletAddress ? (
        <div>
        <Unity unityProvider={unityProvider} style={{ justifySelf: "center",alignSelf:"center",width: "100%", height: "%100",alignSelf:"center"}}
         disabledCanvasEvents={["dragstart", "scroll"]}
        />
        {isLoaded ? (
      <div>
        {handleClickSpawnEnemies()}
      </div>
    ) : (
      <div style={{ textAlign: 'center', padding: '0 20px' }} >Press Play!</div>
    )}

        
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '0 20px' }} >Please Connect your wallet.
        <div style={{ textAlign: 'center', padding: '0 20px' }} >AND</div>
        <div style={{ textAlign: 'center', padding: '0 20px' }} >Press Play!</div>
        
        <div style={{ textAlign: 'center', padding: '0 20px',boxSizing:'100px' }}>
      
      <button className="BagelFatOne" style={{ fontSize: '50px', padding: '10px 25px' ,
      borderRadius: '20%'}} onClick={handleButtonClick}>Play</button>
      

    </div>

        </div>
        
      )}
    </div>
      </div>
    
    
    
  );
}
