"use client"

import Link from "next/link"
import NextImage from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "linear-gradient(to bottom, white 20%, #B0C6CE 20%, #B0C6CE 100%)",
      }}
    >
      {/* Newsletter Section */}
      <div className="py-25 px-6 md:py-8">
        <div className="bg-[#0a2533] text-white py-8 px-6 max-w-[1220px] mx-auto rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Abonnez-Vous À<br />
                La Newsletter
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email addresse"
                className="bg-white text-gray-800 rounded-full px-6 py-3 min-w-[300px] placeholder-gray-500"
              />
              <button className="bg-white text-[#0a2533] hover:bg-gray-100 rounded-full px-6 py-3 font-medium whitespace-nowrap">
                Découvrez pprime
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1220px] mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <Link href="/" className="flex items-center mb-4">
            <NextImage
              src="/images/logo_pprime.svg"
              alt="Pprime Logo"
              width={40}
              height={32}
              className="object-contain"
            />
          </Link>
          <p className="text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[#042433]">Navigation</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-[#3da5d9] hover:text-[#2c8bb3] transition-colors flex items-center gap-2">
                • Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/a-propos"
                className="text-[#3da5d9] hover:text-[#2c8bb3] transition-colors flex items-center gap-2"
              >
                • Histoire Et Vision
              </Link>
            </li>
            <li>
              <Link
                href="/offres"
                className="text-[#3da5d9] hover:text-[#2c8bb3] transition-colors flex items-center gap-2"
              >
                • Offres
              </Link>
            </li>
            <li>
              <Link
                href="/secteurs-activite"
                className="text-[#3da5d9] hover:text-[#2c8bb3] transition-colors flex items-center gap-2"
              >
                • Secteurs d'activité
              </Link>
            </li>
            <li>
              <Link
                href="/nous-rejoindre"
                className="text-[#3da5d9] hover:text-[#2c8bb3] transition-colors flex items-center gap-2"
              >
                • Nous rejoindre
              </Link>
            </li>
          </ul>
        </div>

        {/* Secteurs D'activité */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[#042433]">Secteurs D'activité</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-[#3da5d9] hover:text-[#2c8bb3] transition-colors flex items-center gap-2">
                • Agriculture & Agroalimentaire
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#3da5d9] hover:text-[#2c8bb3] transition-colors flex items-center gap-2">
                • Infrastructures & Industrie
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#3da5d9] hover:text-[#2c8bb3] transition-colors flex items-center gap-2">
                • Tourisme & Santé
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#3da5d9] hover:text-[#2c8bb3] transition-colors flex items-center gap-2">
                • Green Tech
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[#042433]">Contactez-nous</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-gray-700 mt-0.5" />
              <span className="text-gray-700">+212 5 28 83 20 15</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-gray-700 mt-0.5" />
              <span className="text-gray-700">contact@pprime.ma</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gray-700 mt-0.5" />
              <span className="text-gray-700">Galeries Marmouria, Av Hassan Bourqamani, Cité Dakhla – Agadir</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div className="border-t border-gray-400 py-6 px-6">
        <div className="max-w-[1220px] mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-700">Copyright Pprime 2025. All rights reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" aria-label="LinkedIn" className="text-gray-700 hover:text-[#0a2533] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram" className="text-gray-700 hover:text-[#0a2533] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-700 hover:text-[#0a2533] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" aria-label="Facebook" className="text-gray-700 hover:text-[#0a2533] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
