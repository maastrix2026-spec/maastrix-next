"use client";

import React, { useState } from "react";
import { Send, CheckCircle, ShieldCheck, AlertCircle, Building2, Globe2 } from "lucide-react";
import { sendQuoteMailAction } from "@/actions/sendQuoteMailAction";
import { Turnstile } from "@marsidev/react-turnstile";

export default function QuoteForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [token, setToken] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      country: String(formData.get("country") || ""),
      message: String(formData.get("message") || ""),
      preferredContact: "email" as const,
    };

    try {
      const result = await sendQuoteMailAction(payload, token);

      if (result.success) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error("Quote form submit error:", err);
      setFormStatus("error");
    }
  };

  if (formStatus === "success") {
    return (
      <div className="max-w-2xl mx-auto my-16 p-10 bg-white border border-slate-200 rounded-3xl text-center space-y-5 shadow-xl shadow-slate-100/40">
        <div className="mx-auto h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
          <CheckCircle className="h-6 w-6" />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">Brief Securely Transmitted</h3>
        <p className="text-sm text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
          Your project objectives have safely bypassed traditional triage queues. An engineering lead will review your architecture specifications within 24 business hours.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-16 lg:my-24 px-6 w-full">
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-100/40 space-y-10 relative overflow-hidden">

        {/* Subtle top branding line */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600" />

        {/* Section Heading Setup */}
        <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-50 border border-slate-200/60 rounded-xl">
              <Building2 className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-950 uppercase tracking-wider">
                Project Operational RFP
              </h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">Secure Intake Channel</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-wider self-start sm:self-center">
            <Globe2 className="h-3.5 w-3.5 text-slate-400" />
            Global Routing Active
          </div>
        </div>

        {/* Core Submission Interface */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* 1. Core Profile Identity Layer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[11px] font-black uppercase tracking-widest text-slate-800 block">
                Full Name <span className="text-blue-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="e.g., Alexander Wright"
                className="w-full text-sm font-medium px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/30 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-md focus:shadow-blue-500/[0.03] transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-[11px] font-black uppercase tracking-widest text-slate-800 block">
                Corporate Email <span className="text-blue-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="alexander@enterprise.com"
                className="w-full text-sm font-medium px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/30 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-md focus:shadow-blue-500/[0.03] transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-[11px] font-black uppercase tracking-widest text-slate-800 block">
                Contact Phone Number <span className="text-blue-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="+1 (555) 000-0000"
                className="w-full text-sm font-medium px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/30 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-md focus:shadow-blue-500/[0.03] transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="text-[11px] font-black uppercase tracking-widest text-slate-800 block">
                Operating Country / Region <span className="text-blue-600">*</span>
              </label>
              <input
                type="text"
                name="country"
                id="country"
                required
                placeholder="e.g., United States"
                className="w-full text-sm font-medium px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/30 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-md focus:shadow-blue-500/[0.03] transition-all duration-200"
              />
            </div>
          </div>

          {/* 2. Deep Project Objectives Layer */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-[11px] font-black uppercase tracking-widest text-slate-800 block">
              Project Descriptions & Core Objectives <span className="text-blue-600">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={6}
              placeholder="Outline your baseline platform vision, data throughput expectations, delivery target timelines, or unique architectural challenges..."
              className="w-full text-sm font-medium px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/30 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-md focus:shadow-blue-500/[0.03] transition-all duration-200 resize-y min-h-[140px]"
            />
          </div>

          {/* Security & Operational Transparency Flags */}
          <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold tracking-wide">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>End-to-end data encryption applied to outbound transmission</span>
          </div>

          {/* Error Intercept View */}
          {formStatus === "error" && (
            <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-center gap-3 text-rose-700 text-xs font-bold animate-in fade-in slide-in-from-top-1">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>Transmission failure. Verify network connection metrics or contact support directly.</span>
            </div>
          )}

          <div className="flex w-full justify-center sm:justify-start">
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={(token) => setToken(token)}
              options={{
                theme: 'light',
                size: 'normal',
              }}
            />
          </div>

          {/* Submit Action Interface */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-slate-950 hover:bg-blue-600 disabled:bg-slate-400 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-200 cursor-pointer disabled:cursor-not-allowed shadow-md hover:shadow-xl hover:shadow-blue-600/10 active:scale-[0.99]"
            >
              {formStatus === "submitting" ? (
                "Transmitting Operational Briefing..."
              ) : (
                <>
                  Submit Project Brief
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}