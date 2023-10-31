import User from "@/models/user";
import dbConnect from "@/utility/dbConnect";
import bcrypt from "bcrypt";

import { NextResponse } from "next/server";

export async function POST(req) {
  const _req = await req.json();

  console.log("_req => ", _req);
  await dbConnect();

  try {
    const { name, email, password, verification_token } = _req;
    // check if user with email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { err: "Email already exists" },
        { status: 409 }
      );
    } else {
      await new User({
        name,
        email,
        password: await bcrypt.hash(password, 10),
        verification_token,
      }).save();

      return NextResponse.json({
        success: "Registration successful",
      });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { err: "Server error. Try again" },
      { status: 500 }
    );
  }
}
