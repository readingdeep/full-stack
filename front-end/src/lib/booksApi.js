import axios from "axios";

const BaseUrl = `http://localhost:3000`;

export async function getBooks() {
    const response = await axios.get(`${BaseUrl}/books`);
    return response.data.books;
}

export async function getBookById(bookId) {
    const response = await axios.get(`${BaseUrl}/books/${bookId}`);
    return response.data.book;
}
