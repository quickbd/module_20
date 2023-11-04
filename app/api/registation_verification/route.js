import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  const prisma = new PrismaClient();
  const { searchParams } = new URL(req.url);
  try {
    const verification_token = searchParams.get("verification_token");
    const opts = { new: true, upsert: true };
    const updateData = { verification_status: "Active" };
    const filter = { verification_token: verification_token };

    const user = await prisma.users.update({
      where: filter,
      data: updateData,
    });

    //dbUser.update({ verification_status: "Active" });
    return NextResponse.json(dbUser);
  } catch (err) {
    console.log(err);

    return NextResponse.json({ msg: "err" });
  }
}
