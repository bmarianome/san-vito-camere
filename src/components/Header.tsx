"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { Globe, Menu, Award, Heart, MapPin } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigationLinks = [
    { href: "#hero", label: "Inicio" },
    { href: "#info", label: "Sobre el Lugar" },
    { href: "#apartments", label: "Departamentos" },
    { href: "#services", label: "Servicios" },
    { href: "#cta", label: "Contacto" },
  ];

  const languages = [
    { label: "Español" },
    { label: "English" },
    { label: "Italiano" },
  ];

  const LanguageSwitcher = ({ className }: { className?: string }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "rounded-full border hover:bg-white/20",
            className,
            scrolled
              ? "border-black/15 bg-white text-[#3f2561]"
              : "border-white/30 bg-white/10 text-white",
          )}
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
        className={cn(
          "backdrop-blur-md transition-colors",
          scrolled
            ? "border-b border-black/10 bg-white shadow-sm"
            : "bg-transparent",
        )}
      >
        <Container className="flex items-center justify-between py-4 lg:py-5">
          <Link
            href="#hero"
            className={cn(scrolled ? "text-[#3f2561]" : "text-white")}
          >
            <span className="font-display text-2xl tracking-wider">
              B&B CENTRAL
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors",
                  scrolled
                    ? "text-[#3f2561] hover:text-[#3f2561]"
                    : "text-white/90 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <LanguageSwitcher className="hidden lg:flex" />

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "rounded-full border",
                    scrolled
                      ? "border-black/15 bg-white text-[#3f2561]"
                      : "border-white/30 bg-white/10 text-white hover:bg-white/20",
                  )}
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-l-none bg-black text-white"
              >
                <SheetTitle className="sr-only">Menu</SheetTitle>
                {/* Elementos decorativos de fondo */}
                <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#F59E0B]/20 to-transparent blur-3xl"></div>
                <div className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-gradient-to-tl from-[#6e4a8d]/20 to-transparent blur-3xl"></div>

                <div className="relative z-10 flex h-full flex-col">
                  {/* Header del menú */}
                  <div className="border-b border-white/10 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] p-2">
                          <Award className="size-5 text-white" />
                        </div>
                        <div>
                          <h2 className="font-display text-lg tracking-wider text-white">
                            B&B CENTRAL
                          </h2>
                          <p className="text-xs text-white/60">
                            San Vito Lo Capo
                          </p>
                        </div>
                      </div>
                      <SheetClose asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white/70 hover:bg-white/10 hover:text-white"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </Button>
                      </SheetClose>
                    </div>
                  </div>

                  {/* Navegación */}
                  <nav className="flex-1 p-6">
                    <div className="space-y-1">
                      {navigationLinks.map((link) => (
                        <SheetClose key={link.href} asChild>
                          <Link
                            href={link.href}
                            className="group flex items-center gap-2 py-3 text-lg text-white/90 transition-colors hover:text-white"
                          >
                            <div className="h-1 w-1 rounded-full bg-[#F59E0B] transition-all duration-300 group-hover:w-3"></div>
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </nav>

                  {/* Footer del menú */}
                  <div className="border-t border-white/10 p-6">
                    <div className="space-y-4">
                      {/* Información de contacto */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-white/90">
                          Información de Contacto
                        </h3>
                        <div className="space-y-2 text-sm text-white/70">
                          <div className="flex items-center gap-2">
                            <MapPin className="size-4 text-[#F59E0B]" />
                            <span>Via Peralta 10, San Vito Lo Capo</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Heart className="size-4 text-[#F59E0B]" />
                            <span>Disponible 24/7</span>
                          </div>
                        </div>
                      </div>

                      {/* Decorative separator */}
                      <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#F59E0B]/40"></div>
                          <div className="h-2 w-2 rounded-full bg-[#6e4a8d]/40"></div>
                          <div className="h-2 w-2 rounded-full bg-[#F59E0B]/40"></div>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
                      </div>

                      {/* CTA */}
                      <SheetClose asChild>
                        <Button
                          asChild
                          className="w-full rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                          <Link
                            href="#cta"
                            className="flex items-center justify-center gap-2"
                          >
                            <Heart className="size-4" />
                            Reserva Ahora
                          </Link>
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </div>
    </header>
  );
}
