import Quote from "./models/Quote";
import fs from "fs";
import mongoose from "mongoose";
import appConfig from "./app.config";

mongoose.connect(appConfig.databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getImportData = (filePath: string) => {
  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    return data;
  } catch (error) {
    console.log("Problem parsing file: ", error);
    process.exit();
  }
};

const filePath = process.argv[2];

if (!filePath) {
  throw new Error("Please provide a file path to import.");
}

const quotes = getImportData(filePath);
const writes = quotes.map(
  ({ author, text }: { author: string; text: string }) => ({
    updateOne: {
      filter: { author, text },
      update: { author, text },
      upsert: true,
    },
  })
);

(async () => {
  try {
    const result = await Quote.bulkWrite(writes);
    console.log(
      "Quotes imported.",
      result.insertedCount,
      result.modifiedCount,
      result.deletedCount
    );
  } catch (error) {
    console.log("Quotes Not Imported");
    console.log(error);
  }
  mongoose.disconnect();
})();
