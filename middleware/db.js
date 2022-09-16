import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const { default: mongoose } = require("mongoose");

export const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  try {
    // console.log("cl", client);
    /* if (!client.isConnected()) await client.connect(); */
    req.dbClient = client;
    req.db = client.db("news");
    await client.connect();

    return next();
  } catch (error) {
    console.log("dber", error);
  }
}

const middleware = nextConnect();

middleware.use(database);

const db = client.db();

// db.collection("developments").insertOne({
//   title: "abc",
//   content: "zxcqwe",
// });

export default middleware;
