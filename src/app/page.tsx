import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

import {
  Calendar,
  Heart,
  MapPin,
  Bed,
  Bath,
  Waves,
  Star,
  Shield,
  Phone,
  Mail,
  Award,
  Sun,
  Moon,
  Compass,
  Camera,
  Car,
  Anchor,
  Mountain,
  Fish,
  Utensils,
  Coffee,
  Wifi,
  Snowflake,
  Eye,
  Bike,
  Castle,
  Building,
  ShoppingBag,
  Wind,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#f8f6ff] to-[#fff9f0]">
      <Hero />
      <Separator />
      <Info />
      <Separator className="bg-gradient-to-r from-[#3f2561]/5 to-[#6e4a8d]/5" />
      <Apartments />
      <Separator />
      <Services />
      <Separator className="bg-gradient-to-r from-[#6e4a8d]/5 to-[#F59E0B]/5" />
      <Experiences />
      <Separator className="bg-gradient-to-r from-[#F59E0B]/5 to-[#3f2561]/5" />
      <City />
      <Separator />
      <Events />
      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate lg:h-svh overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://static-assets-manager.s3.us-east-1.amazonaws.com/Contenedor_navbar_hero_bf4e4d9c2a.png"
          alt="Vista de la costa"
          width={1440}
          height={806}
          priority
          className="size-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#3f2561]/80 via-[#4f2f70]/70 to-[#6e4a8d]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative mt-[76px] z-10 mx-auto flex grow max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-6 rounded-full border border-white/30 bg-white/10 px-6 py-2 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-white/90">
            <Award className="size-4" />
            <span>Experiencia Premium B2B</span>
          </div>
        </div>

        <h1 className="font-display text-4xl tracking-wider sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
            CENTRAL
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#F59E0B] via-yellow-300 to-[#F59E0B] bg-clip-text text-transparent">
            SAN VITO CAMERE
          </span>
          <br />
        </h1>

        <div className="mt-8 max-w-4xl">
          <p className="text-lg text-white/90 sm:text-xl md:text-2xl">
            B2B Central con 3 departamentos para tu estancia soñada
          </p>
          <p className="mt-2 text-base text-white/75 sm:text-lg">
            en{" "}
            <span className="font-semibold text-[#F59E0B]">
              San Vito Lo Capo
            </span>
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <MapPin className="size-4" />
            <span>Centro Histórico</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Waves className="size-4" />
            <span>A pasos de Playa</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Shield className="size-4" />
            <span>100% Confiable</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button
            asChild
            className="group hover:shadow-3xl rounded-full bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-[#f6a92a] hover:to-[#F59E0B]"
          >
            <Link href="#apartments" className="flex items-center gap-2">
              <Eye className="size-5 transition-transform group-hover:scale-110" />
              Ver Departamentos
            </Link>
          </Button>
          <Button
            asChild
            className="group rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <Link href="#cta" className="flex items-center gap-2">
              <Calendar className="size-5 transition-transform group-hover:scale-110" />
              Reserva Directa
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Info() {
  return (
    <section
      id="info"
      className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] to-white py-16"
    >
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#6e4a8d]/10 to-transparent blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gradient-to-tl from-[#F59E0B]/10 to-transparent blur-3xl"></div>

      <Image
        src="https://static-assets-manager.s3.us-east-1.amazonaws.com/image_1_removebg_preview_3d6f2508ea.png"
        alt="decoracion izquierda"
        width={329}
        height={639}
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 opacity-20"
      />
      <Image
        src="https://static-assets-manager.s3.us-east-1.amazonaws.com/image_1_removebg_preview_3d6f2508ea.png"
        alt="decoracion derecha"
        width={329}
        height={639}
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 rotate-180 opacity-20"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#6e4a8d]/10 px-4 py-2">
              <Star className="size-4 text-[#6e4a8d]" />
              <span className="text-sm font-medium text-[#6e4a8d]">
                Descubre tu hogar lejos de casa
              </span>
            </div>

            <h2 className="font-display text-4xl text-[#6e4a8d] sm:text-5xl md:text-6xl">
              Central San Vito Camere:
              <br />
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#6e4a8d] bg-clip-text text-transparent">
                tu estancia soñada
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6e4a8d]/80">
              Nuestro B&B está en el{" "}
              <strong className="text-[#6e4a8d]">
                centro de San Vito Lo Capo
              </strong>
              , a dos pasos de la playa y cerca de las reservas del Zingaro y
              Macari. La ubicación es clave:{" "}
              <strong className="text-[#F59E0B]">Via Peralta n.10</strong>, una
              zona <strong>exclusivamente peatonal</strong>.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="rounded-3xl bg-gradient-to-br from-white to-[#f8f6ff] p-8 shadow-xl">
                <p className="text-xl leading-relaxed text-[#6e4a8d]">
                  <strong className="text-2xl text-[#F59E0B]">
                    Tres departamentos
                  </strong>{" "}
                  dentro de B2B Central, listos para que disfrutes{" "}
                  <strong className="text-[#6e4a8d]">San Vito</strong> con
                  <strong className="text-[#6e4a8d]">
                    {" "}
                    comodidad y estilo
                  </strong>
                  .
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="size-5 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#6e4a8d]/70">
                    (+500 reseñas)
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {infoSectionFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center gap-4 rounded-2xl border p-4",
                      feature.borderColor,
                      feature.bgColor,
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-xl p-3",
                        feature.bgColor,
                        feature.color,
                      )}
                    >
                      <feature.icon className="size-6" />
                    </div>
                    <span className={cn("font-medium", feature.color)}>
                      {feature.text}
                    </span>
                    <div className="ml-auto">
                      <div className="h-2 w-2 rounded-full bg-current opacity-50"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Image
              src="https://static-assets-manager.s3.us-east-1.amazonaws.com/Contenedor_navbar_hero_bf4e4d9c2a.png"
              alt="Dormitorio luminoso"
              width={1440}
              height={806}
              className="h-full w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Apartments() {
  return (
    <section
      id="apartments"
      className="relative overflow-hidden bg-gradient-to-br from-white to-[#f8f6ff] py-16"
    >
      <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-gradient-to-br from-[#6e4a8d]/20 to-transparent blur-2xl"></div>
      <div className="absolute right-20 bottom-20 h-40 w-40 rounded-full bg-gradient-to-tl from-[#F59E0B]/20 to-transparent blur-2xl"></div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6e4a8d]/10 to-[#F59E0B]/10 px-6 py-3">
              <Bed className="size-5 text-[#6e4a8d]" />
              <span className="text-sm font-medium text-[#6e4a8d]">
                Elige tu hogar perfecto
              </span>
            </div>

            <h2 className="font-display text-4xl text-[#6e4a8d] sm:text-5xl md:text-6xl">
              Nuestros
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#6e4a8d] bg-clip-text text-transparent">
                {" "}
                3 Departamentos
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6e4a8d]/80">
              Cada departamento está diseñado para ofrecerte la{" "}
              <strong className="text-[#6e4a8d]">máxima comodidad</strong>y{" "}
              <strong className="text-[#F59E0B]">estilo único</strong>. Desde
              vistas panorámicas hasta espacios amplios, encuentra el que mejor
              se adapte a tu viaje.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {apartmentsData.map((apto, index) => (
              <div
                key={apto.title}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <div className="absolute top-4 left-4 z-20 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-[#6e4a8d] shadow-lg backdrop-blur-sm">
                  #{index + 1}
                </div>

                <div className="relative overflow-hidden">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {apto.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <div className="relative h-[280px] overflow-hidden">
                            <Image
                              src={img.src}
                              alt={`${apto.title} foto ${i + 1}`}
                              width={img.w}
                              height={img.h}
                              className="size-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 cursor-pointer bg-white/90 text-[#6e4a8d] shadow-lg hover:bg-white" />
                    <CarouselNext className="right-4 cursor-pointer bg-white/90 text-[#6e4a8d] shadow-lg hover:bg-white" />

                    <div className="absolute right-4 bottom-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
                      {apto.images.length} fotos
                    </div>
                  </Carousel>

                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-10",
                      apto.color,
                    )}
                  ></div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4">
                    <h3 className="mb-2 text-2xl font-bold text-[#4f2f70]">
                      {apto.title}
                    </h3>
                    <p className="mb-4 text-[#4f2f70]/75">{apto.description}</p>

                    <div className="space-y-2">
                      {apto.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-[#4f2f70]/70"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto space-y-3">
                    <Button
                      asChild
                      className="group/btn w-full rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <Link
                        href="#cta"
                        className="flex items-center justify-center gap-2"
                      >
                        <Calendar className="size-4 transition-transform group-hover/btn:scale-110" />
                        Reservar Ahora
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-2xl border-2 border-[#d6c6e5] py-3 text-[#4f2f70] transition-all duration-300 hover:border-[#6e4a8d] hover:bg-[#6e4a8d] hover:text-white"
                    >
                      <Link
                        href="#apartments"
                        className="flex items-center justify-center gap-2"
                      >
                        <Eye className="size-4" />
                        Ver Detalles
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className={cn("h-1 bg-gradient-to-r", apto.color)}></div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#6e4a8d]/5 to-[#F59E0B]/5 p-8">
            <h3 className="font-display mb-6 text-center text-2xl text-[#6e4a8d]">
              Todos nuestros departamentos incluyen:
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Wifi, text: "Wi-Fi de alta velocidad" },
                { icon: Snowflake, text: "Aire acondicionado" },
                { icon: Bath, text: "Baño privado completo" },
                { icon: Shield, text: "Seguridad 24/7" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-sm"
                >
                  <div className="rounded-lg bg-[#6e4a8d]/10 p-2">
                    <item.icon className="size-5 text-[#6e4a8d]" />
                  </div>
                  <span className="font-medium text-[#4f2f70]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-white to-[#fff9f0] py-16"
    >
      <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-gradient-to-tl from-[#6e4a8d]/10 to-transparent blur-3xl"></div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F59E0B]/10 to-[#6e4a8d]/10 px-6 py-3">
              <Award className="size-5 text-[#6e4a8d]" />
              <span className="text-sm font-medium text-[#6e4a8d]">
                Servicio de Lujo
              </span>
            </div>

            <h2 className="font-display text-4xl text-[#6e4a8d] sm:text-5xl md:text-6xl">
              Nuestras
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#6e4a8d] bg-clip-text text-transparent">
                {" "}
                Habitaciones y Servicios
              </span>
            </h2>

            <div className="mx-auto mt-8 max-w-4xl space-y-4 text-lg text-[#6e4a8d]/80">
              <p>
                Cada habitación está diseñada para ofrecerte una experiencia
                <strong className="text-[#6e4a8d]"> única y memorable</strong>.
                Desde el momento que entras, sentirás la{" "}
                <strong className="text-[#F59E0B]">calidad y atención</strong>{" "}
                en cada detalle.
              </p>
              <p>
                Nuestras{" "}
                <strong className="text-[#6e4a8d]">cocinas equipadas</strong> y
                <strong className="text-[#F59E0B]"> terraza panorámica</strong>{" "}
                te permiten vivir como en casa, con todas las comodidades que
                necesitas para una estadía perfecta.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesItems.map((service, _index) => (
              <div className="relative h-full" key={service.title}>
                <div className="relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-lg">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-5",
                      service.color,
                    )}
                  ></div>

                  <div className="relative">
                    <div className="mb-6 flex items-center gap-3">
                      <div
                        className={cn(
                          "relative inline-flex rounded-2xl",
                          service.bgColor,
                        )}
                      >
                        <div
                          className={cn(
                            "rounded-xl bg-gradient-to-br p-4 text-white shadow-lg",
                            service.color,
                          )}
                        >
                          <service.icon className="size-8" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[#4f2f70]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mb-6 leading-relaxed text-[#4f2f70]/75">
                      {service.desc}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm text-[#4f2f70]/70"
                        >
                          <div
                            className={cn(
                              "h-2 w-2 rounded-full bg-gradient-to-r",
                              service.color,
                            )}
                          ></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={cn(
                      "absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r",
                      service.color,
                    )}
                  ></div>
                </div>

                <div className="absolute -top-2 right-6 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] px-3 py-1 text-xs font-bold text-white shadow-sm">
                  Premium
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#6e4a8d]/5 via-[#F59E0B]/5 to-[#6e4a8d]/5 p-8">
            <div className="mb-12 text-center">
              <h3 className="font-display mb-4 text-3xl text-[#6e4a8d]">
                Por qué elegirnos
              </h3>
              <p className="text-[#6e4a8d]/70">
                Nuestros números hablan por sí solos
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { number: "500+", label: "Huéspedes Satisfechos", icon: Heart },
                { number: "5", label: "Años de Experiencia", icon: Award },
                { number: "24/7", label: "Soporte Continuo", icon: Phone },
                { number: "100%", label: "Limpieza Garantizada", icon: Shield },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6e4a8d] to-[#4f2f70] text-white shadow-lg">
                    <stat.icon className="size-8" />
                  </div>
                  <div className="mb-2 text-3xl font-bold text-[#6e4a8d]">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-[#6e4a8d]/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Experiences() {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#f0f8ff] to-[#f8f6ff] py-16"
    >
      <div className="absolute top-20 left-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#6e4a8d]/10 to-transparent blur-2xl"></div>
      <div className="absolute right-20 bottom-20 h-56 w-56 rounded-full bg-gradient-to-tl from-[#F59E0B]/10 to-transparent blur-2xl"></div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6e4a8d]/10 to-[#F59E0B]/10 px-6 py-3">
              <Compass className="size-5 text-[#6e4a8d]" />
              <span className="text-sm font-medium text-[#6e4a8d]">
                Descubre Sicilia
              </span>
            </div>

            <h2 className="font-display text-4xl text-[#6e4a8d] sm:text-5xl md:text-6xl">
              Experiencias y
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#6e4a8d] bg-clip-text text-transparent">
                {" "}
                Actividades
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6e4a8d]/80">
              <strong className="text-[#6e4a8d]">Central San Vito</strong> es tu
              <strong className="text-[#F59E0B]">
                {" "}
                punto de partida perfecto
              </strong>{" "}
              para explorar todo lo que esta hermosa región tiene para ofrecer.
              Desde aventuras acuáticas hasta
              <strong className="text-[#6e4a8d]">
                {" "}
                experiencias culturales
              </strong>
              , aquí comienza tu viaje inolvidable.
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiencesData.map((experience, _index) => (
              <div className="relative" key={experience.title}>
                <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-5",
                      experience.color,
                    )}
                  ></div>

                  <div className="relative">
                    <div className="mb-6 flex items-center gap-3">
                      <div
                        className={cn(
                          "inline-flex rounded-2xl p-4",
                          experience.bgColor,
                        )}
                      >
                        <div
                          className={cn(
                            "rounded-xl bg-gradient-to-br p-4 text-white shadow-lg",
                            experience.color,
                          )}
                        >
                          <experience.icon className="size-8" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[#4f2f70]">
                        {experience.title}
                      </h3>
                    </div>

                    <p className="mb-2 font-medium text-[#4f2f70]/75">
                      {experience.description}
                    </p>
                    <p className="mb-6 text-sm leading-relaxed text-[#4f2f70]/60">
                      {experience.details}
                    </p>

                    <div className="space-y-2">
                      {experience.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm text-[#4f2f70]/70"
                        >
                          <div
                            className={cn(
                              "h-2 w-2 rounded-full bg-gradient-to-r",
                              experience.color,
                            )}
                          ></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={cn(
                      "absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r",
                      experience.color,
                    )}
                  ></div>
                </div>

                <div className="absolute -top-2 right-6 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] px-3 py-1 text-xs font-bold text-white shadow-sm">
                  Desde €25
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-[#6e4a8d]/5 to-[#F59E0B]/5 p-8">
            <div className="mb-12 text-center">
              <h3 className="font-display mb-4 text-3xl text-[#6e4a8d]">
                A Tu Alrededor
              </h3>
              <p className="text-[#6e4a8d]/70">
                Todo lo que necesitas está a pocos pasos
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {localAttractionsData.map((attraction, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6e4a8d] to-[#4f2f70] text-white shadow-lg">
                    <attraction.icon className="size-8" />
                  </div>
                  <h4 className="mb-2 font-bold text-[#4f2f70]">
                    {attraction.title}
                  </h4>
                  <p className="mb-2 text-sm text-[#4f2f70]/75">
                    {attraction.description}
                  </p>
                  <div className="inline-flex items-center gap-1 rounded-full bg-[#F59E0B]/10 px-3 py-1">
                    <MapPin className="size-3 text-[#F59E0B]" />
                    <span className="text-xs font-medium text-[#F59E0B]">
                      {attraction.distance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#6e4a8d] to-[#4f2f70] px-8 py-4 text-white shadow-lg">
              <Phone className="size-5" />
              <span className="font-medium">
                ¿Necesitas recomendaciones? ¡Llámanos!
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function City() {
  return (
    <section id="city" className="bg-[#3f2561]/5 py-16">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-5xl text-[#6e4a8d]">
            San Vito Lo Capo
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[#6e4a8d]/80">
            Un destino de mar cristalino, naturaleza y sabores únicos.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {cityImagesData.map((img, i) => (
            <div
              key={i}
              className={cn(
                "relative overflow-hidden rounded-2xl",
                i === 0 ? "h-[536px] sm:row-span-2" : "h-64",
              )}
            >
              <Image
                src={img.src}
                alt={`Ciudad ${i + 1}`}
                width={img.w}
                height={img.h}
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-white to-[#fff9f0] py-16"
    >
      <div className="absolute top-10 left-10 h-48 w-48 rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-transparent blur-2xl"></div>
      <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-gradient-to-tl from-[#6e4a8d]/10 to-transparent blur-2xl"></div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F59E0B]/10 to-[#6e4a8d]/10 px-6 py-3">
              <Calendar className="size-5 text-[#6e4a8d]" />
              <span className="text-sm font-medium text-[#6e4a8d]">
                Descubre lo mejor de Sicilia
              </span>
            </div>

            <h2 className="font-display text-4xl text-[#6e4a8d] sm:text-5xl md:text-6xl">
              Eventos y
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#6e4a8d] bg-clip-text text-transparent">
                {" "}
                Destinos Cercanos
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6e4a8d]/80">
              San Vito Lo Capo no es solo tu hogar durante las vacaciones, sino
              también tu
              <strong className="text-[#F59E0B]"> puerta de entrada</strong> a
              experiencias inolvidables y{" "}
              <strong className="text-[#6e4a8d]">destinos de ensueño</strong> en
              Sicilia.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="font-display mb-2 text-3xl text-[#4f2f70]">
                  Eventos Imperdibles
                </h3>
                <p className="text-[#4f2f70]/70">
                  Momentos únicos que no te puedes perder
                </p>
              </div>

              <div className="space-y-6">
                {eventsData.map((evento, _index) => (
                  <div
                    key={evento.title}
                    className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg"
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-5",
                        evento.color,
                      )}
                    ></div>

                    <div className="relative z-10 flex items-start gap-4">
                      <div className={cn("rounded-xl p-3", evento.bgColor)}>
                        <evento.icon
                          className={cn(
                            "size-6",
                            evento.color
                              .replace("from-", "text-")
                              .replace("to-", "to-"),
                          )}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <h4 className="text-xl font-bold text-[#4f2f70]">
                            {evento.title}
                          </h4>
                          <span className="rounded-full bg-[#F59E0B]/10 px-3 py-1 text-sm font-medium text-[#F59E0B]">
                            {evento.date}
                          </span>
                        </div>
                        <p className="mb-3 text-[#4f2f70]/75">
                          {evento.description}
                        </p>
                        <p className="text-sm text-[#4f2f70]/60">
                          {evento.details}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${evento.color}`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="font-display mb-2 text-3xl text-[#4f2f70]">
                  Destinos Cercanos
                </h3>
                <p className="text-[#4f2f70]/70">
                  Aventuras esperando a ser descubiertas
                </p>
              </div>

              <div className="space-y-6">
                {nearbyDestinationsData.map((lugar, _index) => (
                  <div
                    key={lugar.title}
                    className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg"
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-5",
                        lugar.color,
                      )}
                    ></div>

                    <div className="relative z-10 flex items-start gap-4">
                      <div className={cn("rounded-xl p-3", lugar.bgColor)}>
                        <lugar.icon
                          className={cn(
                            "size-6",
                            lugar.color
                              .replace("from-", "text-")
                              .replace("to-", "to-"),
                          )}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <h4 className="text-xl font-bold text-[#4f2f70]">
                            {lugar.title}
                          </h4>
                          <span className="rounded-full bg-[#6e4a8d]/10 px-3 py-1 text-sm font-medium text-[#6e4a8d]">
                            {lugar.distance}
                          </span>
                        </div>
                        <p className="mb-3 text-[#4f2f70]/75">
                          {lugar.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {lugar.features.map((feature, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-[#f8f6ff] px-3 py-1 text-xs font-medium text-[#4f2f70]/70"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r",
                        lugar.color,
                      )}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#6e4a8d] to-[#4f2f70] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <Compass className="size-5" />
              <span className="font-medium">
                ¿Quieres organizar una excursión? ¡Te ayudamos!
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://static-assets-manager.s3.us-east-1.amazonaws.com/Contenedor_navbar_hero_bf4e4d9c2a.png"
          alt="Vista de la costa"
          width={1440}
          height={806}
          priority
          className="size-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#3f2561]/80 via-[#4f2f70]/70 to-[#6e4a8d]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center text-white">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
          <Heart className="size-4" />
          <span className="text-sm font-medium">
            Experiencia Premium • Tu hogar lejos de casa
          </span>
        </div>

        <h2 className="font-display text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
            ¿LISTO PARA
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#F59E0B] via-yellow-300 to-[#F59E0B] bg-clip-text text-transparent">
            EL PARAÍSO?
          </span>
        </h2>

        <div className="mx-auto mt-8 max-w-4xl">
          <p className="text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
            Reserva tu escapada costera inolvidable y experimenta el
            <strong className="text-[#F59E0B]"> lujo</strong> como nunca antes
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          <Button
            asChild
            className="group hover:shadow-3xl w-full rounded-3xl bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:from-[#f6a92a] hover:to-[#F59E0B] sm:w-auto"
          >
            <Link href="#" className="flex items-center gap-3">
              <Phone className="size-6 transition-transform group-hover:rotate-12" />
              ¡Reservar Ahora!
            </Link>
          </Button>

          <Button
            asChild
            className="group w-full rounded-3xl border-2 border-white/40 bg-white/10 px-12 py-6 text-xl font-bold text-white backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-white/60 hover:bg-white/20 sm:w-auto"
          >
            <Link href="#" className="flex items-center gap-3">
              <Eye className="size-6 transition-transform group-hover:scale-110" />
              Ver Disponibilidad
            </Link>
          </Button>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white/10 px-8 py-6 backdrop-blur-sm">
          <p className="mb-4 text-sm text-white/80">
            ¿Tienes preguntas? ¡Estamos aquí para ayudarte!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {[
              {
                icon: Phone,
                text: "+39 329 068 9750",
                href: "tel:+393290689750",
              },
              {
                icon: Mail,
                text: "centralsanvito@gmail.com",
                href: "mailto:centralsanvito@gmail.com",
              },
            ].map((contact, index) => (
              <Link
                key={index}
                href={contact.href}
                className="flex items-center gap-2 transition-colors hover:text-[#F59E0B]"
              >
                <contact.icon className="size-4" />
                <span>{contact.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Separator({ className }: { className?: string }) {
  return (
    <div className={cn("relative py-8", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6e4a8d]/10 to-transparent"></div>
      <div className="relative flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#6e4a8d]/30"></div>
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-[#F59E0B]/40"></div>
            <div className="h-2 w-2 rounded-full bg-[#6e4a8d]/40"></div>
            <div className="h-2 w-2 rounded-full bg-[#F59E0B]/40"></div>
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#6e4a8d]/30"></div>
        </div>
      </div>
    </div>
  );
}

const infoSectionFeatures = [
  {
    icon: MapPin,
    text: "Ubicación central: Via Peralta 10 (zona peatonal)",
    color: "text-[#6e4a8d]",
    bgColor: "bg-[#f8f6ff]",
    borderColor: "border-[#d6c6e5]",
  },
  {
    icon: Waves,
    text: "A dos pasos de la playa",
    color: "text-[#4f2f70]",
    bgColor: "bg-[#f0e8ff]",
    borderColor: "border-[#d6c6e5]",
  },
  {
    icon: Coffee,
    text: "Cerca de bares, heladerías y restaurantes",
    color: "text-[#F59E0B]",
    bgColor: "bg-[#fff9f0]",
    borderColor: "border-[#fbbf24]",
  },
  {
    icon: Mountain,
    text: "A minutos de Zingaro y Macari",
    color: "text-[#8b6ba8]",
    bgColor: "bg-[#f8f6ff]",
    borderColor: "border-[#d6c6e5]",
  },
  {
    icon: Bed,
    text: "3 departamentos disponibles",
    color: "text-[#6e4a8d]",
    bgColor: "bg-[#f0e8ff]",
    borderColor: "border-[#d6c6e5]",
  },
];

const suiteMarinaImages = [
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/DSC_1490_JPG_U_U_fead6845cd.JPG",
    w: 4016,
    h: 6016,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/DSC_1492_JPG_U_77e37e6025.JPG",
    w: 5860,
    h: 3912,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250221_092959_df3e0ad1e6.jpg",
    w: 2322,
    h: 3098,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_210933_jpg_U_38ef53e24a.jpg",
    w: 2368,
    h: 3158,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250221_093645_59815e13cc.jpg",
    w: 3208,
    h: 2406,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_085033_3389836b19.jpg",
    w: 2448,
    h: 3264,
  },
];

const suiteCentralImages = [
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/DSC_1453_JPG_U_71c8bfbbed.JPG",
    w: 4016,
    h: 6016,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/DSC_1458_JPG_U_U_e7b808886c.JPG",
    w: 4016,
    h: 6016,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_211206_jpg_U_1d8af6b45b.jpg",
    w: 2368,
    h: 3158,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_210933_jpg_U_f6c95c8bcc.jpg",
    w: 2368,
    h: 3158,
  },
];

const suitePanoramicaImages = [
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/DSC_1469_JPG_UU_359b2d73f2.JPG",
    w: 6016,
    h: 4016,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/DSC_1483_JPG_U_U_f246bf342c.JPG",
    w: 3772,
    h: 5650,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_215738_jpg_U_ddc5ec0156.jpg",
    w: 3060,
    h: 4080,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_215317_baf3aa42bf.jpg",
    w: 2268,
    h: 3025,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_215254_aafc052913.jpg",
    w: 3264,
    h: 2448,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_220012_jpg_U_04940c1888.jpg",
    w: 2448,
    h: 3264,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_220449_ce3120f986.jpg",
    w: 3089,
    h: 2316,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_215338_jpg_U_05cd241703.jpg",
    w: 2742,
    h: 1827,
  },
];

const apartmentsData = [
  {
    title: "Suite Marina",
    images: suiteMarinaImages,
    description: "Amplio departamento con vista al mar",
    features: ["2 habitaciones", "Cocina completa", "Terraza privada"],
    color: "from-[#6e4a8d] to-[#4f2f70]",
  },
  {
    title: "Suite Central",
    images: suiteCentralImages,
    description: "Perfecto para parejas y familias pequeñas",
    features: ["1 habitación amplia", "Sala de estar", "Vista a la plaza"],
    color: "from-[#4f2f70] to-[#8b6ba8]",
  },
  {
    title: "Suite Panorámica",
    images: suitePanoramicaImages,
    description: "El más espacioso con vistas espectaculares",
    features: ["3 habitaciones", "Sala amplia", "Terraza con vista"],
    color: "from-[#4f2f70] to-[#8b6ba8]",
  },
];

const servicesItems = [
  {
    icon: Bed,
    title: "Habitaciones Premium",
    desc: "Espacios elegantes con baño privado, aire acondicionado y Wi‑Fi de alta velocidad",
    color: "from-[#6e4a8d] to-[#4f2f70]",
    bgColor: "bg-[#f8f6ff]",
    features: ["Cama King Size", "Ropa de cama premium", "Iluminación LED"],
  },
  {
    icon: Eye,
    title: "Vistas Espectaculares",
    desc: "Disfruta de vistas panorámicas a la ciudad, mar o montañas desde tu habitación",
    color: "from-[#6e4a8d] to-[#4f2f70]",
    bgColor: "bg-[#f8f6ff]",
    features: ["Ventanas amplias", "Balcón privado", "Persianas automáticas"],
  },
  {
    icon: Waves,
    title: "A Metros de la Playa",
    desc: "Tu base perfecta para explorar San Vito Lo Capo y sus alrededores",
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    features: ["5 min caminando", "Toallas incluidas", "Duchas exteriores"],
  },
  {
    icon: Utensils,
    title: "Cocinas Equipadas",
    desc: "Dos cocinas completamente equipadas para que cocines como en casa",
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    features: [
      "Utensilios completos",
      "Heladeras grandes",
      "Microondas y horno",
    ],
  },
  {
    icon: Snowflake,
    title: "Limpieza Premium",
    desc: "Servicio de limpieza diario con productos ecológicos y atención personalizada",
    color: "from-[#4f2f70] to-[#8b6ba8]",
    bgColor: "bg-[#f0e8ff]",
    features: ["Limpieza diaria", "Toallas frescas", "Productos ecológicos"],
  },
  {
    icon: Sun,
    title: "Terraza Panorámica",
    desc: "Relájate con vistas al Monte Mónaco y al mar Mediterráneo",
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    features: ["Asador incluido", "Mesa exterior", "Iluminación nocturna"],
  },
];

const experiencesData = [
  {
    icon: Car,
    title: "Transfer Premium",
    description: "Transporte cómodo y seguro desde/hacia el aeropuerto",
    details: "Servicio puerta a puerta con conductor profesional",
    color: "from-[#6e4a8d] to-[#4f2f70]",
    bgColor: "bg-[#f8f6ff]",
    features: ["Aire acondicionado", "Wi-Fi incluido", "Agua fresca"],
  },
  {
    icon: Anchor,
    title: "Paseos en Barco",
    description: "Navega por las cristalinas aguas del Mediterráneo",
    details: "Visita la Reserva del Zingaro y la Tonnara de San Vito",
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    features: ["Equipo de snorkel", "Guía experto", "Paradas para nadar"],
  },
  {
    icon: Waves,
    title: "Deportes Acuáticos",
    description: "Descubre la adrenalina del buceo, vela y windsurf",
    details: "Escuelas certificadas con instructores profesionales",
    color: "from-[#4f2f70] to-[#8b6ba8]",
    bgColor: "bg-[#f0e8ff]",
    features: ["Cursos para todos", "Equipo incluido", "Certificaciones"],
  },
  {
    icon: Mountain,
    title: "Escalada y Trekking",
    description: "Conquista las rutas de senderismo más espectaculares",
    details: "De septiembre a mayo, rutas para todos los niveles",
    color: "from-[#6e4a8d] to-[#F59E0B]",
    bgColor: "bg-[#f8f6ff]",
    features: ["Guías locales", "Picnic incluido", "Vistas panorámicas"],
  },
  {
    icon: Fish,
    title: "Pesca Organizada",
    description: "Vive la emoción de la pesca tradicional siciliana",
    details: "Experiencia completa con equipo y guía profesional",
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    features: ["Equipo completo", "Limpieza incluida", "Recetas tradicionales"],
  },
  {
    icon: Compass,
    title: "Excursiones Culturales",
    description: "Descubre los secretos históricos de Sicilia",
    details: "Visitas guiadas a templos, castillos y pueblos medievales",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    features: ["Guías expertos", "Historia fascinante", "Fotos inolvidables"],
  },
];

const localAttractionsData = [
  {
    icon: Coffee,
    title: "Gastronomía Local",
    description: "Bares, heladerías y restaurantes con sabores únicos",
    distance: "A 2 minutos",
  },
  {
    icon: Camera,
    title: "Plaza Santuario",
    description: "Corazón histórico de San Vito Lo Capo",
    distance: "A 3 minutos",
  },
  {
    icon: Bike,
    title: "Alquiler de Bicis",
    description: "Recorre la costa en bicicleta",
    distance: "A 5 minutos",
  },
  {
    icon: ShoppingBag,
    title: "Compras Locales",
    description: "Artesanías, souvenirs y productos típicos",
    distance: "A 1 minuto",
  },
];

const cityImagesData = [
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20240417_224229_bd7cc53123.jpg",
    w: 2875,
    h: 4020,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/DSC_1377_6b65a24025.JPG",
    w: 5528,
    h: 3685,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_111429_917b6a0da1.jpg",
    w: 3910,
    h: 2607,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20240415_200831_966f0a0014.jpg",
    w: 3948,
    h: 2960,
  },
  {
    src: "https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_112404_bd327f5f38.jpg",
    w: 3098,
    h: 2322,
  },
];

const eventsData = [
  {
    title: "Cous Cous Fest",
    date: "Septiembre",
    description: "El festival gastronómico más importante de Sicilia",
    icon: Utensils,
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    details: "Degusta el mejor couscous del mundo con chefs internacionales",
  },
  {
    title: "Festival de los Barriletes",
    date: "Mayo",
    icon: Wind,
    color: "from-[#6e4a8d] to-[#4f2f70]",
    bgColor: "bg-[#f0e8ff]",
    details: "Espectáculo único de barriletes gigantes en la playa",
  },
  {
    title: "Fiesta de San Vito",
    date: "Junio",
    icon: Star,
    color: "from-[#4f2f70] to-[#8b6ba8]",
    bgColor: "bg-[#f0e8ff]",
    details: "Celebración patronal con procesiones y fuegos artificiales",
  },
  {
    title: "Noche de las Estrellas",
    date: "Agosto",
    icon: Moon,
    color: "from-[#8b6ba8] to-[#6e4a8d]",
    bgColor: "bg-[#f8f6ff]",
    details: "Observación astronómica y eventos culturales nocturnos",
  },
];

const nearbyDestinationsData = [
  {
    title: "Parque de Segesta",
    description: "Templo dórico y anfiteatro griego del siglo V a.C.",
    distance: "45 min",
    icon: Camera,
    color: "from-[#6e4a8d] to-[#F59E0B]",
    bgColor: "bg-[#f8f6ff]",
    features: ["Templo griego", "Anfiteatro", "Vistas panorámicas"],
  },
  {
    title: "Erice Medieval",
    description: "Pueblo medieval con castillos y vistas al mar",
    distance: "1.5 horas",
    icon: Castle,
    color: "from-[#8b6ba8] to-[#6e4a8d]",
    bgColor: "bg-[#f0e8ff]",
    features: [
      "Castillo normando",
      "Murallas antiguas",
      "Heladerías artesanales",
    ],
  },
  {
    title: "Trapani Histórico",
    description: "Ciudad con arquitectura barroca y puerto pesquero",
    distance: "1 hora",
    icon: Building,
    color: "from-[#4f2f70] to-[#8b6ba8]",
    bgColor: "bg-[#f8f6ff]",
    features: ["Puerto antiguo", "Palacios barrocos", "Mercado de pescado"],
  },
  {
    title: "Reserva Zingaro",
    description: "Parque natural con calas cristalinas y senderos",
    distance: "30 min",
    icon: Mountain,
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    features: ["Calas vírgenes", "Senderos", "Observación de aves"],
  },
];
