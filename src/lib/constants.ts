import { z } from "zod";

const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30MB
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf",
];

export const bookingSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "El teléfono debe tener al menos 8 dígitos"),
  apartment: z.enum(["marina", "central", "panoramic"], {
    required_error: "Por favor selecciona un apartamento",
  }),
  adults: z.number().min(1, "Debe haber al menos 1 adulto").max(10),
  minors: z.number().min(0).max(6),
  dateRange: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine((data) => data.from && data.to, {
      message: "Por favor selecciona fechas de check-in y check-out",
    })
    .refine((data) => data.to > data.from, {
      message: "La fecha de check-out debe ser posterior al check-in",
    })
    .refine(
      (data) => {
        if (!data.from || !data.to) return true;
        const diffInMs = data.to.getTime() - data.from.getTime();
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
        return diffInDays >= 3;
      },
      {
        message: "La reserva debe ser de mínimo 3 días",
      },
    ),
  receipt: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, "El archivo es muy grande")
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Tipo de archivo no válido",
    ),
  comments: z.string().optional(),
});

export const apartmentNames = {
  marina: {
    en: "Marina Suite - Sea view",
    de: "Marina Suite - Meerblick",
    it: "Suite Marina - Vista mare",
    sk: "Marina Suite - Výhľad na more",
  },
  central: {
    en: "Central Suite - Plaza view",
    de: "Central Suite - Platzblick",
    it: "Suite Central - Vista piazza",
    sk: "Central Suite - Výhľad na námestie",
  },
  panoramic: {
    en: "Panoramic Suite - Mountain view",
    de: "Panorama Suite - Bergblick",
    it: "Suite Panoramica - Vista montagna",
    sk: "Panoramatická Suite - Výhľad na hory",
  },
};

export const emailTexts = {
  en: {
    subject: "New Booking Request - Central San Vito Camere",
    greeting: "New booking request received",
    personalInfo: "Personal Information",
    stayDetails: "Stay Details",
    apartment: "Apartment",
    guests: "Guests",
    adults: "Adults",
    children: "Children",
    dates: "Dates",
    checkIn: "Check-in",
    checkOut: "Check-out",
    totalPrice: "Total Price (per night)",
    comments: "Additional Comments",
    contactInfo: "Contact Information",
    name: "Name",
    email: "Email",
    phone: "Phone",
    receiptAttached: "Payment receipt attached to this email.",
  },
  de: {
    subject: "Neue Buchungsanfrage - Central San Vito Camere",
    greeting: "Neue Buchungsanfrage erhalten",
    personalInfo: "Persönliche Informationen",
    stayDetails: "Aufenthaltsdetails",
    apartment: "Apartment",
    guests: "Gäste",
    adults: "Erwachsene",
    children: "Kinder",
    dates: "Termine",
    checkIn: "Anreise",
    checkOut: "Abreise",
    totalPrice: "Gesamtpreis (pro Nacht)",
    comments: "Zusätzliche Kommentare",
    contactInfo: "Kontaktinformationen",
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    receiptAttached: "Zahlungsbeleg ist dieser E-Mail beigefügt.",
  },
  it: {
    subject: "Nuova Richiesta di Prenotazione - Central San Vito Camere",
    greeting: "Nuova richiesta di prenotazione ricevuta",
    personalInfo: "Informazioni Personali",
    stayDetails: "Dettagli del Soggiorno",
    apartment: "Appartamento",
    guests: "Ospiti",
    adults: "Adulti",
    children: "Bambini",
    dates: "Date",
    checkIn: "Arrivo",
    checkOut: "Partenza",
    totalPrice: "Prezzo Totale (per notte)",
    comments: "Commenti Aggiuntivi",
    contactInfo: "Informazioni di Contatto",
    name: "Nome",
    email: "Email",
    phone: "Telefono",
    receiptAttached: "Ricevuta di pagamento allegata a questa email.",
  },
  sk: {
    subject: "Nová požiadavka na rezerváciu - Central San Vito Camere",
    greeting: "Nová požiadavka na rezerváciu prijatá",
    personalInfo: "Osobné údaje",
    stayDetails: "Podrobnosti o pobyte",
    apartment: "Apartmán",
    guests: "Hostia",
    adults: "Dospelí",
    children: "Deti",
    dates: "Dátumy",
    checkIn: "Príchod",
    checkOut: "Odchod",
    totalPrice: "Celková cena (za noc)",
    comments: "Dodatočné komentáre",
    contactInfo: "Kontaktné informácie",
    name: "Meno",
    email: "Email",
    phone: "Telefón",
    receiptAttached: "Potvrdenie o platbe je priložené k tomuto emailu.",
  },
};
export const apartmentPrices: Record<
  "marina" | "central" | "panoramic",
  {
    base: number;
    perAdult: number;
    perChild: number;
  }
> = {
  marina: { base: 100, perAdult: 0, perChild: 30 },
  central: { base: 100, perAdult: 0, perChild: 30 },
  panoramic: { base: 100, perAdult: 0, perChild: 30 },
};
