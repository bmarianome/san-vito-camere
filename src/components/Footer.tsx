import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#120a1f] via-[#1a0f2e] to-[#120a1f] text-white/80">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-gradient-to-br from-[#6e4a8d]/20 to-transparent blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-gradient-to-tl from-[#F59E0B]/10 to-transparent blur-3xl"></div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          {/* Main footer content */}
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
            {/* Brand section */}
            <div className="lg:max-w-sm lg:flex-shrink-0">
              <div className="mb-6">
                <h3 className="font-display mb-2 text-3xl text-white">
                  B&B CENTRAL
                </h3>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#f6a92a]"></div>
              </div>
              <p className="mb-6 text-sm leading-relaxed opacity-80">
                Donde el océano se encuentra con el lujo. Tu hogar perfecto en
                el corazón de San Vito Lo Capo.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-[#F59E0B]"></div>
                <span className="text-white/60">Experiencia Premium B2B</span>
              </div>
            </div>

            {/* Right section with navigation and contact */}
            <div className="lg:flex-shrink-0">
              <div className="grid gap-12 sm:grid-cols-2 lg:gap-16">
                {/* Navigation section */}
                <div>
                  <h4 className="mb-6 text-lg font-semibold text-white">
                    Explora
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="#hero"
                        className="group flex items-center gap-2 transition-colors hover:text-white"
                      >
                        <div className="h-1 w-1 rounded-full bg-[#F59E0B] transition-all duration-300 group-hover:w-3"></div>
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#info"
                        className="group flex items-center gap-2 transition-colors hover:text-white"
                      >
                        <div className="h-1 w-1 rounded-full bg-[#F59E0B] transition-all duration-300 group-hover:w-3"></div>
                        Sobre el Lugar
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#apartments"
                        className="group flex items-center gap-2 transition-colors hover:text-white"
                      >
                        <div className="h-1 w-1 rounded-full bg-[#F59E0B] transition-all duration-300 group-hover:w-3"></div>
                        Departamentos
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#services"
                        className="group flex items-center gap-2 transition-colors hover:text-white"
                      >
                        <div className="h-1 w-1 rounded-full bg-[#F59E0B] transition-all duration-300 group-hover:w-3"></div>
                        Servicios
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact section */}
                <div>
                  <h4 className="mb-6 text-lg font-semibold text-white">
                    Contacto
                  </h4>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-gradient-to-br from-[#F59E0B]/20 to-[#f6a92a]/20 p-2">
                        <Phone className="size-4 text-[#F59E0B]" />
                      </div>
                      <div>
                        <div className="font-medium text-white">Teléfono</div>
                        <div className="text-white/70">(+39) 329 068 9750</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-gradient-to-br from-[#F59E0B]/20 to-[#f6a92a]/20 p-2">
                        <Mail className="size-4 text-[#F59E0B]" />
                      </div>
                      <div>
                        <div className="font-medium text-white">Email</div>
                        <div className="text-white/70">
                          centralsanvito@gmail.com
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-gradient-to-br from-[#F59E0B]/20 to-[#f6a92a]/20 p-2">
                        <MapPin className="size-4 text-[#F59E0B]" />
                      </div>
                      <div>
                        <div className="font-medium text-white">Dirección</div>
                        <div className="text-white/70">
                          Via Peralta 10
                          <br />
                          San Vito Lo Capo, Italia
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 px-6 py-8">
          <p className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} B&B Central. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
