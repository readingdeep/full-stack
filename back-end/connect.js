const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:admin@cluster0.tjdfj.mongodb.net/deapRead?retryWrites=true&w=majority";
const client = new MongoClient(url, { useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

exports.run = run;