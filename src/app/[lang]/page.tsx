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
import BookingDialog from "@/components/BookingDialog";
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

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#f8f6ff] to-[#fff9f0]">
      <Hero lang={lang} />
      <Separator />
      <Info lang={lang} />
      <Separator className="bg-gradient-to-r from-[#3f2561]/5 to-[#6e4a8d]/5" />
      <Apartments lang={lang} />
      <Separator />
      <Services lang={lang} />
      <Separator className="bg-gradient-to-r from-[#6e4a8d]/5 to-[#F59E0B]/5" />
      <Experiences lang={lang} />
      <Separator className="bg-gradient-to-r from-[#F59E0B]/5 to-[#3f2561]/5" />
      <City lang={lang} />
      <Separator />
      <Events lang={lang} />
      <CTA lang={lang} />
    </main>
  );
}

function Hero({ lang }: { lang: Locale }) {
  const texts = {
    badge: {
      en: "Premium B&B Experience",
      de: "Premium B&B Erfahrung",
      it: "Esperienza Premium B&B",
      sk: "Prémiový B&B zážitok",
    },
    description: {
      en: "B&B Central with 3 apartments for your dream stay in",
      de: "B&B Central mit 3 Apartments für Ihren Traumaufenthalt in",
      it: "B&B Central con 3 appartamenti per il tuo soggiorno da sogno a",
      sk: "B&B Central s 3 apartmánmi pre váš vysnívaný pobyt v",
    },
    features: {
      historicCenter: {
        en: "Historic Center",
        de: "Historisches Zentrum",
        it: "Centro Storico",
        sk: "Historické centrum",
      },
      stepsFromBeach: {
        en: "Steps from Beach",
        de: "Schritte vom Strand",
        it: "A passi dalla Spiaggia",
        sk: "Kroky od pláže",
      },
      reliable: {
        en: "100% Reliable",
        de: "100% Zuverlässig",
        it: "100% Affidabile",
        sk: "100% Spoľahlivé",
      },
    },
    buttons: {
      viewApartments: {
        en: "View Apartments",
        de: "Apartments ansehen",
        it: "Visualizza Appartamenti",
        sk: "Zobraziť apartmány",
      },
      directBooking: {
        en: "Direct Booking",
        de: "Direkte Buchung",
        it: "Prenotazione Diretta",
        sk: "Priama rezervácia",
      },
    },
    imageAlt: {
      en: "Coastal view",
      de: "Küstenblick",
      it: "Vista costiera",
      sk: "Pohľad na pobrežie",
    },
  };

  return (
    <section
      id="hero"
      className="relative isolate flex h-svh scroll-mt-12 flex-col overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_111429_917b6a0da1.jpg"
          width={3910}
          height={2607}
          alt={texts.imageAlt[lang]}
          priority
          className="size-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#3f2561]/80 via-[#4f2f70]/70 to-[#6e4a8d]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto mt-[68px] flex max-w-7xl grow flex-col items-center justify-center px-6 text-center text-white lg:mt-[76px]">
        <div className="mb-6 rounded-full border border-white/30 bg-white/10 px-6 py-2 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-white/90">
            <Award className="size-4" />
            <span>{texts.badge[lang]}</span>
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
            {texts.description[lang]} <br className="hidden lg:block" />
            <span className="font-semibold text-[#F59E0B]">
              San Vito Lo Capo
            </span>
          </p>
          <p className="mt-2 text-base text-white/75 sm:text-lg"> </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80 lg:gap-6">
          {[
            { icon: MapPin, text: texts.features.historicCenter[lang] },
            { icon: Waves, text: texts.features.stepsFromBeach[lang] },
            { icon: Shield, text: texts.features.reliable[lang] },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
            >
              <item.icon className="size-4" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button
            asChild
            className="group hover:shadow-3xl rounded-full bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-[#f6a92a] hover:to-[#F59E0B]"
          >
            <Link href="#apartments" className="flex items-center gap-2">
              <Eye className="size-5 transition-transform group-hover:scale-110" />
              {texts.buttons.viewApartments[lang]}
            </Link>
          </Button>
          <Button
            asChild
            className="group rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <Link href="#cta" className="flex items-center gap-2">
              <Calendar className="size-5 transition-transform group-hover:scale-110" />
              {texts.buttons.directBooking[lang]}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Info({ lang }: { lang: Locale }) {
  const texts = {
    badge: {
      en: "Discover your home away from home",
      de: "Entdecken Sie Ihr Zuhause fernab von zu Hause",
      it: "Scopri la tua casa lontano da casa",
      sk: "Objavte svoj domov ďaleko od domova",
    },
    title: {
      main: {
        en: "Central San Vito Camere:",
        de: "Central San Vito Camere:",
        it: "Central San Vito Camere:",
        sk: "Central San Vito Camere:",
      },
      highlight: {
        en: "your dream stay",
        de: "Ihr Traumaufenthalt",
        it: "il tuo soggiorno da sogno",
        sk: "váš vysnívaný pobyt",
      },
    },
    description: {
      en: "Our B&B is located in the center of San Vito Lo Capo, two steps from the beach and close to the Zingaro and Macari reserves. The location is key: Via Peralta n.10, an exclusively pedestrian area.",
      de: "Unser B&B befindet sich im Zentrum von San Vito Lo Capo, zwei Schritte vom Strand entfernt und in der Nähe der Reservate Zingaro und Macari. Die Lage ist entscheidend: Via Peralta n.10, eine ausschließlich Fußgängerzone.",
      it: "Il nostro B&B si trova nel centro di San Vito Lo Capo, a due passi dalla spiaggia e vicino alle riserve dello Zingaro e Macari. La posizione è fondamentale: Via Peralta n.10, una zona esclusivamente pedonale.",
      sk: "Náš B&B sa nachádza v centre San Vito Lo Capo, dva kroky od pláže a v blízkosti rezervácií Zingaro a Macari. Poloha je kľúčová: Via Peralta n.10, výlučne pešia zóna.",
    },
    mainText: {
      en: "Three apartments within B&B Central, ready for you to enjoy San Vito with comfort and style.",
      de: "Drei Apartments innerhalb von B&B Central, bereit für Sie, San Vito mit Komfort und Stil zu genießen.",
      it: "Tre appartamenti all'interno di B&B Central, pronti per farti godere San Vito con comfort e stile.",
      sk: "Tri apartmány v rámci B&B Central, pripravené na to, aby ste si užili San Vito s pohodlím a štýlom.",
    },
    reviews: {
      en: "(+500 reviews)",
      de: "(+500 Bewertungen)",
      it: "(+500 recensioni)",
      sk: "(+500 recenzií)",
    },
    imageAlt: {
      left: {
        en: "left decoration",
        de: "linke Dekoration",
        it: "decorazione sinistra",
        sk: "ľavá dekorácia",
      },
      right: {
        en: "right decoration",
        de: "rechte Dekoration",
        it: "decorazione destra",
        sk: "pravá dekorácia",
      },
      bedroom: {
        en: "Bright bedroom",
        de: "Helles Schlafzimmer",
        it: "Camera luminosa",
        sk: "Svetlá spálňa",
      },
    },
  };

  return (
    <section
      id="info"
      className="relative scroll-mt-12 overflow-hidden bg-gradient-to-br from-[#f8f6ff] to-white py-16"
    >
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#6e4a8d]/10 to-transparent blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gradient-to-tl from-[#F59E0B]/10 to-transparent blur-3xl"></div>

      <Image
        src="https://static-assets-manager.s3.us-east-1.amazonaws.com/image_1_removebg_preview_3d6f2508ea.png"
        alt={texts.imageAlt.left[lang]}
        width={329}
        height={639}
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 opacity-75"
      />
      <Image
        src="https://static-assets-manager.s3.us-east-1.amazonaws.com/image_1_removebg_preview_3d6f2508ea.png"
        alt={texts.imageAlt.right[lang]}
        width={329}
        height={639}
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 rotate-180 opacity-75"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#6e4a8d]/10 px-4 py-2">
              <Star className="size-4 text-[#6e4a8d]" />
              <span className="text-sm font-medium text-[#6e4a8d]">
                {texts.badge[lang]}
              </span>
            </div>

            <h2 className="font-display text-4xl text-[#6e4a8d] sm:text-5xl md:text-6xl">
              {texts.title.main[lang]}
              <br />
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#6e4a8d] bg-clip-text text-transparent">
                {texts.title.highlight[lang]}
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6e4a8d]/80">
              {texts.description[lang]}
            </p>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="rounded-3xl bg-gradient-to-br from-white to-[#f8f6ff] p-8 shadow-xl">
                <p className="text-xl leading-relaxed text-[#6e4a8d]">
                  {texts.mainText[lang]}
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
                    {texts.reviews[lang]}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {getInfoSectionFeatures(lang).map((feature, index) => (
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
              src="https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_111429_917b6a0da1.jpg"
              width={3910}
              height={2607}
              alt={texts.imageAlt.bedroom[lang]}
              className="h-full w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Apartments({ lang }: { lang: Locale }) {
  const texts = {
    badge: {
      en: "Choose your perfect home",
      de: "Wählen Sie Ihr perfektes Zuhause",
      it: "Scegli la tua casa perfetta",
      sk: "Vyberte si svoj dokonalý domov",
    },
    title: {
      main: {
        en: "Our",
        de: "Unsere",
        it: "I nostri",
        sk: "Naše",
      },
      highlight: {
        en: "3 Apartments",
        de: "3 Apartments",
        it: "3 Appartamenti",
        sk: "3 apartmány",
      },
    },
    description: {
      en: "Each apartment is designed to offer you maximum comfort and unique style. From panoramic views to spacious areas, find the one that best suits your trip.",
      de: "Jedes Apartment ist darauf ausgelegt, Ihnen maximalen Komfort und einzigartigen Stil zu bieten. Von Panoramablicken bis hin zu geräumigen Bereichen finden Sie das Apartment, das am besten zu Ihrer Reise passt.",
      it: "Ogni appartamento è progettato per offrirti il massimo comfort e uno stile unico. Dalle viste panoramiche agli spazi ampi, trova quello che meglio si adatta al tuo viaggio.",
      sk: "Každý apartmán je navrhnutý tak, aby vám ponúkol maximálne pohodlie a jedinečný štýl. Od panoramatických výhľadov po priestranné oblasti, nájdite ten, ktorý najlepšie vyhovuje vašej ceste.",
    },
    photos: {
      en: "photos",
      de: "Fotos",
      it: "foto",
      sk: "fotiek",
    },
    bookNow: {
      en: "Book Now",
      de: "Jetzt buchen",
      it: "Prenota Ora",
      sk: "Rezervovať teraz",
    },
    includesTitle: {
      en: "All our apartments include:",
      de: "Alle unsere Apartments beinhalten:",
      it: "Tutti i nostri appartamenti includono:",
      sk: "Všetky naše apartmány zahŕňajú:",
    },
    commonFeatures: {
      wifi: {
        en: "High-speed Wi-Fi",
        de: "High-Speed WLAN",
        it: "Wi-Fi ad alta velocità",
        sk: "Vysokorýchlostné Wi-Fi",
      },
      ac: {
        en: "Air conditioning",
        de: "Klimaanlage",
        it: "Aria condizionata",
        sk: "Klimatizácia",
      },
      bathroom: {
        en: "Complete private bathroom",
        de: "Komplettes privates Badezimmer",
        it: "Bagno privato completo",
        sk: "Kompletná súkromná kúpeľňa",
      },
      security: {
        en: "24/7 Security",
        de: "24/7 Sicherheit",
        it: "Sicurezza 24/7",
        sk: "Bezpečnosť 24/7",
      },
    },
  };

  return (
    <section
      id="apartments"
      className="relative scroll-mt-12 overflow-hidden bg-gradient-to-br from-white to-[#f8f6ff] py-16"
    >
      <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-gradient-to-br from-[#6e4a8d]/20 to-transparent blur-2xl"></div>
      <div className="absolute right-20 bottom-20 h-40 w-40 rounded-full bg-gradient-to-tl from-[#F59E0B]/20 to-transparent blur-2xl"></div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6e4a8d]/10 to-[#F59E0B]/10 px-6 py-3">
              <Bed className="size-5 text-[#6e4a8d]" />
              <span className="text-sm font-medium text-[#6e4a8d]">
                {texts.badge[lang]}
              </span>
            </div>

            <h2 className="font-display text-4xl text-[#6e4a8d] sm:text-5xl md:text-6xl">
              {texts.title.main[lang]}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#6e4a8d] bg-clip-text text-transparent">
                {" "}
                {texts.title.highlight[lang]}
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6e4a8d]/80">
              {texts.description[lang]}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {getApartmentsData(lang).map((apto, index) => (
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
                    <CarouselPrevious className="left-4 z-10 cursor-pointer bg-white/90 text-[#6e4a8d] shadow-lg hover:bg-white" />
                    <CarouselNext className="right-4 z-10 cursor-pointer bg-white/90 text-[#6e4a8d] shadow-lg hover:bg-white" />

                    <div className="absolute right-4 bottom-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
                      {apto.images.length} {texts.photos[lang]}
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

                  <Button
                    asChild
                    className="group/btn w-full rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <Link
                      href="#cta"
                      className="mt-auto flex items-center justify-center gap-2"
                    >
                      <Calendar className="size-4 transition-transform group-hover/btn:scale-110" />
                      {texts.bookNow[lang]}
                    </Link>
                  </Button>
                </div>

                <div className={cn("h-1 bg-gradient-to-r", apto.color)}></div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#6e4a8d]/5 to-[#F59E0B]/5 p-8">
            <h3 className="font-display mb-6 text-center text-2xl text-[#6e4a8d]">
              {texts.includesTitle[lang]}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Wifi, text: texts.commonFeatures.wifi[lang] },
                { icon: Snowflake, text: texts.commonFeatures.ac[lang] },
                { icon: Bath, text: texts.commonFeatures.bathroom[lang] },
                { icon: Shield, text: texts.commonFeatures.security[lang] },
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

function Services({ lang }: { lang: Locale }) {
  const texts = {
    badge: {
      en: "Luxury Service",
      de: "Luxus-Service",
      it: "Servizio di Lusso",
      sk: "Luxusná služba",
    },
    title: {
      main: {
        en: "Our",
        de: "Unsere",
        it: "Le nostre",
        sk: "Naše",
      },
      highlight: {
        en: "Rooms and Services",
        de: "Zimmer und Dienstleistungen",
        it: "Camere e Servizi",
        sk: "Izby a služby",
      },
    },
    description: {
      first: {
        en: "Each room is designed to offer you a unique and memorable experience. From the moment you enter, you'll feel the quality and attention to every detail.",
        de: "Jedes Zimmer ist darauf ausgelegt, Ihnen ein einzigartiges und unvergessliches Erlebnis zu bieten. Vom Moment des Eintretens werden Sie die Qualität und Aufmerksamkeit für jedes Detail spüren.",
        it: "Ogni camera è progettata per offrirti un'esperienza unica e memorabile. Dal momento in cui entri, sentirai la qualità e l'attenzione in ogni dettaglio.",
        sk: "Každá izba je navrhnutá tak, aby vám ponúkla jedinečný a nezabudnuteľný zážitok. Od momentu vstupu pocítite kvalitu a pozornosť venovanú každému detailu.",
      },
      second: {
        en: "Our equipped kitchens and panoramic terrace allow you to live like at home, with all the amenities you need for a perfect stay.",
        de: "Unsere ausgestatteten Küchen und die Panoramaterrasse ermöglichen es Ihnen, wie zu Hause zu leben, mit allen Annehmlichkeiten, die Sie für einen perfekten Aufenthalt benötigen.",
        it: "Le nostre cucine attrezzate e la terrazza panoramica ti permettono di vivere come a casa, con tutti i comfort di cui hai bisogno per un soggiorno perfetto.",
        sk: "Naše vybavené kuchyne a panoramatická terasa vám umožňujú žiť ako doma, so všetkým komfortom, ktorý potrebujete pre dokonalý pobyt.",
      },
    },
    whyChooseUs: {
      title: {
        en: "Why choose us",
        de: "Warum uns wählen",
        it: "Perché sceglierci",
        sk: "Prečo si vybrať nás",
      },
      subtitle: {
        en: "Our numbers speak for themselves",
        de: "Unsere Zahlen sprechen für sich",
        it: "I nostri numeri parlano da soli",
        sk: "Naše čísla hovoria za nás",
      },
    },
    stats: {
      guests: {
        en: "Satisfied Guests",
        de: "Zufriedene Gäste",
        it: "Ospiti Soddisfatti",
        sk: "Spokojní hostia",
      },
      experience: {
        en: "Years of Experience",
        de: "Jahre Erfahrung",
        it: "Anni di Esperienza",
        sk: "Rokov skúseností",
      },
      support: {
        en: "Continuous Support",
        de: "Kontinuierliche Unterstützung",
        it: "Supporto Continuo",
        sk: "Nepretržitá podpora",
      },
      cleaning: {
        en: "Guaranteed Cleaning",
        de: "Garantierte Reinigung",
        it: "Pulizia Garantita",
        sk: "Garantované upratovanie",
      },
    },
  };

  return (
    <section
      id="services"
      className="relative scroll-mt-12 overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-white to-[#fff9f0] py-16"
    >
      <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-gradient-to-tl from-[#6e4a8d]/10 to-transparent blur-3xl"></div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F59E0B]/10 to-[#6e4a8d]/10 px-6 py-3">
              <Award className="size-5 text-[#6e4a8d]" />
              <span className="text-sm font-medium text-[#6e4a8d]">
                {texts.badge[lang]}
              </span>
            </div>

            <h2 className="font-display text-4xl text-[#6e4a8d] sm:text-5xl md:text-6xl">
              {texts.title.main[lang]}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#6e4a8d] bg-clip-text text-transparent">
                {" "}
                {texts.title.highlight[lang]}
              </span>
            </h2>

            <div className="mx-auto mt-8 max-w-4xl space-y-4 text-lg text-[#6e4a8d]/80">
              <p>{texts.description.first[lang]}</p>
              <p>{texts.description.second[lang]}</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {getServicesItems(lang).map((service, _index) => (
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
                {texts.whyChooseUs.title[lang]}
              </h3>
              <p className="text-[#6e4a8d]/70">
                {texts.whyChooseUs.subtitle[lang]}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "500+",
                  label: texts.stats.guests[lang],
                  icon: Heart,
                },
                {
                  number: "5",
                  label: texts.stats.experience[lang],
                  icon: Award,
                },
                {
                  number: "24/7",
                  label: texts.stats.support[lang],
                  icon: Phone,
                },
                {
                  number: "100%",
                  label: texts.stats.cleaning[lang],
                  icon: Shield,
                },
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

function Experiences({ lang }: { lang: Locale }) {
  const texts = {
    badge: {
      en: "Discover Sicily",
      de: "Entdecken Sie Sizilien",
      it: "Scopri la Sicilia",
      sk: "Objavte Sicíliu",
    },
    title: {
      main: {
        en: "Experiences and",
        de: "Erlebnisse und",
        it: "Esperienze e",
        sk: "Zážitky a",
      },
      highlight: {
        en: "Activities",
        de: "Aktivitäten",
        it: "Attività",
        sk: "aktivity",
      },
    },
    description: {
      en: "Central San Vito is your perfect starting point to explore everything this beautiful region has to offer. From water adventures to cultural experiences, your unforgettable journey begins here.",
      de: "Central San Vito ist Ihr perfekter Ausgangspunkt, um alles zu erkunden, was diese wunderschöne Region zu bieten hat. Von Wasserabenteuern bis hin zu kulturellen Erlebnissen beginnt hier Ihre unvergessliche Reise.",
      it: "Central San Vito è il tuo punto di partenza perfetto per esplorare tutto ciò che questa bellissima regione ha da offrire. Dalle avventure acquatiche alle esperienze culturali, qui inizia il tuo viaggio indimenticabile.",
      sk: "Central San Vito je vaším dokonalým východiskovým bodom na preskúmanie všetkého, co táto krásna oblasť ponúka. Od vodných dobrodružstiev až po kultúrne zážitky, tu sa začína vaša nezabudnuteľná cesta.",
    },
    aroundYou: {
      title: {
        en: "Around You",
        de: "Um Sie herum",
        it: "Intorno a Te",
        sk: "Okolo vás",
      },
      subtitle: {
        en: "Everything you need is just a few steps away",
        de: "Alles was Sie brauchen ist nur wenige Schritte entfernt",
        it: "Tutto ciò di cui hai bisogno è a pochi passi",
        sk: "Všetko, čo potrebujete, je len pár krokov ďaleko",
      },
    },
    needRecommendations: {
      en: "Need recommendations? Call us!",
      de: "Brauchen Sie Empfehlungen? Rufen Sie uns an!",
      it: "Hai bisogno di raccomandazioni? Chiamaci!",
      sk: "Potrebujete odporúčania? Zavolajte nám!",
    },
  };

  return (
    <section
      id="experiences"
      className="relative scroll-mt-12 overflow-hidden bg-gradient-to-br from-white via-[#f0f8ff] to-[#f8f6ff] py-16"
    >
      <div className="absolute top-20 left-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#6e4a8d]/10 to-transparent blur-2xl"></div>
      <div className="absolute right-20 bottom-20 h-56 w-56 rounded-full bg-gradient-to-tl from-[#F59E0B]/10 to-transparent blur-2xl"></div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6e4a8d]/10 to-[#F59E0B]/10 px-6 py-3">
              <Compass className="size-5 text-[#6e4a8d]" />
              <span className="text-sm font-medium text-[#6e4a8d]">
                {texts.badge[lang]}
              </span>
            </div>

            <h2 className="font-display text-4xl text-[#6e4a8d] sm:text-5xl md:text-6xl">
              {texts.title.main[lang]}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#6e4a8d] bg-clip-text text-transparent">
                {" "}
                {texts.title.highlight[lang]}
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6e4a8d]/80">
              {texts.description[lang]}
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {getExperiencesData(lang).map((experience, _index) => (
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
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-[#6e4a8d]/5 to-[#F59E0B]/5 p-8">
            <div className="mb-12 text-center">
              <h3 className="font-display mb-4 text-3xl text-[#6e4a8d]">
                {texts.aroundYou.title[lang]}
              </h3>
              <p className="text-[#6e4a8d]/70">
                {texts.aroundYou.subtitle[lang]}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {getLocalAttractionsData(lang).map((attraction, index) => (
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
                {texts.needRecommendations[lang]}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function City({ lang }: { lang: Locale }) {
  const texts = {
    title: {
      en: "San Vito Lo Capo",
      de: "San Vito Lo Capo",
      it: "San Vito Lo Capo",
      sk: "San Vito Lo Capo",
    },
    description: {
      en: "A destination of crystal-clear seas, nature and unique flavors.",
      de: "Ein Reiseziel mit kristallklarem Meer, Natur und einzigartigen Geschmäckern.",
      it: "Una destinazione di mare cristallino, natura e sapori unici.",
      sk: "Destinácia krištáľovo čistého mora, prírody a jedinečných chutí.",
    },
    imageAlt: {
      en: "City",
      de: "Stadt",
      it: "Città",
      sk: "Mesto",
    },
  };

  return (
    <section id="city" className="scroll-mt-12 bg-[#3f2561]/5 py-16">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-5xl text-[#6e4a8d]">
            {texts.title[lang]}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[#6e4a8d]/80">
            {texts.description[lang]}
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
                alt={`${texts.imageAlt[lang]} ${i + 1}`}
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

function Events({ lang }: { lang: Locale }) {
  const texts = {
    badge: {
      en: "Discover the best of Sicily",
      de: "Entdecken Sie das Beste von Sizilien",
      it: "Scopri il meglio della Sicilia",
      sk: "Objavte to najlepšie zo Sicílie",
    },
    title: {
      main: {
        en: "Events and",
        de: "Veranstaltungen und",
        it: "Eventi e",
        sk: "Udalosti a",
      },
      highlight: {
        en: "Nearby Destinations",
        de: "Nahe Ziele",
        it: "Destinazioni Vicine",
        sk: "blízke destinácie",
      },
    },
    description: {
      en: "San Vito Lo Capo is not just your home during holidays, but also your gateway to unforgettable experiences and dream destinations in Sicily.",
      de: "San Vito Lo Capo ist nicht nur Ihr Zuhause während der Ferien, sondern auch Ihr Tor zu unvergesslichen Erlebnissen und Traumzielen in Sizilien.",
      it: "San Vito Lo Capo non è solo la tua casa durante le vacanze, ma anche la tua porta d'ingresso a esperienze indimenticabili e destinazioni da sogno in Sicilia.",
      sk: "San Vito Lo Capo nie je len váš domov počas prázdnin, ale aj vaša brána k nezabudnuteľným zážitkom a vysnívaným destináciám na Sicílii.",
    },
    eventsSection: {
      title: {
        en: "Unmissable Events",
        de: "Unvermissliche Veranstaltungen",
        it: "Eventi Imperdibili",
        sk: "Nezmeškateľné udalosti",
      },
      subtitle: {
        en: "Unique moments you can't miss",
        de: "Einzigartige Momente, die Sie nicht verpassen dürfen",
        it: "Momenti unici che non puoi perdere",
        sk: "Jedinečné momenty, ktoré si nesmie nechať ujsť",
      },
    },
    destinationsSection: {
      title: {
        en: "Nearby Destinations",
        de: "Nahe Ziele",
        it: "Destinazioni Vicine",
        sk: "Blízke destinácie",
      },
      subtitle: {
        en: "Adventures waiting to be discovered",
        de: "Abenteuer, die darauf warten, entdeckt zu werden",
        it: "Avventure che aspettano di essere scoperte",
        sk: "Dobrodružstvá čakajúce na objavenie",
      },
    },
    helpText: {
      en: "Want to organize an excursion? We'll help you!",
      de: "Möchten Sie einen Ausflug organisieren? Wir helfen Ihnen!",
      it: "Vuoi organizzare un'escursione? Ti aiutiamo!",
      sk: "Chcete zorganizovať výlet? Pomôžeme vám!",
    },
  };

  return (
    <section
      id="events"
      className="relative scroll-mt-12 overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-white to-[#fff9f0] py-16"
    >
      <div className="absolute top-10 left-10 h-48 w-48 rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-transparent blur-2xl"></div>
      <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-gradient-to-tl from-[#6e4a8d]/10 to-transparent blur-2xl"></div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F59E0B]/10 to-[#6e4a8d]/10 px-6 py-3">
              <Calendar className="size-5 text-[#6e4a8d]" />
              <span className="text-sm font-medium text-[#6e4a8d]">
                {texts.badge[lang]}
              </span>
            </div>

            <h2 className="font-display text-4xl text-[#6e4a8d] sm:text-5xl md:text-6xl">
              {texts.title.main[lang]}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#6e4a8d] bg-clip-text text-transparent">
                {" "}
                {texts.title.highlight[lang]}
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6e4a8d]/80">
              {texts.description[lang]}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="font-display mb-2 text-3xl text-[#4f2f70]">
                  {texts.eventsSection.title[lang]}
                </h3>
                <p className="text-[#4f2f70]/70">
                  {texts.eventsSection.subtitle[lang]}
                </p>
              </div>

              <div className="space-y-6">
                {getEventsData(lang).map((evento, _index) => (
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
                  {texts.destinationsSection.title[lang]}
                </h3>
                <p className="text-[#4f2f70]/70">
                  {texts.destinationsSection.subtitle[lang]}
                </p>
              </div>

              <div className="space-y-6">
                {getNearbyDestinationsData(lang).map((lugar, _index) => (
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
              <span className="font-medium">{texts.helpText[lang]}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CTA({ lang }: { lang: Locale }) {
  const texts = {
    badge: {
      en: "Premium Experience",
      de: "Premium Erfahrung",
      it: "Esperienza Premium",
      sk: "Prémiový zážitok",
    },
    title: {
      first: {
        en: "READY FOR",
        de: "BEREIT FÜR",
        it: "PRONTO PER",
        sk: "PRIPRAVENÝ NA",
      },
      second: {
        en: "PARADISE?",
        de: "DAS PARADIES?",
        it: "IL PARADISO?",
        sk: "RAJ?",
      },
    },
    description: {
      en: "Book your unforgettable coastal getaway and experience luxury like never before",
      de: "Buchen Sie Ihren unvergesslichen Küstenurlaub und erleben Sie Luxus wie nie zuvor",
      it: "Prenota la tua fuga costiera indimenticabile e vivi il lusso come mai prima",
      sk: "Rezervujte si svoj nezabudnuteľný pobyt na pobreží a zažite luxus ako nikdy predtým",
    },
    buttons: {
      bookNow: {
        en: "Book Now!",
        de: "Jetzt buchen!",
        it: "Prenota Ora!",
        sk: "Rezervovať teraz!",
      },
      checkAvailability: {
        en: "Check Availability",
        de: "Verfügbarkeit prüfen",
        it: "Verifica Disponibilità",
        sk: "Skontrolovať dostupnosť",
      },
    },
    helpText: {
      en: "Have questions? We're here to help!",
      de: "Haben Sie Fragen? Wir sind hier, um zu helfen!",
      it: "Hai domande? Siamo qui per aiutarti!",
      sk: "Máte otázky? Sme tu, aby sme pomohli!",
    },
    imageAlt: {
      en: "Coastal view",
      de: "Küstenblick",
      it: "Vista costiera",
      sk: "Pohľad na pobrežie",
    },
  };

  return (
    <section id="cta" className="relative scroll-mt-12 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://static-assets-manager.s3.us-east-1.amazonaws.com/IMG_20250220_111429_917b6a0da1.jpg"
          width={3910}
          height={2607}
          alt={texts.imageAlt[lang]}
          priority
          className="size-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#3f2561]/80 via-[#4f2f70]/70 to-[#6e4a8d]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center text-white">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
          <Heart className="size-4" />
          <span className="text-sm font-medium">{texts.badge[lang]}</span>
        </div>

        <h2 className="font-display text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
            {texts.title.first[lang]}
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#F59E0B] via-yellow-300 to-[#F59E0B] bg-clip-text text-transparent">
            {texts.title.second[lang]}
          </span>
        </h2>

        <div className="mx-auto mt-8 max-w-4xl">
          <p className="text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
            {texts.description[lang]}
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <BookingDialog lang={lang}>
            <Button className="group hover:shadow-3xl w-full cursor-pointer rounded-3xl bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:from-[#f6a92a] hover:to-[#F59E0B] sm:w-auto">
              <Phone className="size-6 transition-transform group-hover:rotate-12" />
              {texts.buttons.bookNow[lang]}
            </Button>
          </BookingDialog>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white/10 px-8 py-6 backdrop-blur-sm">
          <p className="mb-4 text-sm text-white/80">{texts.helpText[lang]}</p>
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

const getInfoSectionFeatures = (lang: Locale) => [
  {
    icon: MapPin,
    text: {
      en: "Central location: Via Peralta 10 (pedestrian zone)",
      de: "Zentrale Lage: Via Peralta 10 (Fußgängerzone)",
      it: "Posizione centrale: Via Peralta 10 (zona pedonale)",
      sk: "Centrálna poloha: Via Peralta 10 (pešia zóna)",
    }[lang],
    color: "text-[#6e4a8d]",
    bgColor: "bg-[#f8f6ff]",
    borderColor: "border-[#d6c6e5]",
  },
  {
    icon: Waves,
    text: {
      en: "Two steps from the beach",
      de: "Zwei Schritte vom Strand entfernt",
      it: "A due passi dalla spiaggia",
      sk: "Dva kroky od pláže",
    }[lang],
    color: "text-[#4f2f70]",
    bgColor: "bg-[#f0e8ff]",
    borderColor: "border-[#d6c6e5]",
  },
  {
    icon: Coffee,
    text: {
      en: "Close to bars, ice cream shops and restaurants",
      de: "In der Nähe von Bars, Eisdielen und Restaurants",
      it: "Vicino a bar, gelaterie e ristoranti",
      sk: "Blízko barov, zmrzlinární a reštaurácií",
    }[lang],
    color: "text-[#F59E0B]",
    bgColor: "bg-[#fff9f0]",
    borderColor: "border-[#fbbf24]",
  },
  {
    icon: Mountain,
    text: {
      en: "Minutes from Zingaro and Macari",
      de: "Minuten von Zingaro und Macari entfernt",
      it: "A minuti da Zingaro e Macari",
      sk: "Minúty od Zingaro a Macari",
    }[lang],
    color: "text-[#8b6ba8]",
    bgColor: "bg-[#f8f6ff]",
    borderColor: "border-[#d6c6e5]",
  },
  {
    icon: Bed,
    text: {
      en: "3 apartments available",
      de: "3 Apartments verfügbar",
      it: "3 appartamenti disponibili",
      sk: "3 apartmány k dispozícii",
    }[lang],
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

const getApartmentsData = (lang: Locale) => [
  {
    title: {
      en: "Marina Suite",
      de: "Marina Suite",
      it: "Suite Marina",
      sk: "Marina Suite",
    }[lang],
    images: suiteMarinaImages,
    description: {
      en: "Spacious apartment with sea view",
      de: "Geräumiges Apartment mit Meerblick",
      it: "Ampio appartamento con vista mare",
      sk: "Priestranný apartmán s výhľadom na more",
    }[lang],
    features: [
      {
        en: "2 bedrooms",
        de: "2 Schlafzimmer",
        it: "2 camere da letto",
        sk: "2 spálne",
      }[lang],
      {
        en: "Complete kitchen",
        de: "Komplette Küche",
        it: "Cucina completa",
        sk: "Kompletná kuchyňa",
      }[lang],
      {
        en: "Private terrace",
        de: "Private Terrasse",
        it: "Terrazza privata",
        sk: "Súkromná terasa",
      }[lang],
    ],
    color: "from-[#6e4a8d] to-[#4f2f70]",
  },
  {
    title: {
      en: "Central Suite",
      de: "Central Suite",
      it: "Suite Central",
      sk: "Central Suite",
    }[lang],
    images: suiteCentralImages,
    description: {
      en: "Perfect for couples and small families",
      de: "Perfekt für Paare und kleine Familien",
      it: "Perfetto per coppie e famiglie piccole",
      sk: "Ideálne pre páry a malé rodiny",
    }[lang],
    features: [
      {
        en: "1 spacious bedroom",
        de: "1 geräumiges Schlafzimmer",
        it: "1 camera spaziosa",
        sk: "1 priestranná spálňa",
      }[lang],
      {
        en: "Living room",
        de: "Wohnzimmer",
        it: "Soggiorno",
        sk: "Obývacia izba",
      }[lang],
      {
        en: "Plaza view",
        de: "Platzblick",
        it: "Vista sulla piazza",
        sk: "Výhľad na námestie",
      }[lang],
    ],
    color: "from-[#4f2f70] to-[#8b6ba8]",
  },
  {
    title: {
      en: "Panoramic Suite",
      de: "Panorama Suite",
      it: "Suite Panoramica",
      sk: "Panoramatická Suite",
    }[lang],
    images: suitePanoramicaImages,
    description: {
      en: "The most spacious with spectacular views",
      de: "Das geräumigste mit spektakulärer Aussicht",
      it: "Il più spazioso con viste spettacolari",
      sk: "Najpriestrannejší s nádherným výhľadom",
    }[lang],
    features: [
      {
        en: "3 bedrooms",
        de: "3 Schlafzimmer",
        it: "3 camere da letto",
        sk: "3 spálne",
      }[lang],
      {
        en: "Spacious living room",
        de: "Geräumiges Wohnzimmer",
        it: "Ampio soggiorno",
        sk: "Priestranná obývacia izba",
      }[lang],
      {
        en: "Terrace with view",
        de: "Terrasse mit Aussicht",
        it: "Terrazza con vista",
        sk: "Terasa s výhľadom",
      }[lang],
    ],
    color: "from-[#4f2f70] to-[#8b6ba8]",
  },
];

const getServicesItems = (lang: Locale) => [
  {
    icon: Bed,
    title: {
      en: "Premium Rooms",
      de: "Premium Zimmer",
      it: "Camere Premium",
      sk: "Prémiové izby",
    }[lang],
    desc: {
      en: "Elegant spaces with private bathroom, air conditioning and high-speed Wi-Fi",
      de: "Elegante Räume mit privatem Bad, Klimaanlage und High-Speed-WLAN",
      it: "Spazi eleganti con bagno privato, aria condizionata e Wi-Fi ad alta velocità",
      sk: "Elegantné priestory so súkromnou kúpeľňou, klimatizáciou a vysokorýchlostným Wi-Fi",
    }[lang],
    color: "from-[#6e4a8d] to-[#4f2f70]",
    bgColor: "bg-[#f8f6ff]",
    features: [
      {
        en: "King Size Bed",
        de: "King-Size-Bett",
        it: "Letto King Size",
        sk: "Posteľ King Size",
      }[lang],
      {
        en: "Premium bedding",
        de: "Premium Bettwäsche",
        it: "Biancheria premium",
        sk: "Prémiová posteľná bielizeň",
      }[lang],
      {
        en: "LED lighting",
        de: "LED-Beleuchtung",
        it: "Illuminazione LED",
        sk: "LED osvetlenie",
      }[lang],
    ],
  },
  {
    icon: Eye,
    title: {
      en: "Spectacular Views",
      de: "Spektakuläre Aussichten",
      it: "Viste Spettacolari",
      sk: "Nádherné výhľady",
    }[lang],
    desc: {
      en: "Enjoy panoramic views of the city, sea or mountains from your room",
      de: "Genießen Sie Panoramablicke auf die Stadt, das Meer oder die Berge von Ihrem Zimmer aus",
      it: "Goditi viste panoramiche sulla città, sul mare o sulle montagne dalla tua camera",
      sk: "Vychutnajte si panoramatické výhľady na mesto, more alebo hory z vašej izby",
    }[lang],
    color: "from-[#6e4a8d] to-[#4f2f70]",
    bgColor: "bg-[#f8f6ff]",
    features: [
      {
        en: "Large windows",
        de: "Große Fenster",
        it: "Finestre ampie",
        sk: "Veľké okná",
      }[lang],
      {
        en: "Private balcony",
        de: "Privater Balkon",
        it: "Balcone privato",
        sk: "Súkromný balkón",
      }[lang],
      {
        en: "Automatic blinds",
        de: "Automatische Jalousien",
        it: "Tende automatiche",
        sk: "Automatické žalúzie",
      }[lang],
    ],
  },
  {
    icon: Waves,
    title: {
      en: "Meters from the Beach",
      de: "Meter vom Strand",
      it: "A Metri dalla Spiaggia",
      sk: "Metre od pláže",
    }[lang],
    desc: {
      en: "Your perfect base to explore San Vito Lo Capo and its surroundings",
      de: "Ihr perfekter Ausgangspunkt, um San Vito Lo Capo und seine Umgebung zu erkunden",
      it: "La tua base perfetta per esplorare San Vito Lo Capo e i suoi dintorni",
      sk: "Vaša perfektná základňa na preskúmanie San Vito Lo Capo a jeho okolia",
    }[lang],
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    features: [
      {
        en: "5 min walking",
        de: "5 Min zu Fuß",
        it: "5 min a piedi",
        sk: "5 min chôdze",
      }[lang],
      {
        en: "Towels included",
        de: "Handtücher inklusive",
        it: "Asciugamani inclusi",
        sk: "Uteráky v cene",
      }[lang],
      {
        en: "Outdoor showers",
        de: "Außenduschen",
        it: "Docce esterne",
        sk: "Vonkajšie sprchy",
      }[lang],
    ],
  },
  {
    icon: Utensils,
    title: {
      en: "Equipped Kitchens",
      de: "Ausgestattete Küchen",
      it: "Cucine Attrezzate",
      sk: "Vybavené kuchyne",
    }[lang],
    desc: {
      en: "Two fully equipped kitchens so you can cook like at home",
      de: "Zwei voll ausgestattete Küchen, damit Sie wie zu Hause kochen können",
      it: "Due cucine completamente attrezzate per cucinare come a casa",
      sk: "Dve plne vybavené kuchyne, aby ste mohli variť ako doma",
    }[lang],
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    features: [
      {
        en: "Complete utensils",
        de: "Komplette Utensilien",
        it: "Utensili completi",
        sk: "Kompletné náčinie",
      }[lang],
      {
        en: "Large refrigerators",
        de: "Große Kühlschränke",
        it: "Frigoriferi grandi",
        sk: "Veľké chladničky",
      }[lang],
      {
        en: "Microwave and oven",
        de: "Mikrowelle und Backofen",
        it: "Microonde e forno",
        sk: "Mikrovlnka a rúra",
      }[lang],
    ],
  },
  {
    icon: Snowflake,
    title: {
      en: "Premium Cleaning",
      de: "Premium Reinigung",
      it: "Pulizia Premium",
      sk: "Prémiové upratovanie",
    }[lang],
    desc: {
      en: "Daily cleaning service with ecological products and personalized attention",
      de: "Täglicher Reinigungsservice mit ökologischen Produkten und persönlicher Betreuung",
      it: "Servizio di pulizia giornaliero con prodotti ecologici e attenzione personalizzata",
      sk: "Denné upratovacie služby s ekologickými produktmi a personalizovanou starostlivosťou",
    }[lang],
    color: "from-[#4f2f70] to-[#8b6ba8]",
    bgColor: "bg-[#f0e8ff]",
    features: [
      {
        en: "Daily cleaning",
        de: "Tägliche Reinigung",
        it: "Pulizia giornaliera",
        sk: "Denné upratovanie",
      }[lang],
      {
        en: "Fresh towels",
        de: "Frische Handtücher",
        it: "Asciugamani freschi",
        sk: "Čisté uteráky",
      }[lang],
      {
        en: "Ecological products",
        de: "Ökologische Produkte",
        it: "Prodotti ecologici",
        sk: "Ekologické produkty",
      }[lang],
    ],
  },
  {
    icon: Sun,
    title: {
      en: "Panoramic Terrace",
      de: "Panoramaterrasse",
      it: "Terrazza Panoramica",
      sk: "Panoramatická terasa",
    }[lang],
    desc: {
      en: "Relax with views of Mount Monaco and the Mediterranean Sea",
      de: "Entspannen Sie sich mit Blick auf den Monte Mónaco und das Mittelmeer",
      it: "Rilassati con vista sul Monte Monaco e sul Mar Mediterraneo",
      sk: "Relaxujte s výhľadom na Monte Monaco a Stredozemné more",
    }[lang],
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    features: [
      {
        en: "Grill included",
        de: "Grill inklusive",
        it: "Barbecue incluso",
        sk: "Gril v cene",
      }[lang],
      {
        en: "Outdoor table",
        de: "Außentisch",
        it: "Tavolo esterno",
        sk: "Vonkajší stôl",
      }[lang],
      {
        en: "Night lighting",
        de: "Nachtbeleuchtung",
        it: "Illuminazione notturna",
        sk: "Nočné osvetlenie",
      }[lang],
    ],
  },
];

const getExperiencesData = (lang: Locale) => [
  {
    icon: Car,
    title: {
      en: "Premium Transfer",
      de: "Premium Transfer",
      it: "Transfer Premium",
      sk: "Prémiový transfer",
    }[lang],
    description: {
      en: "Comfortable and safe transportation from/to the airport",
      de: "Komfortabler und sicherer Transport vom/zum Flughafen",
      it: "Trasporto comodo e sicuro da/verso l'aeroporto",
      sk: "Pohodlná a bezpečná doprava z/na letisko",
    }[lang],
    details: {
      en: "Door-to-door service with professional driver",
      de: "Tür-zu-Tür-Service mit professionellem Fahrer",
      it: "Servizio porta a porta con autista professionale",
      sk: "Služba z domu do domu s profesionálnym vodičom",
    }[lang],
    color: "from-[#6e4a8d] to-[#4f2f70]",
    bgColor: "bg-[#f8f6ff]",
    features: [
      {
        en: "Air conditioning",
        de: "Klimaanlage",
        it: "Aria condizionata",
        sk: "Klimatizácia",
      }[lang],
      {
        en: "Wi-Fi included",
        de: "WLAN inklusive",
        it: "Wi-Fi incluso",
        sk: "Wi-Fi v cene",
      }[lang],
      {
        en: "Fresh water",
        de: "Frisches Wasser",
        it: "Acqua fresca",
        sk: "Čerstvá voda",
      }[lang],
    ],
  },
  {
    icon: Anchor,
    title: {
      en: "Boat Tours",
      de: "Bootstouren",
      it: "Giri in Barca",
      sk: "Lodné výlety",
    }[lang],
    description: {
      en: "Sail through the crystal-clear waters of the Mediterranean",
      de: "Segeln Sie durch die kristallklaren Gewässer des Mittelmeers",
      it: "Naviga attraverso le acque cristalline del Mediterraneo",
      sk: "Plávajte sa cez krištáľovo čisté vody Stredozemného mora",
    }[lang],
    details: {
      en: "Visit the Zingaro Reserve and the Tonnara of San Vito",
      de: "Besuchen Sie das Zingaro-Reservat und die Tonnara von San Vito",
      it: "Visita la Riserva dello Zingaro e la Tonnara di San Vito",
      sk: "Navštívte rezerváciu Zingaro a Tonnara San Vito",
    }[lang],
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    features: [
      {
        en: "Snorkel equipment",
        de: "Schnorchelausrüstung",
        it: "Attrezzatura per snorkeling",
        sk: "Snorkel vybavenie",
      }[lang],
      {
        en: "Expert guide",
        de: "Experten-Guide",
        it: "Guida esperta",
        sk: "Odborný sprievodca",
      }[lang],
      {
        en: "Swimming stops",
        de: "Schwimmstopps",
        it: "Fermate per nuotare",
        sk: "Zastávky na kúpanie",
      }[lang],
    ],
  },
  {
    icon: Waves,
    title: {
      en: "Water Sports",
      de: "Wassersport",
      it: "Sport Acquatici",
      sk: "Vodné športy",
    }[lang],
    description: {
      en: "Discover the adrenaline of diving, sailing and windsurfing",
      de: "Entdecken Sie das Adrenalin des Tauchens, Segelns und Windsurfens",
      it: "Scopri l'adrenalina di immersioni, vela e windsurf",
      sk: "Objavte adrenalín z potápania, plachtenia a windsurfingu",
    }[lang],
    details: {
      en: "Certified schools with professional instructors",
      de: "Zertifizierte Schulen mit professionellen Instruktoren",
      it: "Scuole certificate con istruttori professionali",
      sk: "Certifikované školy s profesionálnymi inštruktormi",
    }[lang],
    color: "from-[#4f2f70] to-[#8b6ba8]",
    bgColor: "bg-[#f0e8ff]",
    features: [
      {
        en: "Courses for all levels",
        de: "Kurse für alle Niveaus",
        it: "Corsi per tutti i livelli",
        sk: "Kurzy pre všetky úrovne",
      }[lang],
      {
        en: "Equipment included",
        de: "Ausrüstung inklusive",
        it: "Attrezzatura inclusa",
        sk: "Vybavenie v cene",
      }[lang],
      {
        en: "Certifications",
        de: "Zertifizierungen",
        it: "Certificazioni",
        sk: "Certifikácie",
      }[lang],
    ],
  },
  {
    icon: Mountain,
    title: {
      en: "Climbing and Trekking",
      de: "Klettern und Trekking",
      it: "Arrampicata e Trekking",
      sk: "Lezenie a treking",
    }[lang],
    description: {
      en: "Conquer the most spectacular hiking routes",
      de: "Erobern Sie die spektakulärsten Wanderrouten",
      it: "Conquista i percorsi escursionistici più spettacolari",
      sk: "Dobyte najkrajšie turistické trasy",
    }[lang],
    details: {
      en: "From September to May, routes for all levels",
      de: "Von September bis Mai, Routen für alle Niveaus",
      it: "Da settembre a maggio, percorsi per tutti i livelli",
      sk: "Od septembra do mája, trasy pre všetky úrovne",
    }[lang],
    color: "from-[#6e4a8d] to-[#F59E0B]",
    bgColor: "bg-[#f8f6ff]",
    features: [
      {
        en: "Local guides",
        de: "Lokale Guides",
        it: "Guide locali",
        sk: "Miestni sprievodcovia",
      }[lang],
      {
        en: "Picnic included",
        de: "Picknick inklusive",
        it: "Picnic incluso",
        sk: "Piknik v cene",
      }[lang],
      {
        en: "Panoramic views",
        de: "Panoramablicke",
        it: "Viste panoramiche",
        sk: "Panoramatické výhľady",
      }[lang],
    ],
  },
  {
    icon: Fish,
    title: {
      en: "Organized Fishing",
      de: "Organisiertes Angeln",
      it: "Pesca Organizzata",
      sk: "Organizovaný rybolov",
    }[lang],
    description: {
      en: "Experience the excitement of traditional Sicilian fishing",
      de: "Erleben Sie die Aufregung des traditionellen sizilianischen Fischfangs",
      it: "Vivi l'emozione della pesca tradizionale siciliana",
      sk: "Zažite vzrušenie zo tradičného sicílskeho rybolovu",
    }[lang],
    details: {
      en: "Complete experience with equipment and professional guide",
      de: "Komplette Erfahrung mit Ausrüstung und professionellem Guide",
      it: "Esperienza completa con attrezzatura e guida professionale",
      sk: "Kompletný zážitok s vybavením a profesionálnym sprievodcom",
    }[lang],
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    features: [
      {
        en: "Complete equipment",
        de: "Komplette Ausrüstung",
        it: "Attrezzatura completa",
        sk: "Kompletné vybavenie",
      }[lang],
      {
        en: "Cleaning included",
        de: "Reinigung inklusive",
        it: "Pulizia inclusa",
        sk: "Čistenie v cene",
      }[lang],
      {
        en: "Traditional recipes",
        de: "Traditionelle Rezepte",
        it: "Ricette tradizionali",
        sk: "Tradičné recepty",
      }[lang],
    ],
  },
  {
    icon: Compass,
    title: {
      en: "Cultural Excursions",
      de: "Kulturelle Ausflüge",
      it: "Escursioni Culturali",
      sk: "Kultúrne výlety",
    }[lang],
    description: {
      en: "Discover the historical secrets of Sicily",
      de: "Entdecken Sie die historischen Geheimnisse Siziliens",
      it: "Scopri i segreti storici della Sicilia",
      sk: "Objavte historické tajomstvá Sicílie",
    }[lang],
    details: {
      en: "Guided visits to temples, castles and medieval villages",
      de: "Geführte Besuche zu Tempeln, Burgen und mittelalterlichen Dörfern",
      it: "Visite guidate a templi, castelli e borghi medievali",
      sk: "Sprievodné návštevy chrámov, hradov a stredovekých dediniek",
    }[lang],
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    features: [
      {
        en: "Expert guides",
        de: "Experten-Guides",
        it: "Guide esperte",
        sk: "Odborní sprievodcovia",
      }[lang],
      {
        en: "Fascinating history",
        de: "Faszinierende Geschichte",
        it: "Storia affascinante",
        sk: "Fascinujúca história",
      }[lang],
      {
        en: "Unforgettable photos",
        de: "Unvergessliche Fotos",
        it: "Foto indimenticabili",
        sk: "Nezabudnuteľné fotky",
      }[lang],
    ],
  },
];

const getLocalAttractionsData = (lang: Locale) => [
  {
    icon: Coffee,
    title: {
      en: "Local Gastronomy",
      de: "Lokale Gastronomie",
      it: "Gastronomia Locale",
      sk: "Miestna gastronómia",
    }[lang],
    description: {
      en: "Bars, ice cream shops and restaurants with unique flavors",
      de: "Bars, Eisdielen und Restaurants mit einzigartigen Geschmäckern",
      it: "Bar, gelaterie e ristoranti con sapori unici",
      sk: "Bary, zmrzlinárne a reštaurácie s jedinečnými chuťami",
    }[lang],
    distance: {
      en: "2 minutes away",
      de: "2 Minuten entfernt",
      it: "A 2 minuti",
      sk: "2 minúty cesty",
    }[lang],
  },
  {
    icon: Camera,
    title: {
      en: "Sanctuary Square",
      de: "Santuario-Platz",
      it: "Piazza Santuario",
      sk: "Námestie Santuario",
    }[lang],
    description: {
      en: "Historic heart of San Vito Lo Capo",
      de: "Historisches Herz von San Vito Lo Capo",
      it: "Cuore storico di San Vito Lo Capo",
      sk: "Historické srdce San Vito Lo Capo",
    }[lang],
    distance: {
      en: "3 minutes away",
      de: "3 Minuten entfernt",
      it: "A 3 minuti",
      sk: "3 minúty cesty",
    }[lang],
  },
  {
    icon: Bike,
    title: {
      en: "Bike Rental",
      de: "Fahrradverleih",
      it: "Noleggio Bici",
      sk: "Požičovňa bicyklov",
    }[lang],
    description: {
      en: "Explore the coast by bicycle",
      de: "Erkunden Sie die Küste mit dem Fahrrad",
      it: "Esplora la costa in bicicletta",
      sk: "Preskúmajte pobrežie na bicykli",
    }[lang],
    distance: {
      en: "5 minutes away",
      de: "5 Minuten entfernt",
      it: "A 5 minuti",
      sk: "5 minút cesty",
    }[lang],
  },
  {
    icon: ShoppingBag,
    title: {
      en: "Local Shopping",
      de: "Lokales Einkaufen",
      it: "Shopping Locale",
      sk: "Miestne nakupovanie",
    }[lang],
    description: {
      en: "Crafts, souvenirs and typical products",
      de: "Handwerk, Souvenirs und typische Produkte",
      it: "Artigianato, souvenir e prodotti tipici",
      sk: "Remeslá, suveníry a typické produkty",
    }[lang],
    distance: {
      en: "1 minute away",
      de: "1 Minute entfernt",
      it: "A 1 minuto",
      sk: "1 minúta cesty",
    }[lang],
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

const getEventsData = (lang: Locale) => [
  {
    title: {
      en: "Cous Cous Fest",
      de: "Cous Cous Fest",
      it: "Cous Cous Fest",
      sk: "Cous Cous Fest",
    }[lang],
    date: {
      en: "September",
      de: "September",
      it: "Settembre",
      sk: "September",
    }[lang],
    description: {
      en: "Sicily's most important gastronomic festival",
      de: "Siziliens wichtigstes gastronomisches Festival",
      it: "Il festival gastronomico più importante della Sicilia",
      sk: "Najdôležitejší gastronomický festival Sicílie",
    }[lang],
    icon: Utensils,
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    details: {
      en: "Taste the world's best couscous with international chefs",
      de: "Probieren Sie den weltbesten Couscous mit internationalen Köchen",
      it: "Gusta il miglior couscous del mondo con chef internazionali",
      sk: "Ochutnajte najlepší kuskus na svete s medzinárodnými šéfkuchármi",
    }[lang],
  },
  {
    title: {
      en: "Kite Festival",
      de: "Drachenfestival",
      it: "Festival degli Aquiloni",
      sk: "Festival šarkanov",
    }[lang],
    date: {
      en: "May",
      de: "Mai",
      it: "Maggio",
      sk: "Máj",
    }[lang],
    description: {
      en: "Unique spectacle of giant kites on the beach",
      de: "Einzigartiges Spektakel von Riesendrachen am Strand",
      it: "Spettacolo unico di aquiloni giganti sulla spiaggia",
      sk: "Jedinečná podívaná obrovských šarkanov na pláži",
    }[lang],
    icon: Wind,
    color: "from-[#6e4a8d] to-[#4f2f70]",
    bgColor: "bg-[#f0e8ff]",
    details: {
      en: "Unique spectacle of giant kites on the beach",
      de: "Einzigartiges Spektakel von Riesendrachen am Strand",
      it: "Spettacolo unico di aquiloni giganti sulla spiaggia",
      sk: "Jedinečná podívaná obrovských šarkanov na pláži",
    }[lang],
  },
  {
    title: {
      en: "San Vito Festival",
      de: "San Vito Fest",
      it: "Festa di San Vito",
      sk: "Festival San Vito",
    }[lang],
    date: {
      en: "June",
      de: "Juni",
      it: "Giugno",
      sk: "Jún",
    }[lang],
    description: {
      en: "Patron saint celebration with processions and fireworks",
      de: "Schutzpatronfeier mit Prozessionen und Feuerwerk",
      it: "Celebrazione patronale con processioni e fuochi d'artificio",
      sk: "Oslava patróna s procesiami a ohňostrojmi",
    }[lang],
    icon: Star,
    color: "from-[#4f2f70] to-[#8b6ba8]",
    bgColor: "bg-[#f0e8ff]",
    details: {
      en: "Patron saint celebration with processions and fireworks",
      de: "Schutzpatronfeier mit Prozessionen und Feuerwerk",
      it: "Celebrazione patronale con processioni e fuochi d'artificio",
      sk: "Oslava patróna s procesiami a ohňostrojmi",
    }[lang],
  },
  {
    title: {
      en: "Night of the Stars",
      de: "Nacht der Sterne",
      it: "Notte delle Stelle",
      sk: "Noc hviezd",
    }[lang],
    date: {
      en: "August",
      de: "August",
      it: "Agosto",
      sk: "August",
    }[lang],
    description: {
      en: "Astronomical observation and nighttime cultural events",
      de: "Astronomische Beobachtung und nächtliche Kulturveranstaltungen",
      it: "Osservazione astronomica ed eventi culturali notturni",
      sk: "Astronomické pozorovanie a nočné kultúrne podujatia",
    }[lang],
    icon: Moon,
    color: "from-[#8b6ba8] to-[#6e4a8d]",
    bgColor: "bg-[#f8f6ff]",
    details: {
      en: "Astronomical observation and nighttime cultural events",
      de: "Astronomische Beobachtung und nächtliche Kulturveranstaltungen",
      it: "Osservazione astronomica ed eventi culturali notturni",
      sk: "Astronomické pozorovanie a nočné kultúrne podujatia",
    }[lang],
  },
];

const getNearbyDestinationsData = (lang: Locale) => [
  {
    title: {
      en: "Segesta Park",
      de: "Segesta Park",
      it: "Parco di Segesta",
      sk: "Park Segesta",
    }[lang],
    description: {
      en: "Doric temple and Greek amphitheater from the 5th century BC",
      de: "Dorischer Tempel und griechisches Amphitheater aus dem 5. Jahrhundert v. Chr.",
      it: "Tempio dorico e anfiteatro greco del V secolo a.C.",
      sk: "Dórsky chrám a grécky amfiteáter z 5. storočia pred n. l.",
    }[lang],
    distance: {
      en: "45 min",
      de: "45 Min",
      it: "45 min",
      sk: "45 min",
    }[lang],
    icon: Camera,
    color: "from-[#6e4a8d] to-[#F59E0B]",
    bgColor: "bg-[#f8f6ff]",
    features: [
      {
        en: "Greek temple",
        de: "Griechischer Tempel",
        it: "Tempio greco",
        sk: "Grécky chrám",
      }[lang],
      {
        en: "Amphitheater",
        de: "Amphitheater",
        it: "Anfiteatro",
        sk: "Amfiteáter",
      }[lang],
      {
        en: "Panoramic views",
        de: "Panoramablicke",
        it: "Viste panoramiche",
        sk: "Panoramatické výhľady",
      }[lang],
    ],
  },
  {
    title: {
      en: "Medieval Erice",
      de: "Mittelalterliches Erice",
      it: "Erice Medievale",
      sk: "Stredoveké Erice",
    }[lang],
    description: {
      en: "Medieval village with castles and sea views",
      de: "Mittelalterliches Dorf mit Burgen und Meerblick",
      it: "Borgo medievale con castelli e vista sul mare",
      sk: "Stredoveká dedinka s hradmi a výhľadom na more",
    }[lang],
    distance: {
      en: "1.5 hours",
      de: "1,5 Stunden",
      it: "1,5 ore",
      sk: "1,5 hodiny",
    }[lang],
    icon: Castle,
    color: "from-[#8b6ba8] to-[#6e4a8d]",
    bgColor: "bg-[#f0e8ff]",
    features: [
      {
        en: "Norman castle",
        de: "Normannische Burg",
        it: "Castello normanno",
        sk: "Normandský hrad",
      }[lang],
      {
        en: "Ancient walls",
        de: "Antike Mauern",
        it: "Mura antiche",
        sk: "Staré hradby",
      }[lang],
      {
        en: "Artisan ice cream shops",
        de: "Handwerkliche Eisdielen",
        it: "Gelaterie artigianali",
        sk: "Remeselné zmrzlinárne",
      }[lang],
    ],
  },
  {
    title: {
      en: "Historic Trapani",
      de: "Historisches Trapani",
      it: "Trapani Storica",
      sk: "Historické Trapani",
    }[lang],
    description: {
      en: "City with baroque architecture and fishing port",
      de: "Stadt mit barocker Architektur und Fischerhafen",
      it: "Città con architettura barocca e porto peschereccio",
      sk: "Mesto s barokovou architektúrou a rybárskym prístavom",
    }[lang],
    distance: {
      en: "1 hour",
      de: "1 Stunde",
      it: "1 ora",
      sk: "1 hodina",
    }[lang],
    icon: Building,
    color: "from-[#4f2f70] to-[#8b6ba8]",
    bgColor: "bg-[#f8f6ff]",
    features: [
      {
        en: "Ancient port",
        de: "Alter Hafen",
        it: "Porto antico",
        sk: "Starý prístav",
      }[lang],
      {
        en: "Baroque palaces",
        de: "Barocke Paläste",
        it: "Palazzi barocchi",
        sk: "Barokové paláce",
      }[lang],
      {
        en: "Fish market",
        de: "Fischmarkt",
        it: "Mercato del pesce",
        sk: "Rybí trh",
      }[lang],
    ],
  },
  {
    title: {
      en: "Zingaro Reserve",
      de: "Zingaro-Reservat",
      it: "Riserva dello Zingaro",
      sk: "Rezervácia Zingaro",
    }[lang],
    description: {
      en: "Natural park with crystal clear coves and trails",
      de: "Naturpark mit kristallklaren Buchten und Wanderwegen",
      it: "Parco naturale con calette cristalline e sentieri",
      sk: "Prírodný park s krištáľovo čistými zátokami a chodníkmi",
    }[lang],
    distance: {
      en: "30 min",
      de: "30 Min",
      it: "30 min",
      sk: "30 min",
    }[lang],
    icon: Mountain,
    color: "from-[#F59E0B] to-[#f6a92a]",
    bgColor: "bg-[#fff9f0]",
    features: [
      {
        en: "Virgin coves",
        de: "Unberührte Buchten",
        it: "Calette vergini",
        sk: "Panenské zátoky",
      }[lang],
      {
        en: "Hiking trails",
        de: "Wanderwege",
        it: "Sentieri",
        sk: "Turistické chodníky",
      }[lang],
      {
        en: "Bird watching",
        de: "Vogelbeobachtung",
        it: "Osservazione uccelli",
        sk: "Pozorovanie vtákov",
      }[lang],
    ],
  },
];
