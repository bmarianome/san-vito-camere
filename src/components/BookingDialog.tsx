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
import {
  Upload,
  Users,
  CreditCard,
  FileText,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  Calendar as CalendarIcon,
} from "lucide-react";
import { toast } from "sonner";
import { submitBookingAction } from "@/actions";
import { apartmentPrices, bookingSchema } from "@/lib/constants";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, differenceInDays } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";

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
  // Step 1 texts
  step1Title: {
    en: "Booking Details & Price",
    de: "Buchungsdetails & Preis",
    it: "Dettagli Prenotazione & Prezzo",
    sk: "Detaily rezervácie & Cena",
  }[lang],
  step1Description: {
    en: "Select your apartment and see the total price. Payment must be made in advance.",
    de: "Wählen Sie Ihr Apartment und sehen Sie den Gesamtpreis. Die Zahlung muss im Voraus erfolgen.",
    it: "Seleziona il tuo appartamento e vedi il prezzo totale. Il pagamento deve essere effettuato in anticipo.",
    sk: "Vyberte si svoj apartmán a pozrite si celkovú cenu. Platba musí byť uhradená vopred.",
  }[lang],
  paymentInstructions: {
    en: "Once you confirm these details, you'll need to make the payment and upload the receipt in the next step.",
    de: "Sobald Sie diese Details bestätigen, müssen Sie die Zahlung vornehmen und die Quittung im nächsten Schritt hochladen.",
    it: "Una volta confermati questi dettagli, dovrai effettuare il pagamento e caricare la ricevuta nel prossimo passaggio.",
    sk: "Po potvrdení týchto údajov budete musieť uskutočniť platbu a nahrať potvrdenie v ďalšom kroku.",
  }[lang],
  // Step 2 texts
  step2Title: {
    en: "Payment Receipt & Personal Information",
    de: "Zahlungsbeleg & Persönliche Informationen",
    it: "Ricevuta di Pagamento & Informazioni Personali",
    sk: "Potvrdenie o platbe & Osobné údaje",
  }[lang],
  step2Description: {
    en: "Upload your payment receipt and provide your contact information to complete the booking.",
    de: "Laden Sie Ihren Zahlungsbeleg hoch und geben Sie Ihre Kontaktdaten an, um die Buchung abzuschließen.",
    it: "Carica la tua ricevuta di pagamento e fornisci le tue informazioni di contatto per completare la prenotazione.",
    sk: "Nahrajte potvrdenie o platbe a poskytnutte kontaktné údaje na dokončenie rezervácie.",
  }[lang],
  // Navigation texts
  nextStep: {
    en: "Continue to Payment",
    de: "Weiter zur Zahlung",
    it: "Continua al Pagamento",
    sk: "Pokračovať na platbu",
  }[lang],
  previousStep: {
    en: "Back",
    de: "Zurück",
    it: "Indietro",
    sk: "Späť",
  }[lang],
  stepIndicator: {
    en: "Step {current} of {total}",
    de: "Schritt {current} von {total}",
    it: "Passaggio {current} di {total}",
    sk: "Krok {current} z {total}",
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
  const [currentStep, setCurrentStep] = useState(1);
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
      dateRange: undefined,
      comments: "",
    },
  });

  const watchedValues = form.watch([
    "apartment",
    "adults",
    "minors",
    "dateRange",
  ]);
  const [selectedApartment, adults, minors, dateRange] = watchedValues;

  const checkIn = dateRange?.from;
  const checkOut = dateRange?.to;

  const calculateDays = () => {
    if (!checkIn || !checkOut) return 1;
    const days = differenceInDays(checkOut, checkIn);
    return Math.max(1, days); // Mínimo 1 día
  };

  const numberOfDays = calculateDays();

  const calculatePrice = () => {
    if (!selectedApartment) return 0;
    const prices = apartmentPrices[selectedApartment];
    const additionalAdults = Math.max(0, adults - 1); // First adult included in base
    const pricePerDay =
      prices.base +
      additionalAdults * prices.perAdult +
      minors * prices.perChild;
    return pricePerDay * numberOfDays;
  };

  const totalPrice = calculatePrice();

  const validateStep1 = () => {
    const apartmentValue = form.getValues("apartment");
    const dateRangeValue = form.getValues("dateRange");

    return apartmentValue && dateRangeValue?.from && dateRangeValue?.to;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!validateStep1()) {
        toast.error(
          "Por favor completa todos los campos requeridos para continuar",
        );
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const resetDialog = () => {
    setCurrentStep(1);
    form.reset();
  };

  const onSubmit = async (data: BookingFormData) => {
    try {
      setIsSubmitting(true);

      // Transform dateRange back to individual checkIn/checkOut for the backend
      const bookingData = {
        ...data,
        checkIn: data.dateRange?.from,
        checkOut: data.dateRange?.to,
        totalPrice,
        lang,
      };

      const result = await submitBookingAction(bookingData);
      if (!result.success) {
        throw new Error("Failed to submit booking");
      }

      setOpen(false);
      resetDialog();
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
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) resetDialog();
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-[#6e4a8d]">
                {currentStep === 1 ? texts.step1Title : texts.step2Title}
              </DialogTitle>
              <DialogDescription className="text-[#6e4a8d]/70">
                {currentStep === 1
                  ? texts.step1Description
                  : texts.step2Description}
              </DialogDescription>
            </div>
            <div className="text-sm font-medium text-[#6e4a8d]">
              {texts.stepIndicator
                .replace("{current}", String(currentStep))
                .replace("{total}", "2")}
            </div>
          </div>

          {/* Step Indicator */}
          <div className="mt-4 flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                currentStep >= 1
                  ? "bg-[#6e4a8d] text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              1
            </div>
            <div
              className={`h-1 w-16 ${currentStep >= 2 ? "bg-[#6e4a8d]" : "bg-gray-200"}`}
            />
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                currentStep >= 2
                  ? "bg-[#6e4a8d] text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              2
            </div>
          </div>
        </DialogHeader>

        <Form {...form}>
          <div className="space-y-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                {/* Apartment Selection & Details */}
                <div className="space-y-6">
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
                                <SelectValue placeholder="Selecciona cantidad" />
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
                                <SelectValue placeholder="Selecciona cantidad" />
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

                  <FormField
                    control={form.control}
                    name="dateRange"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Fechas de Estancia</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                {field.value?.from ? (
                                  field.value.to ? (
                                    <>
                                      {format(field.value.from, "LLL dd, y", {
                                        locale: es,
                                      })}{" "}
                                      -{" "}
                                      {format(field.value.to, "LLL dd, y", {
                                        locale: es,
                                      })}
                                    </>
                                  ) : (
                                    format(field.value.from, "LLL dd, y", {
                                      locale: es,
                                    })
                                  )
                                ) : (
                                  <span>
                                    Selecciona fechas de check-in y check-out
                                  </span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              initialFocus
                              mode="range"
                              defaultMonth={field.value?.from}
                              selected={field.value}
                              onSelect={field.onChange}
                              numberOfMonths={1}
                              disabled={(date) =>
                                date < new Date(new Date().setHours(0, 0, 0, 0))
                              }
                              captionLayout="dropdown"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                        <div className="text-muted-foreground text-xs">
                          Selecciona tu fecha de check-in y check-out
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Price Calculator */}
                  {selectedApartment && (
                    <div className="rounded-lg border border-[#6e4a8d]/20 bg-gradient-to-br from-[#f8f6ff] to-white p-6">
                      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#6e4a8d]">
                        <CreditCard className="size-5" />
                        {texts.totalPrice}
                      </h3>

                      <div className="space-y-2 text-sm">
                        {checkIn && checkOut && (
                          <div className="flex justify-between">
                            <span className="text-[#6e4a8d]/70">Estancia:</span>
                            <span className="font-medium">
                              {numberOfDays}{" "}
                              {numberOfDays === 1 ? "día" : "días"}
                            </span>
                          </div>
                        )}

                        <div className="flex justify-between">
                          <span className="text-[#6e4a8d]/70">
                            {texts.basePrice}:
                          </span>
                          <span className="font-medium">
                            €{apartmentPrices[selectedApartment].base}/día
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
                              /día
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
                              /día
                            </span>
                          </div>
                        )}

                        <div className="border-t border-[#6e4a8d]/20 pt-2">
                          <div className="flex justify-between">
                            <span className="text-[#6e4a8d]/70">
                              Subtotal por día:
                            </span>
                            <span className="font-medium">
                              €
                              {Math.round((totalPrice / numberOfDays) * 100) /
                                100}
                            </span>
                          </div>
                          <div className="flex justify-between text-lg font-bold text-[#6e4a8d]">
                            <span>Total:</span>
                            <span>€{totalPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Payment Instructions */}
                  {selectedApartment && (
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="mt-0.5 size-5 shrink-0 text-amber-600" />
                        <div className="text-sm text-amber-800">
                          <p className="mb-1 font-medium">
                            Instrucciones de Pago
                          </p>
                          <p>{texts.paymentInstructions}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
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

                {/* Summary */}
                {selectedApartment && (
                  <div className="rounded-lg border border-[#6e4a8d]/20 bg-gradient-to-br from-[#f8f6ff] to-white p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#6e4a8d]">
                      <FileText className="size-5" />
                      Resumen de la Reserva
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#6e4a8d]/70">Apartamento:</span>
                        <span className="font-medium">
                          {texts.apartmentOptions[selectedApartment]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6e4a8d]/70">Huéspedes:</span>
                        <span className="font-medium">
                          {adults} adultos{minors > 0 && `, ${minors} niños`}
                        </span>
                      </div>
                      {checkIn && checkOut && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-[#6e4a8d]/70">Check-in:</span>
                            <span className="font-medium">
                              {format(checkIn, "PPP", { locale: es })}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#6e4a8d]/70">
                              Check-out:
                            </span>
                            <span className="font-medium">
                              {format(checkOut, "PPP", { locale: es })}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#6e4a8d]/70">Estancia:</span>
                            <span className="font-medium">
                              {numberOfDays}{" "}
                              {numberOfDays === 1 ? "día" : "días"}
                            </span>
                          </div>
                        </>
                      )}
                      <div className="border-t border-[#6e4a8d]/20 pt-2">
                        <div className="flex justify-between text-lg font-bold text-[#6e4a8d]">
                          <span>Total:</span>
                          <span>€{totalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4">
              {currentStep === 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  disabled={isSubmitting}
                >
                  Cancelar
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePreviousStep}
                  disabled={isSubmitting}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="size-4" />
                  {texts.previousStep}
                </Button>
              )}

              {currentStep === 1 ? (
                <Button
                  type="button"
                  onClick={handleNextStep}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] hover:from-[#f6a92a] hover:to-[#F59E0B]"
                >
                  {texts.nextStep}
                  <ChevronRight className="size-4" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={isSubmitting}
                  className="cursor-pointer bg-gradient-to-r from-[#F59E0B] to-[#f6a92a] hover:from-[#f6a92a] hover:to-[#F59E0B]"
                >
                  {isSubmitting ? texts.submitting : texts.submitButton}
                </Button>
              )}
            </div>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
