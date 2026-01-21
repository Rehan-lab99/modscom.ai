import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();

  const r = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer YOUR_HF_API_KEY`,
      },
      body: JSON.stringify({ inputs: prompt }),
    }
  );

  const buffer = await r.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");

  return NextResponse.json({ image: base64 });
}
