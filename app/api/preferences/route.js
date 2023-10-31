import { NextResponse } from "next/server";

export async function GET() {
  const responseData = {
    message: "Welcome to our API!",
    version: "1.0",
  };
  return NextResponse.json(responseData);
}
