import { type z } from "zod";
import { type bookingSchema } from "./constants";

declare global {
  type BookingFormData = z.infer<typeof bookingSchema>;
}
