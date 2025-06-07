import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const cvFile = formData.get("cv") as File | null

    // Validation des données
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

 
}
