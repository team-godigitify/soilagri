"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import {
  rfqSchema,
  generalInquiryOption,
  productOptions,
  type RfqFormValues,
} from "@/lib/validation/rfq.schema";
import { countries } from "@/content/countries";

/**
 * Success state gets real design investment (peak-end, Section 7.8) —
 * this is the last thing the buyer sees.
 */
function SuccessState() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-success/30 bg-success/5 px-6 py-16 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-success/10 text-2xl text-success">
        ✓
      </div>
      <h3 className="text-xl font-semibold text-foreground">Thank you</h3>
      <p className="max-w-[45ch] text-muted-foreground">
        We&apos;ve received your request and will respond within 1-2
        business days.
      </p>
    </div>
  );
}

export function RFQForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  // Edge case 2: a stale/unrecognized ?product= falls back to General inquiry.
  const initialProduct = productOptions.includes(productParam ?? "")
    ? (productParam as string)
    : generalInquiryOption;

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RfqFormValues>({
    resolver: zodResolver(rfqSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      productInterest: initialProduct,
      quantity: "",
      message: "",
      honeypot: "",
    },
  });

  async function onSubmit(values: RfqFormValues) {
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.status === 429) {
        toast.error("Too many requests. Please try again later.");
        return;
      }

      if (!res.ok) {
        toast.error("Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      toast.error("Network error — please check your connection and try again.");
    }
  }

  if (submitted) return <SuccessState />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="rfq-name">Name</FieldLabel>
          <Input id="rfq-name" autoComplete="name" {...register("name")} />
          <FieldError errors={[errors.name]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="rfq-company">Company</FieldLabel>
          <Input id="rfq-company" autoComplete="organization" {...register("company")} />
          <FieldError errors={[errors.company]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="rfq-email">Email</FieldLabel>
          <Input
            id="rfq-email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
          <FieldError errors={[errors.email]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="rfq-phone">Phone (optional)</FieldLabel>
          <Input id="rfq-phone" type="tel" autoComplete="tel" {...register("phone")} />
          <FieldError errors={[errors.phone]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="rfq-country">Country</FieldLabel>
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="rfq-country" className="w-full">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={[errors.country]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="rfq-product">Product Interest</FieldLabel>
          <Controller
            control={control}
            name="productInterest"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="rfq-product" className="w-full">
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  {productOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={[errors.productInterest]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="rfq-quantity">Quantity (optional)</FieldLabel>
          <Input id="rfq-quantity" {...register("quantity")} />
          <FieldError errors={[errors.quantity]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="rfq-message">Message</FieldLabel>
          <Textarea id="rfq-message" rows={5} {...register("message")} />
          <FieldError errors={[errors.message]} />
        </Field>

        {/* Honeypot — off-screen, not display:none (bots skip display:none). */}
        <div
          className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="rfq-website">Website</label>
          <input
            id="rfq-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("honeypot")}
          />
        </div>

        <Button type="submit" variant="cta" size="lg" className="h-11 px-6" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Request a Quote"}
        </Button>
      </FieldGroup>
    </form>
  );
}
