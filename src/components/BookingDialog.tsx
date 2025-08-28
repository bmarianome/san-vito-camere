"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Upload, Users, Bed } from "lucide-react";
import { toast } from "sonner";
import { submitBookingAction } from "@/actions";
import { apartmentPrices, bookingSchema } from "@/lib/constants";

const getTexts = (lang: Locale) => ({
  title: {
    en: "Book Your Stay",
    de: "Buchen Sie Ihren Aufenthalt",
    it: "Prenota il Tuo Soggiorno",
    sk: "Rezervujte si svoj pobyt",
  }[lang],
  description: {
    en: "Fill out the form below to reserve your perfect apartment in San Vito Lo Capo",
    de: "Füllen Sie das untenstehende Formular aus, um Ihr perfektes Apartment in San Vito Lo Capo zu reservieren",
    it: "Compila il modulo sottostante per prenotare il tuo appartamento perfetto a San Vito Lo Capo",
    sk: "Vyplňte formulár nižšie a rezervujte si svoj ideálny apartmán v San Vito Lo Capo",
  }[lang],
  personalInfo: {
    en: "Personal Information",
    de: "Persönliche Informationen",
    it: "Informazioni Personali",
    sk: "Osobné údaje",
  }[lang],
  firstName: {
    en: "First Name",
    de: "Vorname",
    it: "Nome",
    sk: "Meno",
  }[lang],
  lastName: {
    en: "Last Name",
    de: "Nachname",
    it: "Cognome",
    sk: "Priezvisko",
  }[lang],
  email: {
    en: "Email",
    de: "E-Mail",
    it: "Email",
    sk: "Email",
  }[lang],
  phone: {
    en: "Phone",
    de: "Telefon",
    it: "Telefono",
    sk: "Telefón",
  }[lang],
  stayDetails: {
    en: "Stay Details",
    de: "Aufenthaltsdetails",
    it: "Dettagli del Soggiorno",
    sk: "Podrobnosti o pobyte",
  }[lang],
  apartment: {
    en: "Apartment",
    de: "Apartment",
    it: "Appartamento",
    sk: "Apartmán",
  }[lang],
  apartmentOptions: {
    marina: {
      en: "Marina Suite - Sea view",
      de: "Marina Suite - Meerblick",
      it: "Suite Marina - Vista mare",
      sk: "Marina Suite - Výhľad na more",
    }[lang],
    central: {
      en: "Central Suite - Plaza view",
      de: "Central Suite - Platzblick",
      it: "Suite Central - Vista piazza",
      sk: "Central Suite - Výhľad na námestie",
    }[lang],
    panoramic: {
      en: "Panoramic Suite - Mountain view",
      de: "Panorama Suite - Bergblick",
      it: "Suite Panoramica - Vista montagna",
      sk: "Panoramatická Suite - Výhľad na hory",
    }[lang],
  },
  adults: {
    en: "Adults",
    de: "Erwachsene",
    it: "Adulti",
    sk: "Dospelí",
  }[lang],
  children: {
    en: "Children",
    de: "Kinder",
    it: "Bambini",
    sk: "Deti",
  }[lang],
  checkIn: {
    en: "Check-in Date",
    de: "Anreisedatum",
    it: "Data di Arrivo",
    sk: "Dátum príchodu",
  }[lang],
  checkOut: {
    en: "Check-out Date",
    de: "Abreisedatum",
    it: "Data di Partenza",
    sk: "Dátum odchodu",
  }[lang],
  receipt: {
    en: "Payment Receipt",
    de: "Zahlungsbeleg",
    it: "Ricevuta di Pagamento",
    sk: "Potvrdenie o platbe",
  }[lang],
  receiptDescription: {
    en: "Upload your payment receipt (PDF, JPG, PNG)",
    de: "Laden Sie Ihren Zahlungsbeleg hoch (PDF, JPG, PNG)",
    it: "Carica la tua ricevuta di pagamento (PDF, JPG, PNG)",
    sk: "Nahrajte potvrdenie o platbe (PDF, JPG, PNG)",
  }[lang],
  comments: {
    en: "Additional Comments",
    de: "Zusätzliche Kommentare",
    it: "Commenti Aggiuntivi",
    sk: "Dodatočné komentáre",
  }[lang],
  commentsPlaceholder: {
    en: "Any special requests or additional information...",
    de: "Besondere Wünsche oder zusätzliche Informationen...",
    it: "Richieste speciali o informazioni aggiuntive...",
    sk: "Špeciálne požiadavky alebo dodatočné informácie...",
  }[lang],
  totalPrice: {
    en: "Total Price",
    de: "Gesamtpreis",
    it: "Prezzo Totale",
    sk: "Celková cena",
  }[lang],
  priceBreakdown: {
    en: "Price per night",
    de: "Preis pro Nacht",
    it: "Prezzo per notte",
    sk: "Cena za noc",
  }[lang],
  basePrice: {
    en: "Base price",
    de: "Grundpreis",
    it: "Prezzo base",
    sk: "Základná cena",
  }[lang],
  adultPrice: {
    en: "Additional adults",
    de: "Zusätzliche Erwachsene",
    it: "Adulti aggiuntivi",
    sk: "Dodatoční dospelí",
  }[lang],
  childPrice: {
    en: "Children",
    de: "Kinder",
    it: "Bambini",
    sk: "Deti",
  }[lang],
  submitButton: {
    en: "Submit Booking",
    de: "Buchung Absenden",
    it: "Invia Prenotazione",
    sk: "Odoslať rezerváciu",
  }[lang],
  submitting: {
    en: "Submitting...",
    de: "Wird gesendet...",
    it: "Invio in corso...",
    sk: "Odosielanie...",
  }[lang],
  successMessage: {
    en: "Booking submitted successfully! We will contact you soon.",
    de: "Buchung erfolgreich übermittelt! Wir werden Sie bald kontaktieren.",
    it: "Prenotazione inviata con successo! Ti contatteremo presto.",
    sk: "Rezervácia bola úspešne odoslaná! Čoskoro vás budeme kontaktovať.",
  }[lang],
  errorMessage: {
    en: "Error submitting booking. Please try again.",
    de: "Fehler beim Übermitteln der Buchung. Bitte versuchen Sie es erneut.",
    it: "Errore nell'invio della prenotazione. Riprova.",
    sk: "Chyba pri odosielaní rezervácie. Skúste to znova.",
  }[lang],
});

export default function BookingDialog({
  children,
  lang = "en",
}: {
  children: React.ReactNode;
  lang?: Locale;
}) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const texts = getTexts(lang);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      adults: 2,
      minors: 0,
      checkIn: "",
      checkOut: "",
      comments: "",
    },
  });

  const watchedValues = form.watch(["apartment", "adults", "minors"]);
  const [selectedApartment, adults, minors] = watchedValues;

  const calculatePrice = () => {
    if (!selectedApartment) return 0;
    const prices = apartmentPrices[selectedApartment];
    const additionalAdults = Math.max(0, adults - 1); // First adult included in base
    return (
      prices.base +
      additionalAdults * prices.perAdult +
      minors * prices.perChild
    );
  };

  const totalPrice = calculatePrice();

  const onSubmit = async (data: BookingFormData) => {
    try {
      setIsSubmitting(true);

      const bookingData = {
        ...data,
        totalPrice,
        lang,
      };

      const result = await submitBookingAction(bookingData);
      if (!result.success) {
        throw new Error("Failed to submit booking");
      }

      setOpen(false);
      form.reset();
      toast.success(texts.successMessage);
    } catch (error) {
      console.error(
        "Error submitting booking:",
        error instanceof Error ? error.message : String(error),
      );
      toast.error(texts.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max- h-[90vh] overflow-y-auto sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#6e4a8d]">
            {texts.title}
          </DialogTitle>
          <DialogDescription className="text-[#6e4a8d]/70">
            {texts.description}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-lg font-semibold text-[#6e4a8d]">
                  <Users className="size-5" />
                  {texts.personalInfo}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{texts.firstName}</FormLabel>
                        <FormControl>
                          <Input placeholder={texts.firstName} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{texts.lastName}</FormLabel>
                        <FormControl>
                          <Input placeholder={texts.lastName} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{texts.email}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="ejemplo@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{texts.phone}</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+39 123 456 7890"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="comments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{texts.comments}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={texts.commentsPlaceholder}
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Stay Details & Price */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-lg font-semibold text-[#6e4a8d]">
                  <Bed className="size-5" />
                  {texts.stayDetails}
                </div>

                <FormField
                  control={form.control}
                  name="apartment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{texts.apartment}</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un apartamento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="marina">
                            {texts.apartmentOptions.marina}
                          </SelectItem>
                          <SelectItem value="central">
                            {texts.apartmentOptions.central}
                          </SelectItem>
                          <SelectItem value="panoramic">
                            {texts.apartmentOptions.panoramic}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="adults"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{texts.adults}</FormLabel>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                          defaultValue={String(field.value)}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={String(num)}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="minors"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{texts.children}</FormLabel>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                          defaultValue={String(field.value)}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                              <SelectItem key={num} value={String(num)}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="checkIn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{texts.checkIn}</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="checkOut"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{texts.checkOut}</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="receipt"
                  render={({ field: { onChange, name } }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Upload className="size-4" />
                        {texts.receipt}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*,application/pdf"
                          name={name}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) onChange(file);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                      <p className="text-xs text-[#6e4a8d]/60">
                        {texts.receiptDescription}
                      </p>
                    </FormItem>
                  )}
                />

                {/* Price Calculator */}
                {selectedApartment && (
                  <div className="rounded-lg border border-[#6e4a8d]/20 bg-gradient-to-br from-[#f8f6ff] to-white p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#6e4a8d]">
                      <Calendar className="size-5" />
                      {texts.totalPrice}
                    </h3>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#6e4a8d]/70">
                          {texts.basePrice}:
                        </span>
                        <span className="font-medium">
                          €{apartmentPrices[selectedApartment].base}
                        </span>
                      </div>

                      {adults > 1 && (
                        <div className="flex justify-between">
                          <span className="text-[#6e4a8d]/70">
                            {texts.adultPrice} ({adults - 1}):
                          </span>
                          <span className="font-medium">
                            €
                            {(adults - 1) *
                              apartmentPrices[selectedApartment].perAdult}
                          </span>
                        </div>
                      )}

                      {minors > 0 && (
                        <div className="flex justify-between">
                          <span className="text-[#6e4a8d]/70">
                            {texts.childPrice} ({minors}):
                          </span>
                          <span className="font-medium">
                            €
                            {minors *
                              apartmentPrices[selectedApartment].perChild}
                          </span>
                        </div>
                      )}

                      <div className="border-t border-[#6e4a8d]/20 pt-2">
                        <div className="flex justify-between text-lg font-bold text-[#6e4a8d]">
                          <span>{texts.priceBreakdown}:</span>
                          <span>€{totalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] hover:from-[#f6a92a] hover:to-[#F59E0B]"
              >
                {isSubmitting ? texts.submitting : texts.submitButton}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
