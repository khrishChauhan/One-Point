import React from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { CTA } from "@/components/shared/CTA";
import { ContactForm } from "@/components/shared/ContactForm";

export default function Home() {
  // Use actual high-resolution project images from the assets folder
  const heroImage = "/assets/drive-download-20260605T132810Z-3-001/IMG_20201109_162908_1.jpg";
  const projectImage1 = "/assets/drive-download-20260605T132810Z-3-001/IMG_20201109_162511.jpg";
  const projectImage2 = "/assets/drive-download-20260605T132810Z-3-001/IMG_20201109_163444.jpg";

  return (
    <>
      <Header />

      <main className="flex-1 bg-brand-alabaster">
        {/* Cinematic Hero Section */}
        <div className="relative h-[80vh] min-h-[600px] w-full bg-brand-charcoal overflow-hidden">
          <Image
            src={heroImage}
            alt="One Point Architecture Studio Hero"
            fill
            priority
            className="object-cover opacity-60 filter contrast-110 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-brand-charcoal/40" />
          
          <div className="absolute inset-0 flex items-center">
            <Container>
              <div className="max-w-4xl space-y-6">
                <Heading variant="meta" className="text-brand-gold">
                  Lucknow-Based Luxury Studio
                </Heading>
                <Heading variant="hero" className="text-white font-normal">
                  Enduring Form.<br />Meticulous Space.
                </Heading>
                <p className="font-sans font-light text-brand-alabaster/80 text-lg md:text-xl max-w-xl leading-relaxed pt-2">
                  A high-end architectural and luxury interior design practice led by Ar. Neha Vaish.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button variant="default">
                    Explore Portfolio
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-red">
                    Our Philosophy
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </div>

        {/* Foundation Showcase */}
        <Section size="lg">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column: Architectural Philosophy */}
              <div className="lg:col-span-5 space-y-8">
                <Heading variant="meta">Design System Showcase</Heading>
                <Heading variant="section" className="text-brand-red">
                  The Foundations of Our Practice
                </Heading>
                <p className="font-sans font-light text-brand-charcoal/80 text-base leading-relaxed">
                  The design system is structured around the **60-30-10 Rule**—60% Alabaster White backgrounds, 30% Deep Architectural Red structural accents, and 10% Luxury Champagne Gold details. The typography pairs the heritage and grace of *Playfair Display* headings with the technical precision of *Inter*.
                </p>
                <div className="border-t border-brand-gold/20 pt-8 space-y-6">
                  <Heading variant="meta" className="text-brand-charcoal">Typography Scale Preview</Heading>
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] text-brand-stone font-mono block mb-1">Display.Title</span>
                      <Heading variant="title" className="text-brand-red text-4xl sm:text-5xl">Luxury Living</Heading>
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-stone font-mono block mb-1">Heading.Section</span>
                      <Heading variant="section">Contemporary Facade</Heading>
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-stone font-mono block mb-1">Heading.Card</span>
                      <Heading variant="card">Structural Geometry</Heading>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Component Catalog Preview */}
              <div className="lg:col-span-7 space-y-12">
                <Heading variant="meta" className="text-brand-charcoal">Component Catalog Preview</Heading>
                
                {/* Project Card Demos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <span className="text-[10px] text-brand-stone font-mono block mb-2">ProjectCard (Portrait)</span>
                    <ProjectCard
                      title="Hazratganj Villa"
                      category="Residential Architecture"
                      imageSrc={projectImage1}
                      href="#"
                      ratio="portrait"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-stone font-mono block mb-2">ProjectCard (Landscape)</span>
                    <ProjectCard
                      title="Gomti Nagar Corporate"
                      category="Commercial Interior"
                      imageSrc={projectImage2}
                      href="#"
                      ratio="landscape"
                    />
                  </div>
                </div>

                {/* Buttons Preview */}
                <div className="space-y-4 pt-6 border-t border-brand-gold/20">
                  <span className="text-[10px] text-brand-stone font-mono block mb-2">Interactive Button States</span>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default">Primary CTA</Button>
                    <Button variant="outline">Outline Highlight</Button>
                    <Button variant="secondary">Dark Neutral</Button>
                    <Button variant="ghost">Ghost link</Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Call To Action */}
        <CTA />

        {/* Contact Form Section */}
        <Section size="lg" className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5 space-y-6">
                <Heading variant="meta">Let&apos;s Collaborate</Heading>
                <Heading variant="section" className="text-brand-red font-medium">
                  Discuss Your Architectural Commission
                </Heading>
                <p className="font-sans font-light text-brand-stone text-base leading-relaxed">
                  Lucknow-based luxury studio ready to accept inquiries for residential planning, boutique commercial workspaces, and high-end turnkey interiors. Contact us to schedule an initial consultation.
                </p>
                <div className="space-y-4 pt-6 text-sm">
                  <p className="font-sans text-brand-charcoal">
                    <strong className="font-semibold text-brand-red">Studio Address:</strong> Lucknow, Uttar Pradesh, India
                  </p>
                  <p className="font-sans text-brand-charcoal">
                    <strong className="font-semibold text-brand-red">Inquiries:</strong> info@onepoint.com
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
