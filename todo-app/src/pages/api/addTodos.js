import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // console.log("data in api ", data);
    const client = await MongoClient.connect(
      "mongodb+srv://root:root@cluster0.odeptdc.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todosCollection = db.collection("todos");
    const result = await todosCollection.insertOne(data);
    console.log("api/addTodos", result);
    res.status(201).json({ message: "task inserted!", result });
    client.close();
  }
}
export default handler;
