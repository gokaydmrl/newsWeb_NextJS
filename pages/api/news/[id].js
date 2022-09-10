import nextConnect from "next-connect";
import middleware from "../../../middleware/db";
const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const { id } = req.query;
  console.log("reqqur", req.query);
  console.log("id", id);
  try {
    const newsItem = await req.db
      .collection("developments")
      .find({
        _id: id,
      }) /*title: lebanon yazınca çalıştı, idyi çözemedim  */
      .toArray();
    res.json(newsItem);
    console.log("nwsitm", newsItem);
  } catch (error) {
    console.log("error by id", error);
  }
});

export default handler;
