import axios from "axios";

const BaseUrl = `http://localhost:3001`;

export async function getBooks() {
    const response = await axios.get(`${BaseUrl}/books`);
    return response.data.books;
}

export async function getBookById(bookId) {
    const response = await axios.get(`${BaseUrl}/books/${bookId}`);
    return response.data.book;
}

export async function getParagraphsMood(paragraphs) {
    try {
        const response = await axios.post(`https://readingdeep-inference.herokuapp.com/`, paragraphs, {
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function searchBooks(query) {
    const response = await axios.post(`${BaseUrl}/books/search`, { query: query });
    return response.data.results;
}
