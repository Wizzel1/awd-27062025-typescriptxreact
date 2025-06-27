import { useState } from "react";
import "./App.css";
import BookItem from "./components/BookItem";
import NewBookForm from "./components/NewBookForm";
import { initialBooks, type Book } from "./models/book";

function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const handleAddBook = (title: string, author: string) => {
    setBooks((current) => {
      return [
        ...current,
        { id: current.length + 1, title, author, read: false },
      ];
    });
  };

  const handleDeleteBook = (id: number) => {
    setBooks((current) => {
      return current.filter((b) => b.id !== id);
    });
  };

  const handleReadBookToggle = (id: number) => {
    setBooks((current) => {
      return current.map((b) => (b.id === id ? { ...b, read: !b.read } : b));
    });
  };

  return (
    <>
      <h1>My Books</h1>
      <NewBookForm onAddBook={handleAddBook} />
      <ul style={styles.ul}>
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            onDelete={() => handleDeleteBook(book.id)}
            toggleRead={() => handleReadBookToggle(book.id)}
          />
        ))}
      </ul>
    </>
  );
}

export default App;

const styles = {
  ul: {
    listStyle: "none",
    padding: 0,
  },
};
