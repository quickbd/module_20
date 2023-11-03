import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

import { NextResponse } from "next/server";

export async function POST(req) {
  const _req = await req.json();

  console.log("_req => ", _req);
  const prisma = new PrismaClient();

  try {
    const { name, email, password } = _req;
    // check if user with email already exists
    const existingUser = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        { err: "Email already exists" },
        { status: 409 }
      );
    } else {
      const reqData = _req;

      //console.log(_req);

      reqData["password"] = await bcrypt.hash(_req.password, 10);

      let result = await prisma.users.create({
        data: reqData,
      });

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
