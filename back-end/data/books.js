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

async function updateBookPictureUrl(bookId, pictureUrl) {
  try {
    const book = await books.updateOne({
        _id: ObjectId(bookId),
      },
      { $set: { pic: pictureUrl } });
  } catch (err) {
      console.log(err.stack);
  }
}
exports.updateBookPictureUrl = updateBookPictureUrl;
// function updatePetPictureUrl(petId, pictureUrl) {
//     const sql = SQL`UPDATE pets SET profile_pic = ${pictureUrl} WHERE id = ${petId}`;
//     return query(sql);
// }
// exports.updatePetPictureUrl = updatePetPictureUrl;

async function getSearchResults(query) {
    try {
        const booksArr = await books.find( { $or: [ { title: { $regex: query, $options: "i"} }, { author: { $regex: query, $options: "i"} } ] } ).toArray();
        return booksArr;
    } catch (err) {
        console.log(err.stack);
    }
}
exports.getSearchResults = getSearchResults;
