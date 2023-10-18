import React from "react";
import { Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Earning = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "250px",
          height: "100px",
          backgroundColor: "white",
          marginLeft: "2px",
          marginRight: "8px",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <MonetizationOnIcon
              sx={{ width: "100px", height: "60px", marginTop: "10px" }}
            />
          </div>
          <div >
            <Typography sx={{ margin: "0" }}>Earning</Typography>
            <Typography sx={{ margin: "0" }}>$198k</Typography>
            <div style={{ display: "flex" }}>
              <p>
                <ArrowUpwardIcon />
              </p>
              <p>37.8% this month</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "250px",
          height: "100px",
          backgroundColor: "white",
          marginLeft: "2px",
          marginRight: "8px",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <ListAltIcon
              sx={{ width: "100px", height: "60px", marginTop: "10px" }}
            />
          </div>
          <div>
            <Typography>Orders</Typography>
            <Typography>$2.4k</Typography>
            <div style={{ display: "flex" }}>
              <p>
                <ArrowDownwardIcon />
              </p>
              <p>2% this month</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "250px",
          height: "100px",
          backgroundColor: "white",
          marginLeft: "2px",
          marginRight: "8px",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <AccountBalanceWalletIcon
              sx={{ width: "100px", height: "60px", marginTop: "10px" }}
            />
          </div>
          <div>
            <Typography>Balance</Typography>
            <Typography>$2.4k</Typography>
            <div style={{ display: "flex" }}>
              <p>
                <ArrowDownwardIcon />
              </p>
              <p>2% this month</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "250px",
          height: "100px",
          backgroundColor: "white",
          marginLeft: "2px",
          marginRight: "8px",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <ShoppingBagIcon
              sx={{ width: "100px", height: "60px", marginTop: "10px" }}
            />
          </div>
          <div>
            <Typography>Total Sales</Typography>
            <Typography>$89k</Typography>
            <div style={{ display: "flex" }}>
              <p>
                <ArrowUpwardIcon />
              </p>
              <p>11% this week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;
