"use client";
import { Turnstile } from '@marsidev/react-turnstile';
import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { sendCareerMailAction } from "@/actions/sendCareerMailAction";
import { sendContactMailAction } from "@/actions/sendContactMailAction";
import { sendQuoteMailAction } from "@/actions/sendQuoteMailAction";

type InquiryCategory = "project" | "career" | "general";
type PreferredContact = "email" | "phone";
type FormStatus = "idle" | "submitting" | "success" | "error";

interface ContactFormState {
  category: InquiryCategory;
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  preferredContact: PreferredContact;
}

const INITIAL_FORM_STATE: ContactFormState = {
  category: "project",
  name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
  preferredContact: "email",
};

const inquiryCategories: Array<{
  id: InquiryCategory;
  label: string;
  description: string;
}> = [
    {
      id: "project",
      label: "Launch Project",
      description: "Hire our core development team",
    },
    {
      id: "career",
      label: "Join Team / Career",
      description: "Connect with our HR team",
    },
    {
      id: "general",
      label: "General Inquiry",
      description: "Consultation and strategy",
    },
  ];

const inputClassName =
  "w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-base text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 sm:text-sm";

export default function ContactSection() {
  const [formState, setFormState] =
    useState<ContactFormState>(INITIAL_FORM_STATE);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [token, setToken] = useState<string>("");
  const updateFormField = <K extends keyof ContactFormState>(
    field: K,
    value: ContactFormState[K],
  ) => {
    setFormState((current) => ({ ...current, [field]: value }));

    if (formStatus === "error") {
      setFormStatus("idle");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!token) {
      alert("Please complete the verification challenge.");
      return;
    }

    if (formStatus === "submitting") return;

    setFormStatus("submitting");

    try {
      let result;

      if (formState.category === "career") {
        result = await sendCareerMailAction({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          address: formState.address,
          message: formState.message,
        }, token);
      } else if (formState.category === "project") {
        result = await sendQuoteMailAction({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          address: formState.address,
          message: formState.message,
          preferredContact: formState.preferredContact,
        });
      } else {
        result = await sendContactMailAction({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          address: formState.address,
          message: formState.message,
          preferredContact: formState.preferredContact,
        });
      }

      if (result.success) {
        setFormStatus("success");
        setFormState(INITIAL_FORM_STATE);
        window.setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Contact form submit error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-white py-14 font-sans text-slate-900 sm:py-16 md:py-20 lg:py-24 xl:py-28"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center opacity-[0.03] md:bg-fixed"
        style={{ backgroundImage: "url('/assets/images/about.jpg')" }}
      />

      {/* Decorative ambient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-8 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-600/10 to-transparent blur-3xl sm:h-96 sm:w-96 lg:h-[40rem] lg:w-[40rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-40 -z-10 h-72 w-72 rounded-full bg-gradient-to-bl from-indigo-600/10 to-transparent blur-3xl sm:h-96 sm:w-96 lg:h-[40rem] lg:w-[40rem]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* Contact information */}
          <div className="min-w-0 space-y-7 lg:col-span-5 xl:sticky xl:top-24">
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600 sm:px-4 sm:text-xs sm:tracking-widest">
                Contact Workspace
              </span>

              <h2 className="mt-4 max-w-xl text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-5xl">
                Let&apos;s Discuss Your Next Digital Initiative.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                Whether you&apos;re planning an AI-powered solution, enterprise
                application, CRM implementation, ecommerce platform, or custom
                software, our team is ready to understand your goals and
                recommend the right technology approach.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex min-w-0 items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/90 p-4 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Address
                  </h3>
                  <p className="mt-1 break-words text-sm font-semibold leading-6 text-slate-800">
                    MBM Silver, Plot L3/60, 3rd Floor, Acharya Vihar,
                    Bhubaneswar, Odisha, India, 751013
                  </p>
                </div>
              </div>

              <a
                href="mailto:info@maastrixsolutions.com"
                className="group flex min-w-0 items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/90 p-4 transition hover:-translate-y-0.5 hover:border-blue-600/30 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/15 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-105">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email
                  </h3>
                  <p className="mt-1 break-all text-sm font-bold text-slate-800 transition-colors group-hover:text-blue-600">
                    info@maastrixsolutions.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+916742540245"
                className="group flex min-w-0 items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/90 p-4 transition hover:-translate-y-0.5 hover:border-blue-600/30 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/15 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-105">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Call
                  </h3>
                  <p className="mt-1 break-words text-sm font-bold leading-6 text-slate-800 transition-colors group-hover:text-blue-600">
                    +91-674-2540245 / 2567340
                  </p>
                </div>
              </a>

              <a
                href="https://www.maastrixsolutions.com"
                target="_blank"
                rel="noreferrer"
                className="group flex min-w-0 items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/90 p-4 transition hover:-translate-y-0.5 hover:border-blue-600/30 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/15 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-105">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Web
                  </h3>
                  <p className="mt-1 break-all text-sm font-semibold text-slate-800 transition-colors group-hover:text-blue-600">
                    www.maastrixsolutions.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-xl shadow-slate-200/50 backdrop-blur-md sm:p-6 md:p-8 lg:col-span-7 lg:p-8 xl:p-10">
            <div
              role="status"
              aria-live="polite"
              className={`absolute inset-0 z-20 flex flex-col items-center justify-center rounded-2xl bg-white/95 p-6 text-center backdrop-blur-sm transition-all duration-500 sm:p-8 ${formStatus === "success"
                ? "visible scale-100 opacity-100"
                : "invisible pointer-events-none scale-95 opacity-0"
                }`}
            >
              <div className="mb-4 rounded-full bg-emerald-50 p-3 text-emerald-500">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 sm:text-xl">
                Request submitted successfully
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                Thank you. Our team has received your request and will contact
                you through your preferred communication method.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <fieldset className="space-y-3">
                <legend className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Identify purpose / category
                </legend>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  {inquiryCategories.map((category) => {
                    const isSelected = formState.category === category.id;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => updateFormField("category", category.id)}
                        className={`min-h-[88px] rounded-xl border p-4 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/15 ${isSelected
                          ? "border-blue-600 bg-blue-50/70 ring-2 ring-blue-600/15"
                          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
                          }`}
                      >
                        <span
                          className={`block text-sm font-bold md:text-xs xl:text-sm ${isSelected ? "text-blue-600" : "text-slate-800"
                            }`}
                        >
                          {category.label}
                        </span>
                        <span className="mt-1.5 block text-xs leading-5 text-slate-500">
                          {category.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div className="min-w-0 space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-wider text-slate-600"
                  >
                    Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formState.name}
                    onChange={(event) =>
                      updateFormField("name", event.target.value)
                    }
                    placeholder="Enter your name"
                    className={inputClassName}
                  />
                </div>

                <div className="min-w-0 space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-slate-600"
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    value={formState.email}
                    onChange={(event) =>
                      updateFormField("email", event.target.value)
                    }
                    placeholder="Enter your email"
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold uppercase tracking-wider text-slate-600"
                >
                  Phone / mobile number
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={formState.phone}
                  onChange={(event) =>
                    updateFormField("phone", event.target.value)
                  }
                  placeholder="Enter your phone number"
                  className={inputClassName}
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="address"
                  className="text-xs font-bold uppercase tracking-wider text-slate-600"
                >
                  Your address
                </label>
                <textarea
                  id="address"
                  rows={2}
                  autoComplete="street-address"
                  value={formState.address}
                  onChange={(event) =>
                    updateFormField("address", event.target.value)
                  }
                  placeholder="Enter your address"
                  className={`${inputClassName} min-h-24 resize-y`}
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-wider text-slate-600"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(event) =>
                    updateFormField("message", event.target.value)
                  }
                  placeholder="Tell us about your requirement"
                  className={`${inputClassName} min-h-36 resize-y`}
                />
              </div>

              <fieldset className="space-y-3 border-t border-slate-100 pt-5">
                <legend className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Preferred method of contact
                </legend>

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {(["email", "phone"] as PreferredContact[]).map((method) => (
                    <label
                      key={method}
                      className="inline-flex min-h-11 cursor-pointer select-none items-center gap-2 rounded-lg px-1 text-sm font-semibold capitalize text-slate-700"
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={formState.preferredContact === method}
                        onChange={() =>
                          updateFormField("preferredContact", method)
                        }
                        className="h-4 w-4 cursor-pointer border-slate-300 text-blue-600 focus:ring-blue-600 focus:ring-offset-0"
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </fieldset>

              {formStatus === "error" && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-rose-100 bg-rose-50 p-4 text-xs font-bold leading-5 text-rose-700 sm:items-center"
                >
                  <AlertCircle
                    className="mt-0.5 h-4 w-4 shrink-0 sm:mt-0"
                    aria-hidden="true"
                  />
                  <span>
                    Submission failed. Please try again or contact us directly
                    by email.
                  </span>
                </div>
              )}

              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={(token) => setToken(token)}
              />

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="group inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/25 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none sm:px-6 sm:py-4 sm:tracking-widest"
              >
                {formStatus === "submitting" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit request brief
                    <Send
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}