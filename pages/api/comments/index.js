import nextConnect from "next-connect";
import middleware from "../../../middleware/db";
const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  try {
    //   console.log("req db", req.db);
    let docOp = await req.db.collection("opinions").find({}).toArray();
    //  console.log("doc", doc);
    res.json(docOp);
  } catch (error) {
    console.log("error", error);
  }
});

export default handler;
