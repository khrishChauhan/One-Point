import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export function CTA({
  title = "Design Your Space",
  description = "Ready to bring luxury architectural planning and interior expertise to your residential or commercial space? Partner with Lucknow's premier architecture firm.",
  buttonText = "Schedule Consultation",
  buttonHref = "/contact",
  className,
}: CTAProps) {
  return (
    <div className={cn("bg-brand-red text-white py-20 md:py-28", className)}>
      <Container className="flex flex-col items-center text-center">
        <Heading 
          variant="title" 
          className="text-white mb-6 max-w-4xl font-normal"
        >
          {title}
        </Heading>
        <p className="font-sans font-light text-brand-alabaster/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          {description}
        </p>
        <Button 
          variant="outline" 
          size="lg" 
          className="border-white text-white hover:bg-white hover:text-brand-red hover:border-white"
        >
          <Link href={buttonHref}>
            {buttonText}
          </Link>
        </Button>
      </Container>
    </div>
  );
}
