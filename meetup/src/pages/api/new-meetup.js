import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("data coming", data);
    const client = await MongoClient.connect(
      "mongodb+srv://root:root@cluster0.mu3ylzf.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    res.status(201).json({ message: "Meetup inserted!" });
    client.close();
  }
}
export default handler;
