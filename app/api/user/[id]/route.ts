import { NextResponse } from "next/server";

const userData = {
  id: "1",
  name: "shincode",
  description: "hello shincode",
};

export async function GET(request: Request) {
  return Response.json(userData);
}
