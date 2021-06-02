const express = require('express');
const { run } = require("./connect");

const app = express();
app.use(require('cors')());
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
   res.send('Hello World!');
});

app.listen(port, async () => {
   console.log(`Example app listening at http://localhost:${port}`);
   await run().catch(console.dir);
});
