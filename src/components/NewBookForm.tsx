import { useState } from "react";

interface NewBookFormProps {
  onAddBook: (title: string, author: string) => void;
}

export default function NewBookForm({ onAddBook }: NewBookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [showError, setShowError] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === "" || author.trim() === "") {
      setShowError(true);
      return;
    }
    onAddBook(title, author);
    setTitle("");
    setAuthor("");
    setShowError(false);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>
          {showError && title.trim() === "" ? "Please enter title" : ""}
        </label>
      </div>

      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>
          {showError && author.trim() === "" ? "Please enter author" : ""}
        </label>
      </div>

      <button type="submit" style={styles.button}>
        Add
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    padding: "24px",
    borderRadius: "12px",
    margin: "24px auto 32px auto",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column" as const,
  },
  input: {
    padding: "10px 14px",
    borderRadius: "6px",
    border: "1px solid #444",
    background: "#181818",
    fontSize: "1rem",
    outline: "none",
  },
  label: {
    color: "#ff6666",
    fontSize: "0.875rem",
    marginLeft: "4px",
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
