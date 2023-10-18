import React, { useState } from "react";
import { mockIncome } from "../data/mockData";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Typography,
} from "@mui/material";
import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Sale = () => {
  const [filter, setFilter] = useState("");

  // Filter data based on the filter input
  const filteredData = mockIncome.filter((item) =>
    item.productName.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <TableContainer component={Paper}>
        <div style={{ display: "flex"}}>
          <Typography variant="h4" sx={{ml:"5px"}}>Product sell</Typography>
          <Box
            display="flex"
            backgroundColor="white"
            height="22px"
            borderRadius="3px"
            margin="auto 1px auto 220px"
          >
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="Search" />
          </Box>

          <Typography variant="h6">Last 30 days</Typography>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>
                  <img src={item.image} alt={item.productName} />
                </TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.totalSales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Sale;
