"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="bg-white min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-24 text-center px-6">
        <div className="max-w-md space-y-6">
          <p className="text-[#E40F14] text-[10px] uppercase tracking-[0.4em] font-light">
            Error 404
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-black leading-tight">
            Page Not Found
          </h1>
          <p className="text-black/50 font-light text-sm md:text-base leading-relaxed">
            The page you are looking for does not exist or has been moved to a new portfolio address.
          </p>
          <div className="pt-6">
            <Link
              href="/"
              className="inline-block bg-[#E40F14] text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-black transition-colors duration-500"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}



