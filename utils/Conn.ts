import mongoose from "mongoose";

export const mongoClient = async():Promise<void>=>{
    try {
        // Connect to the MongoDB cluster
        mongoose.connect(
          process.env.MONGO_URI || "",
        ).then(()=>{
            console.log("CONNECTED TO MONGODB")
        })
      } catch (e) {
        console.log("Failed To Connect",e);
      }
}