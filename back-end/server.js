const express = require('express');
const booksRouter = require("./routes/books");

const app = express();
app.use(require('cors')());
app.use(express.json());

app.use("/books", booksRouter);

const port = 3001;

app.get('/', (req, res) => {
   res.send('Hello World!');
});

app.listen(port, async () => {
   console.log(`Example app listening at http://localhost:${port}`);
});
