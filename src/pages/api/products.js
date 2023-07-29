import connectDB from "@/helpers/db.helper";

export default async function handler(req, res) {
  await connectDB();
  res.status(200).json({ message: "Hello World!" });
}
