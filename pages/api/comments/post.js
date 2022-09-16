import nextConnect from "next-connect";
import middleware from "../../../middleware/db";
const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const { fullName, opinion, categoryID } = JSON.parse(req.body);
  console.log("req.body", req.body);
  console.log("api fullname", fullName);
  console.log("api op", opinion);
  try {
    //   console.log("req db", req.db);
    let docPost = await req.db.collection("opinions").insertOne({
      fullName: fullName,
      opinion: opinion,
      categoryID: categoryID,
    });
    //  console.log("doc", doc);
    res.json(docPost);
  } catch (error) {
    console.log("error", error);
  }
});

export default handler;
