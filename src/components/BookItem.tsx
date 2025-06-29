import type { Book } from "../models/book";

interface BookItemProps {
  book: Book;
  onDelete: () => void;
  toggleRead: () => void;
}

export default function BookItem({
  book,
  onDelete,
  toggleRead,
}: BookItemProps) {
  return (
    <li style={styles.li}>
      <div style={styles.bookInfo}>
        <span
          style={{
            ...styles.title,
            textDecoration: book.read ? "line-through" : "none",
          }}
        >
          {book.title}
        </span>
        <span
          style={{
            ...styles.author,
            textDecoration: book.read ? "line-through" : "none",
          }}
        >
          {book.author}
        </span>
      </div>
      <div style={styles.buttonGroup}>
        <button
          title={book.read ? "Mark as unread" : "Mark as read"}
          style={{
            ...styles.readButton,
            color: book.read ? "#f44336" : "#4caf50",
          }}
          onClick={toggleRead}
        >
          {book.read ? "✗" : "✓"}
        </button>
        <button style={styles.deleteButton} onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    padding: "24px",
    marginBottom: "14px",
    borderRadius: "10px",
  },
  bookInfo: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "4px",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "2px",
  },
  author: {
    fontSize: "0.95rem",
    color: "#b0b0b0",
    fontStyle: "italic",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  readButton: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    background: "#444",
    border: "none",
    borderRadius: "6px",
    padding: "6px 14px",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  },
  deleteButton: {
    background: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "6px 18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.2s",
  },
};
