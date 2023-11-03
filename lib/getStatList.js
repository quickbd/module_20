 

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export default async function getStatList() {
  const prisma = new PrismaClient();
  try {
    let result = await prisma.stat_lists.findFirst();

    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json({ status: "fail", data: err });
  }
}
