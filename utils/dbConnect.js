import mongoose from "mongoose";
const MONGO = process.env.NEXT_PUBLIC_MONGO;
const connection = {};
async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
}
export default dbConnect;
