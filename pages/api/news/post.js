import nextConnect from "next-connect";
import middleware from "../../../middleware/db";
const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  try {
    console.log("çalıştı news/post");
    let docPost = await req.db.collection("developments").insertOne({
      title: "abc",
      content: "def",
    });
    res.json(docPost);
  } catch (error) {
    console.log("error", error);
  }
});

export default handler;
