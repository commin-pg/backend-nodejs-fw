const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://khm0813:<password>@commin-pg-mongo.0uj4g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("connect.. ok")
  client.close();
});