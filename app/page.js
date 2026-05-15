"use client";

import { useState } from "react";
import PricingCalculator from "./PricingCalculator";

export default function BravoInteriorsWebsite() {

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/send", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        phone,
        email,
        address,
        message,
      }),
    });

    if (response.ok) {
      alert("Quote request sent successfully!");

      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      setMessage("");

    } else {
      alert("Something went wrong.");
    }

  } catch (error) {
    console.error(error);
    alert("Server error.");
  }
};

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Bravo Interiors Logo"
              className="h-16 w-auto object-contain"
            />
            <div>
              
              <p className="text-red-500 text-sm tracking-[0.3em] uppercase">
                Premium Interior Services
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-white">
            <a href="#services" className="hover:text-red-600 transition">Services</a>
            <a href="#calculator" className="hover:text-red-600 transition">Pricing</a>
            <a href="#gallery" className="hover:text-red-600 transition">Projects</a>
            <a href="#contact" className="hover:text-red-600 transition">Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-white hover:bg-gray-400 transition text-black font-semibold px-5 py-3 rounded-xl shadow-lg"
          >
            Get Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:"url('/bg_BravoInteriors website.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-white uppercase tracking-[0.5em] mb-4 text-sm">
            Perth Premium Flooring Specialists
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Luxury Vinyl Flooring & Interior Fit-Outs
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
            High-end vinyl flooring installations, skirting boards,
            carpentry, door installations and complete interior finishing
            services across Perth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#calculator"
              className="bg-white hover:bg-gray-400 text-black px-8 py-4 rounded-2xl font-semibold shadow-2xl transition"
            >
              Estimate Your Project
            </a>

            <a
              href="#gallery"
              className="border border-white text-white hover:bg-gray-400 hover:text-black px-8 py-4 rounded-2xl transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-black text-white py-8 border-t border-white border-b">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-6 text-center">
          <div>
            <h3 className="text-white font-bold text-lg">High Quality</h3>
            <p className="text-gray-400">Premium workmanship</p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg">Reliable</h3>
            <p className="text-gray-400">Professional service</p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg">On Time</h3>
            <p className="text-gray-400">Every project delivered fast</p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg">Attention To Detail</h3>
            <p className="text-gray-400">Luxury finish guaranteed</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-red-600 uppercase tracking-[0.3em] text-sm mb-4">
              Our Services
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Complete Interior Installation Services
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Bravo Interiors is a premium multi-service
              installation business while specialising in vinyl flooring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black text-white p-8 rounded-3xl shadow-2xl border border-red-600 hover:-translate-y-2 transition duration-300">
              <div className="text-red-600 text-5xl mb-6">▣</div>
              <h3 className="text-2xl font-bold mb-4">Vinyl Flooring</h3>
              <p className="text-gray-300 leading-relaxed">
                Premium vinyl plank flooring installation for residential and commercial spaces.
              </p>
            </div>

            <div className="bg-black text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-red-600 text-5xl mb-6">▥</div>
              <h3 className="text-2xl font-bold mb-4">Skirting Boards</h3>
              <p className="text-gray-300 leading-relaxed">
                Precision skirting board installation with premium detailing.
              </p>
            </div>

            <div className="bg-black text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-red-600 text-5xl mb-6">▦</div>
              <h3 className="text-2xl font-bold mb-4">Door Installation</h3>
              <p className="text-gray-300 leading-relaxed">
                Internal door installations, locks, handles and fit-outs.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-3xl opacity-60 grayscale hover:opacity-80 transition">
              <div className="text-red-600 text-5xl mb-6">▤</div>
              <h3 className="text-2xl font-bold mb-4">Hybrid Flooring</h3>
              <p className="text-gray-600">Coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <PricingCalculator />

      {/* GALLERY */}
      <section id="gallery" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-600 uppercase tracking-[0.3em] text-sm mb-4">
              Recent Projects
            </p>
            <h2 className="text-5xl font-bold">Our Work</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl h-80 object-cover w-full shadow-2xl"
            />

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl h-80 object-cover w-full shadow-2xl"
            />

            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl h-80 object-cover w-full shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-black to-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready To Transform Your Space?
          </h2>

          <p className="text-gray-300 text-xl mb-10">
            Premium flooring and interior installation services designed to elevate your property.
          </p>

          <a
            href="#contact"
            className="bg-white hover:bg-gray-400 text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition"
          >
            Request Free Quote
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-600 uppercase tracking-[0.3em] text-sm mb-4">
              Contact Us
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Get Your Free Quote
            </h2>

            <div className="space-y-6 text-lg text-gray-700">
              <p>✉️ Bravo.interiors.au@gmail.com</p>
              <p>📍 Servicing Residential & Commercial Projects Across Western Australia</p>
            </div>
          </div>

            <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-10 rounded-3xl shadow-2xl space-y-5"
            >
            <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-5 rounded-2xl border border-gray-300"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-5 rounded-2xl border border-gray-300"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-5 rounded-2xl border border-gray-300"
          />

          <input
            type="text"
            placeholder="Project Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-5 rounded-2xl border border-gray-300"
          />

          <textarea
            placeholder="Describe your project..."
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-5 rounded-2xl border border-gray-300"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black hover:bg-zinc-800 text-white py-5 rounded-2xl font-bold text-lg transition"
          >
            Submit Quote Request
          </button>
        </form>
        
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-10 text-center border-t border-yellow-600">
        <p>© 2026 Bravo Interiors. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
