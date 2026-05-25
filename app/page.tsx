"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Hotel,
  Crown,
  Coffee,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Globe2,
  Handshake,
  Sparkles,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Hotel,
    title: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    text:
      "Premier hospitality, service management, guest experience, and training solutions built for high standards.",
  },
  {
    icon: Crown,
    title: "VIP Concierge Services",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    text:
      "Luxury concierge support where service excellence, privacy, preference, and comfort come first.",
  },
  {
    icon: Coffee,
    title: "Commodities",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
    text:
      "Strategic commodity partnerships with a strong focus on value addition, reliability, and regional trade.",
  },
];

const clients = [
  "Hospitality Brands",
  "Corporate Partners",
  "Investors",
  "Suppliers",
  "VIP Clients",
  "Regional Businesses",
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    text: "Built to inspire confidence among clients, investors, partners, and communities.",
  },
  {
    icon: Handshake,
    title: "Shared Value",
    text: "Opportunities should create value for the business and the communities around it.",
  },
  {
    icon: Globe2,
    title: "Pan East African Vision",
    text: "Uganda as the foundation, East Africa as the bigger opportunity.",
  },
];

export default function KaziBoraPremiumWebsite() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black font-black shadow-2xl">
              KB
            </div>
            <div>
              <p className="text-sm font-black tracking-wide">KAZIBORA GROUP</p>
              <p className="text-xs text-zinc-400">Pan East African Holding Company</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#clients" className="hover:text-white">
              Clients
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          <Button className="rounded-full bg-white px-6 text-black hover:bg-zinc-200">
            Contact Us
          </Button>
        </div>
      </header>

      <main>
        <section className="relative min-h-[92vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-[1.05fr_0.95fr] md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm text-zinc-200 backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                Hospitality • VIP Concierge • Commodities
              </div>

              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-8xl">
                A premium Pan East African group built for service, trade, and growth.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                KaziBora Group operates across Hospitality, VIP Concierge Services, and Commodities — creating trusted value for clients, partners, suppliers, investors, and communities.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-full bg-white px-8 py-7 text-black hover:bg-zinc-200">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/5 px-8 py-7 text-white hover:bg-white/10"
                >
                  Work With Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl"
            >
              <div className="overflow-hidden rounded-[1.5rem] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium business meeting"
                  className="h-72 w-full object-cover md:h-96"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <Building2 className="h-4 w-4" />
                    Head Office: Kampala, Uganda
                  </div>
                  <h2 className="mt-4 text-3xl font-black">
                    Shared value. Inclusive growth. Sustainable impact.
                  </h2>
                  <p className="mt-4 leading-7 text-zinc-400">
                    A stronger premium identity, while keeping the original KaziBora message clear and professional.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                About KaziBora Group
              </p>
              <h2 className="mt-5 text-5xl font-black leading-tight">
                Diversified. Regional. Built on trust.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                KaziBora Group is a Pan East African diversified holding company operating in Hospitality, VIP Concierge Services, and Commodities.
              </p>
              <p>
                The group is committed to positive change, shared value, inclusiveness, and sustainable growth across the communities and business sectors where it operates.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-5 py-24">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Our Services
              </p>
              <h2 className="mt-5 text-5xl font-black leading-tight">
                The old structure, upgraded into a premium experience.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="group overflow-hidden rounded-[2rem] border-white/10 bg-zinc-950 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-white/25"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                      <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black shadow-xl">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <CardContent className="p-7">
                      <h3 className="text-3xl font-black">{service.title}</h3>
                      <p className="mt-4 leading-8 text-zinc-400">{service.text}</p>
                      <button className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
                >
                  <Icon className="mb-6 h-9 w-9" />
                  <h3 className="text-2xl font-black">{value.title}</h3>
                  <p className="mt-4 leading-7 text-zinc-400">{value.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="clients" className="bg-white text-black">
          <div className="mx-auto max-w-7xl px-5 py-24">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Our Clients & Partners
                </p>
                <h2 className="mt-5 text-5xl font-black leading-tight">
                  Credibility without shouting.
                </h2>
              </div>
              <p className="max-w-md text-zinc-600">
                Add real client logos here later. For now, this gives the site the premium client-section feel from the old website.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex h-28 items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-50 px-4 text-center text-sm font-bold text-zinc-600"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/75" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Contact Us
              </p>
              <h2 className="mt-5 text-5xl font-black leading-tight">
                Start a serious conversation.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                For hospitality, VIP concierge, commodities, partnerships, or investor inquiries, reach out to the KaziBora Group team.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-zinc-400" />
                  <span>
                    6th Floor, Trust Tower
                    <br />
                    P.O. Box 35121
                    <br />
                    Kampala, Uganda
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-zinc-400" />
                  <span>+256 777 481 572</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-zinc-400" />
                  <span>info@kaziboragroup.com</span>
                </div>
              </div>

              <Button className="mt-10 w-full rounded-full bg-white py-7 text-black hover:bg-zinc-200">
                Send Inquiry <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black px-5 py-10 text-center text-sm text-zinc-500">
        © 2026 KaziBora Group — Hospitality • VIP Concierge Services • Commodities
      </footer>
    </div>
  );
}