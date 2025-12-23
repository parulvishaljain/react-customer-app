import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { getCustomers } from "../service/customerService";
import type { Customer } from "../model/customer";



export const About: React.FC = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCustomers()
      .then(data => setRows(data))
      .catch(error => console.error("Error fetching customers", error))
      .finally(() => setLoading(false));
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  // Sample customer data
//   const rows: Customer[] = [
//     { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890", city: "New York" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876543210", city: "Los Angeles" },
//     { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "5555555555", city: "Chicago" },
//     { id: 4, name: "Alice Williams", email: "alice@example.com", phone: "1112223333", city: "Houston" },
//   ];

  // Define columns
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "city", headerName: "City", width: 150 },
  ];

  return (
    <Grid container spacing={2} style={{ padding: "2rem" }}>
     
      
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
        />
    
      <Grid>
        <Button variant="contained" color="primary" onClick={goBack}>
          Go Back
        </Button>
      </Grid>
    </Grid>
  );
};


