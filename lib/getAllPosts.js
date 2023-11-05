import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export default async function getAllPosts(id) {
  const prisma = new PrismaClient();
  try {
    let result = {};
    result = await prisma.posts.findMany({
      where: { status: "Active", post_category_id: id },
      orderBy: { order_by: "desc" },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "fail", data: err });
  }
}
