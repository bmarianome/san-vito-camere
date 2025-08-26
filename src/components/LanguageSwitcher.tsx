"use client";

import { cn } from "@/lib/utils";
import { i18n } from "../../i18n.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  className?: string;
  scrolled?: boolean;
}

export default function LanguageSwitcher({ className, scrolled = false }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const getCurrentLocale = (): Locale => {
    if (!pathname) return i18n.defaultLocale as Locale;
    const segments = pathname.split("/");
    const localeFromPath = segments[1] as Locale;
    return i18n.locales.includes(localeFromPath) ? localeFromPath : (i18n.defaultLocale as Locale);
  };

  const currentLocale = getCurrentLocale();

  const texts = {
    current: {
      en: "English",
      de: "Deutsch",
      it: "Italiano",
      sk: "Slovenčina",
    },
    available: [
      { code: "en", label: "English" },
      { code: "de", label: "Deutsch" },
      { code: "it", label: "Italiano" },
      { code: "sk", label: "Slovenčina" },
    ],
  };

  return (
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
          <Globe className="mr-2" /> {texts.current[currentLocale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {texts.available.map((language) => (
          <DropdownMenuItem key={language.code} asChild>
            <Link
              href={redirectedPathName(language.code)}
              scroll={false}
              className={cn(
                "w-full cursor-pointer",
                currentLocale === language.code && "bg-accent"
              )}
            >
              {language.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
