import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#120a1f] text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl text-white">B&B CENTRAL</h3>
          <p className="mt-3 text-sm opacity-80">Donde el océano se encuentra con el lujo.</p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-white">Explora</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#hero" className="hover:text-white">Inicio</Link></li>
            <li><Link href="#info1" className="hover:text-white">Sobre el Lugar</Link></li>
            <li><Link href="#gallery" className="hover:text-white">Galería</Link></li>
            <li><Link href="#amenities" className="hover:text-white">Servicios</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-white">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Términos y Condiciones</Link></li>
            <li><Link href="#" className="hover:text-white">Política de Privacidad</Link></li>
            <li><Link href="#" className="hover:text-white">Cookies</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-white">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="size-4" />(+34) 600 000 000</li>
            <li className="flex items-center gap-2"><Mail className="size-4" />reservas@bbcentral.com</li>
            <li className="flex items-center gap-2"><MapPin className="size-4" />Costa Dorada, España</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} B&B Central. Todos los derechos reservados.
      </div>
    </footer>
  )
}


