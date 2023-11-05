import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export default async function getPostCategory() {
  const prisma = new PrismaClient();
  try {
    let result = {};
    result = await prisma.post_categories.findMany({
      where: { status: "Active" },
      orderBy: { order_by: "desc" },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "fail", data: err });
  }
}
