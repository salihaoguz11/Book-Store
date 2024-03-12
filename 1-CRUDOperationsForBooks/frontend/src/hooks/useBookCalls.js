// useBookCalls.js

import { useState, useEffect } from "react";
import axios from "axios";

const useBookCalls = () => {
  const baseURL = "http://localhost:8000";

  const getBooks = async () => {
    try {
      const response = await axios.get(baseURL);
      console.log(response);
      return response?.data;
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  };

  const createBook = async (formData) => {
    try {
      const response = await axios.post(baseURL, formData);
      return response.data;
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    }
  };

  return { getBooks, createBook };
};

export default useBookCalls;
