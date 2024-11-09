// const mongoose = require("mongoose");
// async function connectoDB() {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://SalmaSanubar:Salma_549@salmacluster.y5azttk.mongodb.net/expenseTrackerUser"
//     );
//     console.log("DB is Connected Successfully");
//   } catch (error) {
//     console.error(error);
//   }
// }

// module.exports = connectoDB;


require('dotenv').config();  // Load environment variables from .env file
const mongoose = require("mongoose");

async function connectToDB() {
  try {
    const dbUri = process.env.MONGODB_URI;  // Use the connection string from the .env file

    if (!dbUri) {
      console.error("MongoDB URI not found in .env file.");
      return;
    }

    await mongoose.connect(dbUri);
    console.log("DB is Connected Successfully");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
}

module.exports = connectToDB;
