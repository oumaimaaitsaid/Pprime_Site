import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const cvFile = formData.get("cv") as File | null

    // Log des variables d'environnement
    console.log("SMTP_HOST:", process.env.SMTP_HOST)
    console.log("SMTP_PORT:", process.env.SMTP_PORT)

    // CORRECTION: createTransport au lieu de createTransporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Préparation de la pièce jointe si CV présent
    const attachments = []
    if (cvFile) {
      const buffer = Buffer.from(await cvFile.arrayBuffer())
      attachments.push({
        filename: cvFile.name,
        content: buffer,
      })
    }

    // Contenu de l'email
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.EMAIL_TO,
      subject: `Nouvelle candidature - ${name}`,
      html: `
        <h2>Nouvelle candidature reçue</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        ${cvFile ? `<p><strong>CV:</strong> Voir pièce jointe</p>` : "<p><em>Aucun CV joint</em></p>"}
        <p><em>Candidature reçue le ${new Date().toLocaleString("fr-FR")}</em></p>
      `,
      attachments: attachments,
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Candidature envoyée avec succès !" })
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error)
    return NextResponse.json({ error: "Erreur lors de l'envoi de la candidature" }, { status: 500 })
  }
}
