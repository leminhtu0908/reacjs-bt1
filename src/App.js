import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/BookList/BookList";

function App() {
  const axios = require("axios");
  const [bookList, setBookList] = useState([]);

  // Make a request for a user with a given ID
  useEffect(() => {
    axios
      .get("https://62145e4789fad53b1f11c131.mockapi.io/book")
      .then(function (res) {
        setBookList(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className="App">
      <Typography sx={{ margin: "20px", fontSize: "20px", fontWeight: "bold" }}>
        GET API
      </Typography>
      <BookList bookList={bookList} />;
    </div>
  );
}

export default App;
