"use client";

import React, { useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { sendCareerMailAction } from "@/actions/sendCareerMailAction";
import { sendQuoteMailAction } from "@/actions/sendQuoteMailAction";
import { sendContactMailAction } from "@/actions/sendContactMailAction";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    category: "project", // project, career, general
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    preferredContact: "email"
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        });
      } else if (formState.category === "project") {
        result = await sendQuoteMailAction({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          address: formState.address,
          message: formState.message,
          preferredContact: formState.preferredContact as "email" | "phone",
        });
      } else {
        result = await sendContactMailAction({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          address: formState.address,
          message: formState.message,
          preferredContact: formState.preferredContact as "email" | "phone",
        });
      }

      if (result.success) {
        setFormStatus("success");

        setFormState({
          category: "project",
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
          preferredContact: "email",
        });

        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Contact form submit error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-white text-slate-900 font-sans overflow-hidden py-20 lg:py-28">

      {/* PURE PARALLAX BACKDROP ENGINE */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-[0.03] pointer-events-none z-0"
        style={{ backgroundImage: `url('/assets/images/about.jpg')` }}
      />

      {/* Decorative Floating Vector Parallax Blobs */}
      <div className="absolute top-10 left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none z-0" />
      <div className="absolute bottom-10 right-[-10%] w-[40rem] h-[40rem] bg-gradient-to-bl from-indigo-600/10 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none z-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT SIDE: BRIEFING & CORPORATE CHANNELS (Spans 5/12) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
                Contact Workspace
              </span>
              <h2 className="text-4xl font-black tracking-tight text-slate-950 mt-4 leading-tight">
                Have A Project <br />in Mind? Say Hi!
              </h2>
              <p className="mt-4 text-sm text-slate-800 leading-relaxed max-w-md">
                Please give us a call, drop us an email, or fill out the digital transformation intake form and our engineering architects will map out your blueprint.
              </p>
            </div>

            {/* Structured Info Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100/80">
                <div className="p-2.5 h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Address:</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5 leading-relaxed">
                    MBM Silver, Plot L3/60, 3rd Floor, Acharya Vihar, Bhubaneswar, Odisha, India. Pin :751013
                  </p>
                </div>
              </div>

              {/* Email */}
              <a href="mailto:info@maastrixsolutions.com" className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100/80 hover:border-blue-600/30 transition-all group block">
                <div className="p-2.5 h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email:</h4>
                  <p className="text-sm font-bold text-slate-800 mt-0.5 group-hover:text-blue-600 transition-colors">
                    info@maastrixsolutions.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+916742540245" className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100/80 hover:border-blue-600/30 transition-all group block">
                <div className="p-2.5 h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Call:</h4>
                  <p className="text-sm font-bold text-slate-800 mt-0.5 group-hover:text-blue-600 transition-colors">
                    +91-674-2540245 / 2567340
                  </p>
                </div>
              </a>

              {/* Web */}
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100/80">
                <div className="p-2.5 h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Web:</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    www.maastrixsolutions.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: PREMIUM FORM ARCHITECTURE (Spans 7/12) */}
          <div className="lg:col-span-7 relative bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl p-8 md:p-10 shadow-xl shadow-slate-100">

            {/* Smooth Overlay Success Window */}
            <div className={`absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-8 transition-all duration-500 z-20 ${formStatus === "success" ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95 pointer-events-none"}`}>
              <div className="p-3 rounded-full bg-emerald-50 text-emerald-500 mb-4 animate-bounce">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Intake Document Transmitted</h3>
              <p className="text-sm text-slate-500 text-center max-w-sm mt-2">
                Thank you. Your request parameter map has been cataloged. An internal stakeholder will connect via your preferred communication choice.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Web3Forms Honeypot Anti-Spam */}
              {/* <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} /> */}

              {/* INQUIRY CATEGORY BAR */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Identify Purpose / Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "project", label: "Launch Project", desc: "Hire our core dev team" },
                    { id: "career", label: "Join Team / Career", desc: "Connect with HR team" },
                    { id: "general", label: "General Inquiry", desc: "Consultation & strategy" }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setFormState({ ...formState, category: cat.id })}
                      className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${formState.category === cat.id
                        ? "border-blue-600 bg-blue-50/[0.02] ring-2 ring-blue-600/20"
                        : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                    >
                      <span className={`text-xs font-bold ${formState.category === cat.id ? "text-blue-600" : "text-slate-800"}`}>
                        {cat.label}
                      </span>
                      <span className="text-[13px] text-slate-800 mt-1 leading-snug">
                        {cat.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-600">Name*</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full rounded-lg bg-slate-50/50 border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-600">Email*</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full rounded-lg bg-slate-50/50 border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-600">Phone / Mobile #</label>
                <input
                  type="tel"
                  id="phone"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="Enter Your Phone/Mobile #"
                  className="w-full rounded-lg bg-slate-50/50 border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>


              {/* Physical Address Textarea */}
              <div className="space-y-1.5">
                <label htmlFor="address" className="text-xs font-bold uppercase tracking-wider text-slate-600">Your Address</label>
                <textarea
                  id="address"
                  rows={2}
                  value={formState.address}
                  onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                  placeholder="Your Address.."
                  className="w-full rounded-lg bg-slate-50/50 border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Core Messages Textarea */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-600">Your Messages</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Your Messages.."
                  className="w-full rounded-lg bg-slate-50/50 border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Preferred Communication Method Radio Toggles */}
              <div className="space-y-2 border-t border-slate-100 pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Preferred Method Of Contact
                </span>
                <div className="flex gap-6 mt-1">
                  <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formState.preferredContact === "email"}
                      onChange={() => setFormState({ ...formState, preferredContact: "email" })}
                      className="h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-600 focus:ring-offset-0 cursor-pointer"
                    />
                    Email
                  </label>
                  <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formState.preferredContact === "phone"}
                      onChange={() => setFormState({ ...formState, preferredContact: "phone" })}
                      className="h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-600 focus:ring-offset-0 cursor-pointer"
                    />
                    Phone
                  </label>
                </div>
              </div>

              {/* Error Fallback Banner */}
              {formStatus === "error" && (
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-center gap-3 text-rose-700 text-xs font-bold">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>Submission failed. Please try again or contact us directly by email.</span>
                </div>
              )}

              {/* Submit Action Control */}
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 group cursor-pointer disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? (
                  "Transmitting Brief..."
                ) : (
                  <>
                    Submit Request Brief
                    <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
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