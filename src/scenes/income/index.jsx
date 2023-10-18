import React from 'react';
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {mockTransactions } from "../../data/mockData";

const Income = () => {
    const columns = [
        { field: "id", headerName: "ID" },
        {
          field: "user",
          headerName: "User",
    
          cellClassName: "name-column--cell",
        },
        {
          field: "date",
          headerName: "Date",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "cost",
          headerName: "Cost",
        },
       
      ];
  return (
    <Box m="20px">
      <Box m="5px 0 0 0" height="75vh" width="100%">
        <DataGrid  rows={mockTransactions} columns={columns} />
      </Box>
    </Box>
  )
}

export default Income;