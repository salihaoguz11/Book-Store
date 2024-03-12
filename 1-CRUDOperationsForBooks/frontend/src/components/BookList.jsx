// import { Button } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import { useEffect, useState } from "react";

// import * as React from "react";
// import Box from "@mui/material/Box";
// import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// const BookList = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     author: "",
//     ISBN: "",
//     genre: "",
//     publicationYear: "",
//     image: "",
//   });
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);

//   const handleClose = () => setOpen(false);

//   const columns = [
//     {
//       field: "createdAt",
//       headerName: "Date",
//       minWidth: 40,
//       maxWidth: 70,
//       flex: 1,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "title",
//       headerName: "Title",
//       headerAlign: "center",
//       align: "center",
//       flex: 3,
//       minWidth: 150,
//     },
//     {
//       field: "author",
//       headerName: "Author",
//       minWidth: 150,
//       headerAlign: "center",
//       align: "center",
//       flex: 2,
//     },
//     {
//       field: "genre",
//       headerName: "Genre",
//       type: "number",
//       headerAlign: "center",
//       align: "center",
//       minWidth: 150,
//       flex: 2,
//     },

//     {
//       field: "ISBN",
//       headerName: "ISBN",
//       minWidth: 100,
//       headerAlign: "center",
//       align: "center",
//       flex: 0.7,
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       type: "number",
//       headerAlign: "center",
//       align: "center",
//       minWidth: 50,
//       flex: 1,
//       renderCell: ({ id }) => (
//         <GridActionsCellItem
//           icon={<DeleteForeverIcon />}
//           label="Delete"
//           //   sx={}
//           //   onClick={() => deleteStockData("products", id)}
//         />
//       ),
//     },
//   ];

//   return (
//     <div>
//       <Typography variant="h4" color="error" mb={3}>
//         Products
//       </Typography>

//       <Button variant="contained" onClick={handleOpen}>
//         New Product
//       </Button>
//       {/*
//       <ProductModal
//         open={open}
//         handleClose={handleClose}
//         info={info}
//         setInfo={setInfo}
//       /> */}

//       <Box sx={{ width: "100%", marginTop: "1rem" }}>
//         <DataGrid
//           autoHeight
//           //   rows={products}
//           columns={columns}
//           pageSize={10}
//           disableRowSelectionOnClick
//           slots={{ toolbar: GridToolbar }}
//           sx={{
//             boxShadow: 4,
//           }}
//         />
//       </Box>
//     </div>
//   );
// };

// export default BookList;
