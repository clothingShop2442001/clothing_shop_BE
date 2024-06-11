const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://nhathoang2442001:x2aAct5SzL4EGBJk@nhathoang244.ekjagld.mongodb.net/?retryWrites=true&w=majority&appName=nhathoang244";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (er) {
    console.log("errrr ===>", er);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
module.exports = run;
// run().catch(console.dir);
