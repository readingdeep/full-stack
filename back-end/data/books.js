const { client } = require("../connect");
const { ObjectId } = require("mongodb");

const dbName = "deapRead";

let books = null;

client.connect().then((response) => {
    if (response.topology.s.state) {
      console.log("Status: " + response.topology.s.state);
      const db = client.db(dbName);
      books = db.collection("books");
    } else {
      console.log("Problem connecting to MongoDB");
    }
});

async function getAllBooks() {
    try {
        const booksArr = books.find({}).toArray();
        return booksArr;
    } catch (err) {
        console.log(err.stack);
    }
}
exports.getAllBooks = getAllBooks;

async function getBookById(bookId) {
  try {
    const book = await books.findOne({
        _id: ObjectId(bookId),
      });
    if (book) {
        return book;
    }
  } catch (err) {
      console.log(err.stack);
  }
}
exports.getBookById = getBookById;