import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const data = await req.json();
  console.log(data);
  return new NextResponse(JSON.stringify("GET: " + data));
}
export async function POST(req: Request) {
  return new NextResponse(
    JSON.stringify({
      message: "Payment Cenceled",
    })
  );
}
