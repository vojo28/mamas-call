import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { phone, profile, result } = body;

  // 🧠 CREATE SMART MESSAGE
  const message = `
Hi ${profile.name || "there"} 👋

Your Mama’s Call Baby Budget is ready.

Total: ₦${result.totalCost.toLocaleString()}
You may need: ₦${result.userNeeds.toLocaleString()}
Weekly plan: ₦${result.weeklySavings.toLocaleString()}

We’ll support you every step of the way 💚
`;

  // 🔥 For now → simulate sending
  console.log("SEND WHATSAPP TO:", phone);
  console.log("MESSAGE:", message);

  return NextResponse.json({
    success: true,
  });
}