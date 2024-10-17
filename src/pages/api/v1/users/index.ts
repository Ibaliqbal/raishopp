import { db } from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users = await db.query.UserTable.findMany();

  console.log(users);
  res.status(200).json({ name: "John Doe" });
}
