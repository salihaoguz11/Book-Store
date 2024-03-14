import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import useBookCalls from "../hooks/useBookCalls";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import BookForm from "./BookForm";
import EditBookForm from "./EditBookForm";

const BookList = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    ISBN: "",
    genre: "",
    publicationYear: "",
    image: "",
  });
  // const { getBooks } = useBookCalls();

  useEffect(() => {
    getBooks();
  }, []);

  const baseURL = "http://localhost:8000";
  const getBooks = async () => {
    try {
      const response = await axios.get(baseURL);
      console.log(response);
      setFormData(response.data.result.rows);
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  };
  //   const [books, setBooks] = useState([]);

  //   const fetchBooks = async () => {
  //     try {
  //       const fetchedBooks = await getBooks();
  //       setBooks(fetchedBooks);
  //     } catch (error) {
  //       console.error("Error fetching books:", error);
  //     }
  //   };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleEdit = (book) => {
    navigate(`/edit/${book.id}`, { state: { formData: book } });
  };

  const handleDelete = (id) => {
    // Handle delete operation
  };
  // const getRowId = (row) => row.id;

  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      minWidth: 40,
      maxWidth: 70,
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) =>
        new Date(row.createdAt).toLocaleDateString("uk-UK"),
    },
    {
      field: "title",
      headerName: "Title",
      headerAlign: "center",
      align: "center",
      flex: 3,
      minWidth: 150,
    },
    {
      field: "author",
      headerName: "Author",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "genre",
      headerName: "Genre",
      type: "number",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      flex: 2,
    },

    {
      field: "ISBN",
      headerName: "ISBN",
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      flex: 0.7,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "number",
      headerAlign: "center",
      align: "center",
      minWidth: 50,
      flex: 1,
      renderCell: ({ row }) => (
        <>
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            sx={{ color: "yellow" }}
            onClick={() => handleEdit(row)}
          />

          <GridActionsCellItem
            icon={<DeleteForeverIcon />}
            label="Delete"
            sx={{ color: "red" }}
            onClick={() => handleDelete(row)}
          />
        </>
      ),
    },
  ];

  return (
    <div>
      {/* <Typography variant="h4" color="error" mb={3}>
          Books
        </Typography>

        <Button variant="contained" onClick={handleOpen}>
          Add A New Book
        </Button> */}

      <Button
        type="submit"
        variant="contained"
        sx={{ alignItems: "flex-start" }}
        onClick={() => navigate("/new")}
      >
        ADD A NEW BOOK
      </Button>

      <Box sx={{ width: "100%", marginTop: "1rem" }}>
        <DataGrid
          autoHeight
          rows={formData}
          columns={columns}
          pageSize={10}
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          sx={{
            boxShadow: 4,
          }}
        />
      </Box>
    </div>
  );
};

export default BookList;
