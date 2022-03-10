import React, { useEffect, useState } from "react";
import Book from "../book/Book";
import "./BookList.scss";
const BookList = ({ bookList }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(bookList);
  }, [bookList]);
  const handleDelete = (book) => () => {
    const updatedBooks = [...list].filter((bookI) => bookI.id !== book.id);
    setList(updatedBooks);
  };
  return (
    <div className="bookList">
      {list.map((book) => (
        <div className="bookItem" key={book.id}>
          <Book book={book} handleDelete={handleDelete(book)} />
          {/* <button onClick={() => handleOnClick(book)}>Xoa</button> */}
        </div>
      ))}
    </div>
  );
};

export default BookList;
