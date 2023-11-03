import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export default async function getFeaturedPost() {
  const prisma = new PrismaClient();
  try {
    let result = await prisma.posts.findMany({
      where: { status: "Active", featured: "Active" },
      skip: 0,
      take: 5,
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json({ status: "fail", data: err });
  }
}
