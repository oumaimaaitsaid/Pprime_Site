"use client"

import { useState } from "react"
import { Download, Loader2 } from "lucide-react"

export default function CreerSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [cvFile, setCvFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  // ÉTAPE 1: Ajout des nouveaux états pour l'envoi
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (validateFile(file)) {
        setCvFile(file)
      }
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (validateFile(file)) {
        setCvFile(file)
      }
    }
  }

  const validateFile = (file) => {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"]
    const maxSize = 2 * 1024 * 1024 // 2MB

    if (!allowedTypes.includes(file.type)) {
      // ÉTAPE 2: Remplacer alert par un message d'état
      setMessage({ type: "error", text: "Format non supporté. Utilisez PDF, JPG, JPEG ou PNG." })
      return false
    }

    if (file.size > maxSize) {
      setMessage({ type: "error", text: "Le fichier est trop volumineux. Maximum 2 Mo." })
      return false
    }

    setMessage({ type: "", text: "" })
    return true
  }

  // ÉTAPE 3: Modification de handleSubmit pour l'envoi réel
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ type: "", text: "" })

    try {
      // Création du FormData pour envoyer le fichier
      const submitFormData = new FormData()
      submitFormData.append("name", formData.name)
      submitFormData.append("email", formData.email)
      submitFormData.append("phone", formData.phone)
      if (cvFile) {
        submitFormData.append("cv", cvFile)
      }

      // Envoi vers notre API
      const response = await fetch("/api/submit-cv-simple", {
        method: "POST",
        body: submitFormData,
      })

      const result = await response.json()

      if (response.ok) {
        setMessage({ type: "success", text: "Votre candidature a été envoyée avec succès !" })
        // Reset du formulaire
        setFormData({ name: "", email: "", phone: "" })
        setCvFile(null)
      } else {
        setMessage({ type: "error", text: result.error || "Une erreur est survenue." })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Erreur de connexion. Veuillez réessayer." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen bg-white mt-35 mb-55 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Contenu à gauche - 1/3 */}
          <div className="lg:col-span-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Quel Est Le Meilleur Travail Pour Vous Chez PRIME ?
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Faites glisser et déposez votre CV dans le module ci-dessous ou choisissez vos propres filtres. Les offres
              d'emploi qui vous correspondent seront affichées. À vous pour maintenant !
            </p>
          </div>

          {/* Formulaire à droite - 2/3 */}
          <div className="lg:col-span-2">
            <div className=" p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* ÉTAPE 4: Ajout du message de statut */}
                {message.text && (
                  <div
                    className={`p-4 rounded-lg ${
                      message.type === "success"
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-red-100 text-red-700 border border-red-200"
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                {/* Nom */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 bg-[#F5F5F5] border border-gray-200  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700 placeholder-gray-500 disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre e-mail *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 bg-[#F5F5F5] border border-gray-200  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700 placeholder-gray-500 disabled:opacity-50"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Votre téléphone *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 bg-[#F5F5F5] border border-gray-200  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700 placeholder-gray-500 disabled:opacity-50"
                  />
                </div>

                {/* Zone de dépôt CV */}
                <div
                  className={`border-2 bg-[#F5F5F5] h-[400px] p-26 text-center transition-all cursor-pointer ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : dragActive
                        ? "border-blue-400 bg-blue-50"
                        : cvFile
                          ? "border-green-400 bg-green-50"
                          : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDragEnter={!isSubmitting ? handleDrag : undefined}
                  onDragLeave={!isSubmitting ? handleDrag : undefined}
                  onDragOver={!isSubmitting ? handleDrag : undefined}
                  onDrop={!isSubmitting ? handleDrop : undefined}
                  onClick={!isSubmitting ? () => document.getElementById("cv-upload").click() : undefined}
                >
                  <input
                    id="cv-upload"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    disabled={isSubmitting}
                    className="hidden"
                  />

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <Download className="w-12 h-12 text-gray-400" />
                    </div>

                    {cvFile ? (
                      <div>
                        <p className="text-green-600 font-medium mb-2">✓ Fichier sélectionné</p>
                        <p className="text-sm text-gray-600">{cvFile.name}</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-lg font-medium text-gray-500 mb-3">Glissez / déposez votre CV</p>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                          Le format PDF est préconisé (max 2 Mo). Les formats jpg/jpeg/png peuvent être utilisés.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bouton d'envoi */}
                <div className="pt-4 pl-135">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-slate-800 text-white py-4 px-8 rounded-full font-medium hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer un message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
