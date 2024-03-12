import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useBookCalls from "../hooks/useBookCalls";

const BookForm = () => {
  const { createBooks } = useBookCalls();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    ISBN: "",
    genre: "",
    publicationYear: "",
    image: "",
  });

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
  };

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
      onSubmit={handleSubmit} // bind handleSubmit to onSubmit event
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
        value={formData.title}
        onChange={handleChange}
        type="text"
        variant="outlined"
        sx={{ width: "30%" }}
      />
      {/* other TextField components follow */}
      <Button type="submit" variant="contained">
        ADD A NEW BOOK
      </Button>
    </Box>
  );
};

export default BookForm;
