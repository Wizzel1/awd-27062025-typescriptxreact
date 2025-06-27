export type Book = {
  id: number;
  title: string;
  author: string;
  read: boolean;
};

export const initialBooks: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    read: false,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    read: false,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    read: false,
  },
];
