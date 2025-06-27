import { useState } from "react";

interface NewBookFormProps {
  onAddBook: (title: string, author: string) => void;
}

export default function NewBookForm({ onAddBook }: NewBookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Add
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    padding: "24px",
    background: "#232323",
    borderRadius: "12px",
    margin: "24px auto 32px auto",
    maxWidth: "600px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
  },
  input: {
    padding: "10px 14px",
    borderRadius: "6px",
    border: "1px solid #444",
    background: "#181818",
    color: "#fff",
    fontSize: "1rem",
    outline: "none",
    transition: "border 0.2s, box-shadow 0.2s",
    marginRight: 0,
  },
  button: {
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 28px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  },
};
