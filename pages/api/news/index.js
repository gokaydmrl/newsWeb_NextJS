import nextConnect from "next-connect";
import middleware from "../../../middleware/db";
const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  try {
    //   console.log("req db", req.db);
    let doc = await req.db.collection("developments").find({}).toArray();
    //  console.log("doc", doc);
    res.json(doc);
  } catch (error) {
    console.log("error", error);
  }
});


export default handler;
