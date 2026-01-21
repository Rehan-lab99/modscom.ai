import formidable from "formidable";
import { NextResponse } from "next/server";
import fs from "fs";

export const config = {
  api: { bodyParser: false }
};

export async function POST(req) {
  const form = formidable();

  return new Promise((resolve) => {
    form.parse(req, async (err, fields, files) => {
      const mensaje = fields.mensaje || "";

      // CREATOR PROTECTION
      if (
        mensaje.toLowerCase().includes("creator") ||
        mensaje.toLowerCase().includes("kisne") ||
        mensaje.toLowerCase().includes("kiska")
      ) {
        resolve(NextResponse.json({
          response: "Mera naam MODSCOM BOT hai — mujhe MODSCOM ne banaya hai."
        }));
        return;
      }

      const api = await fetch(
        `https://rajan-notegpt-ai.vercel.app/api/chat?mensaje=${encodeURIComponent(mensaje)}`
      );

      const data = await api.json();

      resolve(NextResponse.json({ response: data.response }));
    });
  });
}
