const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://istiakexcelitai:02116783@cluster0.qs9svkw.mongodb.net/pc-builder?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
    try {
      await client.connect();
  
      const productCollections = client.db("pc-builder").collection("products");
      if (req.method === "GET") {
        const result = await productCollections
          .aggregate([
            {
              $group: {
                _id: "$Category",
                categoryImg: { $first: "$Image" }, // Choose the first Status value within each group
                Price: { $first: "$Price" }, // Choose the first Price value within each group
              },
            },
            {
              $project: {
                _id: 0,
                Category: "$_id",
                categoryImg: 1,
                Price: 1,
              },
            },
          ])
          .toArray();
        res.send({
          message: "Success",
          status: 200,
          data: result,
        });
      }
      console.log("db connected successfully");
    } finally {
      // Close the database connection after the operation is complete
      await client.close();
    }
  }
  
export default run;
