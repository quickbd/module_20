import User from "@/models/user";
import dbConnect from "@/utility/dbConnect";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  try {
    const verification_token = searchParams.get("verification_token");
    const opts = { new: true, upsert: true };
    const update = { verification_status: "Active" };
    const filter = { verification_token: verification_token };
    let dbUser = await User.findOneAndUpdate(filter, update);
    //dbUser.update({ verification_status: "Active" });
    return NextResponse.json(dbUser);
  } catch (err) {
    console.log(err);

    return NextResponse.json({ msg: "err" });
  }
}
