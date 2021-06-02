const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:admin@cluster0.tjdfj.mongodb.net/deapRead?retryWrites=true&w=majority";
const client = new MongoClient(url, { useUnifiedTopology: true });

exports.client = client;