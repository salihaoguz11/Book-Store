import { Box, Button, TextField, Typography } from "@mui/material";

import { useState, useEffect } from "react";
import useBookCalls from "../hooks/useBookCalls";

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    ISBN: "",
    genre: "",
    publicationYear: "",
    image: "",
  });

  const { getBooks, createBooks } = useBookCalls();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBooks("/", formData);
    setFormData({
      title: "",
      author: "",
      ISBN: "",
      genre: "",
      publicationYear: "",
      image: "",
    });

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 3,
        }}
        component="form"
        width="100%"
      >
        <Typography
          variant="h5"
          align="left"
          sx={{ fontWeight: 900, marginTop: "1.5rem" }}
        >
          New Book
        </Typography>
        <TextField
          label="Title"
          name="title"
          id="title"
          type="text"
          variant="outlined"
          sx={{ width: "30%" }}
        />
        <TextField
          label="Author"
          name="author"
          id="author"
          type="text"
          variant="outlined"
          sx={{ width: "30%" }}
        />
        <TextField
          label="ISBN"
          name="ISBN"
          id="ISBN"
          type="text"
          variant="outlined"
          sx={{ width: "30%" }}
        />
        <TextField
          label="Genre"
          name="genre"
          id="genre"
          type="text"
          variant="outlined"
          sx={{ width: "30%" }}
        />
        <TextField
          label="Publish Year"
          name="publicationYear"
          id="publicationYear"
          type="text"
          variant="outlined"
          sx={{ width: "30%" }}
        />
        <TextField
          label="Image"
          name="image"
          id="image"
          type="text"
          variant="outlined"
          sx={{ width: "30%" }}
        />
        <Button type="submit" variant="contained">
          ADD A NEW BOOK
        </Button>
      </Box>
    );
  };
};

export default BookForm;
