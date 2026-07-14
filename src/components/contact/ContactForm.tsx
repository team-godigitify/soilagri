"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { rfqSchema, inquiryTypes, type RfqFormValues } from "@/lib/validation/rfq.schema";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const interestGroups = [
  { label: "Fertilizers", items: products.filter((p) => p.category === "fertilizers").map((p) => p.name) },
  {
    label: "Agricultural Commodities",
    items: products.filter((p) => p.category === "agricultural-commodities").map((p) => p.name),
  },
  {
    label: "Industrial Raw Materials",
    items: products.filter((p) => p.category === "industrial-raw-materials").map((p) => p.name),
  },
  { label: "Services", items: services.map((s) => s.name) },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RfqFormValues>({
    resolver: zodResolver(rfqSchema),
    defaultValues: {
      inquiryType: "quote",
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      productInterest: undefined,
      quantity: "",
      message: "",
      honeypot: "",
    },
  });

  // Read outside useSearchParams/Suspense on purpose — that gate forces the
  // static HTML shell to render the Suspense fallback instead of the real
  // form until hydration (a blank flash). Reading window.location directly
  // in an effect keeps the form itself in the static shell and only defers
  // the ?product=/?service= prefill to the client.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const prefillName =
      products.find((p) => p.slug === params.get("product"))?.name ??
      services.find((s) => s.slug === params.get("service"))?.name;
    if (prefillName) setValue("productInterest", prefillName);
  }, [setValue]);

  async function onSubmit(values: RfqFormValues) {
    try {
      const response = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        toast.error(
          response.status === 429
            ? "Too many requests — please try again later."
            : "Something went wrong. Please email us directly instead."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      toast.error("Network error — please email us directly instead.");
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-3xl bg-secondary px-8 py-10 sm:px-10">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <h3 className="font-heading text-2xl font-semibold text-foreground">Request received</h3>
        <p className="max-w-[50ch] text-muted-foreground">
          Thanks — we&apos;ll respond within 24–48 hours. A confirmation has been sent to your email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      {/* Honeypot — off-screen, not display:none, and skipped by keyboard/AT via aria-hidden + tabIndex. */}
      <div className="pointer-events-none absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="rfq-honeypot">Leave this field empty</label>
        <input id="rfq-honeypot" type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="inquiryType">Inquiry Type</FieldLabel>
          <Controller
            control={control}
            name="inquiryType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="inquiryType" className="h-11 w-full">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  {inquiryTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input id="name" className="h-11" {...register("name")} aria-invalid={!!errors.name} />
            <FieldError errors={[errors.name]} />
          </Field>
          <Field>
            <FieldLabel htmlFor="company">Company</FieldLabel>
            <Input id="company" className="h-11" {...register("company")} aria-invalid={!!errors.company} />
            <FieldError errors={[errors.company]} />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              className="h-11"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            <FieldError errors={[errors.email]} />
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Phone (optional)</FieldLabel>
            <Input id="phone" type="tel" className="h-11" {...register("phone")} aria-invalid={!!errors.phone} />
            <FieldError errors={[errors.phone]} />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="country">Country</FieldLabel>
            <Input id="country" className="h-11" {...register("country")} aria-invalid={!!errors.country} />
            <FieldError errors={[errors.country]} />
          </Field>
          <Field>
            <FieldLabel htmlFor="quantity">Quantity (optional)</FieldLabel>
            <Input id="quantity" placeholder="e.g. 500 MT" className="h-11" {...register("quantity")} />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="productInterest">Product / Service Interest (optional)</FieldLabel>
          <Controller
            control={control}
            name="productInterest"
            render={({ field }) => (
              <Select value={field.value ?? null} onValueChange={(value) => field.onChange(value ?? undefined)}>
                <SelectTrigger id="productInterest" className="h-11 w-full">
                  <SelectValue placeholder="Select a product or service" />
                </SelectTrigger>
                <SelectContent>
                  {interestGroups.map((group) => (
                    <SelectGroup key={group.label}>
                      <SelectLabel>{group.label}</SelectLabel>
                      {group.items.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                  <SelectGroup>
                    <SelectLabel>Other</SelectLabel>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea id="message" rows={5} {...register("message")} aria-invalid={!!errors.message} />
          <FieldError errors={[errors.message]} />
        </Field>
      </FieldGroup>

      <Button type="submit" variant="cta" size="xl" disabled={isSubmitting} className="w-fit">
        {isSubmitting ? "Sending…" : "Submit Request"}
      </Button>
    </form>
  );
}
