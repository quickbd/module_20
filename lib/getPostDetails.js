import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export default async function getPostDetails(post_slug) {
  const prisma = new PrismaClient();
  try {
    let result = await prisma.posts.findFirst({
      include: {
        post_categories: {
          select: {
            slug: true,
          },
        },
      },
      where: { status: "Active", slug: post_slug },
      orderBy: { order_by: "desc" },
    });

    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json({ status: "fail", data: err });
  }
}
