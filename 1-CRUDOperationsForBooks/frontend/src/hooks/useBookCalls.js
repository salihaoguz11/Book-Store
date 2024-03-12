import axios from "axios";

const baseURL = "http://localhost:8000";

export const getBooks = async () => {
  try {
    const response = await axios.get(`${baseURL}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching books:", error);
    throw error;
  }
};

export const createBook = async (bookData) => {
  try {
    const response = await axios.post(`${baseURL}`, bookData);
    return response.data;
  } catch (error) {
    console.log("Error creating book:", error);
    throw error;
  }
};
