import { useState } from "react";
import "./App.css";
import BookItem from "./components/BookItem";
import NewBookForm from "./components/NewBookForm";
import { initialBooks, type Book } from "./models/book";

function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [filter, setFilter] = useState<"all" | "read" | "unread">("unread");

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

  const filteredBooks = books.filter((book) => {
    if (filter === "all") return true;
    if (filter === "read") return book.read;
    if (filter === "unread") return !book.read;
    return true;
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as "all" | "read" | "unread");
  };

  return (
    <>
      <h1>My Books</h1>
      <NewBookForm onAddBook={handleAddBook} />
      <div style={styles.filterContainer}>
        <label htmlFor="filter" style={styles.filterLabel}>
          Filter:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          style={styles.filterSelect}
        >
          <option value="all">All</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>
      </div>
      <ul style={styles.ul}>
        {filteredBooks.map((book) => (
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
  filterContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    justifyContent: "flex-end",
    padding: "0 24px",
    marginBottom: "20px",
  },
  filterLabel: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
  },
  filterSelect: {
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #555",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
