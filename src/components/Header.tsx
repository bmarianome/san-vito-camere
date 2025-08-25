"use client";

import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Globe, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

export default function Header() {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigationLinks = [
    { href: "#hero", label: "Inicio" },
    { href: "#info", label: "Sobre el Lugar" },
    { href: "#gallery", label: "Galería" },
    { href: "#amenities", label: "Servicios" },
    { href: "#cta", label: "Contacto" },
  ];

  const languages = [
    { label: "Español" },
    { label: "English" },
    { label: "Italiano" },
  ];

  const LanguageSwitcher = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`rounded-full border hover:bg-white/20 ${scrolled ? "border-black/15 bg-white text-[#3f2561]" : "border-white/30 bg-white/10 text-white"}`}
        >
          <Globe className="mr-2" /> Español
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem key={language.label}>
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`backdrop-blur-md transition-colors ${scrolled ? "border-b border-black/10 bg-white shadow-sm" : "bg-transparent"}`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="#hero"
              className={`${scrolled ? "text-[#3f2561]" : "text-white"}`}
            >
              <span className="font-display text-2xl tracking-wider">
                B&B CENTRAL
              </span>
            </Link>

            {!isMobile && (
              <div className="flex items-center gap-8">
                <nav className="flex items-center gap-6 text-sm font-medium">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`transition-colors ${scrolled ? "text-[#3f2561] hover:text-[#3f2561]" : "text-white/90 hover:text-white"}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <LanguageSwitcher />
              </div>
            )}

            {isMobile && (
              <div className="flex items-center gap-2">
                <LanguageSwitcher />
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`rounded-full border ${scrolled ? "border-black/15 bg-white text-[#3f2561]" : "border-white/30 bg-white/10 text-white hover:bg-white/20"}`}
                    >
                      <Menu />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="border-l-white/10 bg-black/90 text-white"
                  >
                    <div className="mt-10 flex flex-col gap-6 text-lg">
                      {navigationLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
