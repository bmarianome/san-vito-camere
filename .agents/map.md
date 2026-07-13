# Mapa — san-vito-camere

Next 16.2.6 · grade C · tier polished · impls: shadcn-form-sa-resend-emails

## Rutas (src/app)
- (sin route groups)

## Entrypoints
- /[lang]                      -> src/app/[lang]/page.tsx

## Secciones de landing
Todas inline en src/app/[lang]/page.tsx (componentes locales al archivo, no importados):
- Hero -> src/app/[lang]/page.tsx (function Hero)
- Info -> src/app/[lang]/page.tsx (function Info)
- Apartments -> src/app/[lang]/page.tsx (function Apartments)
- Services -> src/app/[lang]/page.tsx (function Services)
- Experiences -> src/app/[lang]/page.tsx (function Experiences)
- City -> src/app/[lang]/page.tsx (function City)
- Events -> src/app/[lang]/page.tsx (function Events)
- CTA -> src/app/[lang]/page.tsx (function CTA)

## Implementaciones
- shadcn-form-sa-resend-emails -> componente src/components/BookingDialog.tsx (form + dialog); server action y envío de email en src/actions.ts

## Datos
- lib/: constants.ts, form-rate-limit.ts, kv.ts, types.ts, utils.ts
- components/: ui/
- Cache tags: (no usa cache tags)

## Hallazgos
(anexar aquí conclusiones de exploraciones que el mapa no cubría; 2-3 líneas
por entrada; si hay más de 10, consolidar antes de agregar)
