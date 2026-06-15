"use client";

import { useState } from "react";
import PricingCalculator from "./PricingCalculator";

export default function BravoInteriorsWebsite() {

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [message, setMessage] = useState("");
const [menuOpen, setMenuOpen] = useState(false);

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-1 py-2">
          <div className="flex items-center">
            <img
              src="/BravoInteriors1.PNG"
              alt="Bravo Interiors"
              className="h-18 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-white">
            <a href="#services" className="hover:text-orange-400 transition">Services</a>
            <a href="#calculator" className="hover:text-orange-400 transition">Pricing</a>
            <a href="/reviews" className="hover:text-orange-400 transition">Reviews</a>
            <a href="/policies" className="hover:text-orange-400 transition">Policy</a>
            <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>

          <a
            href="#contact"
            className="bg-orange-400 hover:bg-orange-300 transition text-black font-semibold px-5 py-3 rounded-xl shadow-lg"
          >
            Get Quote
          </a>
        </div>
        {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-4 text-white">
          <a href="#services" onClick={() => setMenuOpen(false)} className="block">Services</a>
          <a href="#calculator" onClick={() => setMenuOpen(false)} className="block">Pricing</a>
          <a href="/reviews" className="block">Reviews</a>
          <a href="/policies" className="block">Maintenance Policy</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block">Contact</a>
        </div>
      )}
      </header>

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:"url('/bg_BravoInteriors-website.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-white uppercase tracking-[0.5em] mb-4 text-sm">
            Perth Flooring & Interiors Services
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Flooring Solutions & Interior Fit-Outs
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
            At Bravo Interiors, we deliver professional flooring, carpentry, and interior 
            finishing services for residential and commercial projects across Perth. 
            We specialise in floor preparation and installation, vinyl flooring, carpet tiles, 
            skirting boards, door fit-outs, and detailed finishing works including caulking and bathroom accessories. 
            We work closely with builders and site supervisors to deliver reliable, high-quality results on time 
            and to specification.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#calculator"
              className="bg-white hover:bg-orange-400 text-black px-8 py-4 rounded-2xl font-semibold shadow-2xl transition"
            >
              Estimate Your Project
            </a>

            <a
              href="#gallery"
              className="border border-white text-white hover:bg-orange-400 hover:text-black px-8 py-4 rounded-2xl transition"
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
            <h3 className="text-orange-400 font-bold text-lg">High Quality</h3>
            <p className="text-gray-400">Premium workmanship</p>
          </div>

          <div>
            <h3 className="text-orange-400 font-bold text-lg">Reliable</h3>
            <p className="text-gray-400">Professional service</p>
          </div>

          <div>
            <h3 className="text-orange-400 font-bold text-lg">On Time</h3>
            <p className="text-gray-400">Every project delivered fast</p>
          </div>

          <div>
            <h3 className="text-orange-400 font-bold text-lg">Attention To Detail</h3>
            <p className="text-gray-400">Luxury finish guaranteed</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-6">
              Our Services
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Interior Installation Services
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Our services include floor preparation and installation of vinyl flooring and carpet tiles, 
              as well as the removal and disposal of existing flooring materials. 
              We also specialise in skirting board installation, door fit-outs including handles and locks, 
              and detailed finishing work such as caulking for a clean, seamless result. In addition, 
              we install bathroom accessories with accuracy and care to complete the final interior touches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 bg-cover bg-center"
                  style={{ backgroundImage: "url('/bg_VinylPlank.png')" }}>
              <div className="text-orange-400 text-5xl mb-6">▣</div>
              <h3 className="text-2xl font-bold mb-4">Vinyl Flooring</h3>
              <p className="text-gray-200 leading-relaxed">
                Premium vinyl plank flooring installation for residential and commercial spaces.
              </p>
            </div>

            <div className="text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 bg-cover bg-center"
                  style={{ backgroundImage: "url('/bg_CarpetTile.png')" }}>
              <div className="text-orange-400 text-5xl mb-6">▦</div>
              <h3 className="text-2xl font-bold mb-4">Carpet Tiles</h3>
              <p className="text-gray-300 leading-relaxed">
                Low maintenance and easy to clean, carpet tiles are durable, stain-resistant, and simple to replace when needed.
                Their flexible design allows colours, textures, and patterns to be mixed and matched for a unique modern look..
              </p>
            </div>

            <div className="text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 bg-cover bg-center"
                  style={{ backgroundImage: "url('/bg_SkirtingBoards.png')" }}>
              <div className="text-orange-400 text-5xl mb-6">▥</div>
              <h3 className="text-2xl font-bold mb-4">Skirting Boards</h3>
              <p className="text-gray-500 leading-relaxed">
                Precision skirting board installation with premium detailing.
              </p>
            </div>

            <div className="text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 bg-cover bg-center"
                  style={{ backgroundImage: "url('/bg_Doors.png')" }}>
              <div className="text-orange-400 text-5xl mb-6">▦</div>
              <h3 className="text-2xl font-bold mb-4">Door Fit-out</h3>
              <p className="text-gray-300 leading-relaxed">
                Internal door installations, locks, handles and fit-outs.
              </p>
            </div>

            <div className="text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 bg-cover bg-center"
                  style={{ backgroundImage: "url('/bg_floor-levelling.jpeg')" }}>
              <div className="text-orange-400 text-5xl mb-6">▦</div>
              <h3 className="text-2xl font-bold mb-4">Floor Solutions and Preperation</h3>
              <p className="text-gray-100 leading-relaxed">
                Professional floor preparation services including grinding, levelling, screeding, 
                and surface correction to ensure a smooth, durable foundation for all flooring installations. 
                Suitable for residential, commercial, and renovation projects.
              </p>
            </div>

            <div className="text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300 bg-cover bg-center"
                  style={{ backgroundImage: "url('/bg_BathroomAccessories.png')" }}>
              <div className="text-orange-400 text-5xl mb-6">▦</div>
              <h3 className="text-2xl font-bold mb-4">Bathroom Accessories</h3>
              <p className="text-gray-200 leading-relaxed">
                Professional bathroom accessories fit-out services including installation of towel rails, mirrors, 
                soap holders, toilet roll holders, grab rails, and other fixtures with clean, 
                precise finishing for residential and commercial spaces.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-3xl opacity-60 grayscale hover:opacity-80 transition">
              <div className="text-orange-400 text-5xl mb-6">▤</div>
              <h3 className="text-2xl font-bold mb-4">Hybrid Flooring</h3>
              <p className="text-gray-600">Coming soon.</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-3xl opacity-60 grayscale hover:opacity-80 transition">
              <div className="text-orange-400 text-5xl mb-6">▤</div>
              <h3 className="text-2xl font-bold mb-4">Carpet Flooring</h3>
              <p className="text-gray-600">Coming soon.</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-3xl opacity-60 grayscale hover:opacity-80 transition">
              <div className="text-orange-400 text-5xl mb-6">▤</div>
              <h3 className="text-2xl font-bold mb-4">Vinyl Sheets</h3>
              <p className="text-gray-600">Coming soon.</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-3xl opacity-60 grayscale hover:opacity-80 transition">
              <div className="text-orange-400 text-5xl mb-6">▤</div>
              <h3 className="text-2xl font-bold mb-4">Tiles Removal</h3>
              <p className="text-gray-600">Coming soon.</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-3xl opacity-60 grayscale hover:opacity-80 transition">
              <div className="text-orange-400 text-5xl mb-6">▤</div>
              <h3 className="text-2xl font-bold mb-4">Carpet Removal</h3>
              <p className="text-gray-600">Coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <PricingCalculator />

      {/* GALLERY */}
      <section id="gallery" className="hidden py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-4">
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
      <section className=" hidden py-28 bg-gradient-to-r from-black to-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready To Transform Your Space?
          </h2>

          <p className="text-gray-300 text-xl mb-10">
            Professional flooring and interior installation services designed to elevate your property.
          </p>

          <a
            href="#contact"
            className="bg-white hover:bg-gray-400 text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition"
          >
            Request Free Quote
          </a>
        </div>
      </section>

      {/*Testimonials*/}
      <section className="py-24 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-6">
      Testimonials
    </p>

    <h2 className="text-5xl font-bold mb-12">
      Trusted by Perth Clients
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        "Professional service and high-quality finish.",
        "Reliable, clean, and completed the job on time.",
        "Excellent attention to detail from start to finish.",
      ].map((text, index) => (
        <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
          <div className="text-orange-400 text-2xl mb-4">★★★★★</div>
          <p className="text-gray-700 mb-6">“{text}”</p>
          <p className="font-bold">Bravo Interiors Client</p>
        </div>
      ))}
    </div>

    <a
      href="/reviews"
      className="inline-block mt-10 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-800 transition"
    >
      View All Reviews
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
              <p>✉️ quotes@bravointeriors.com.au</p>
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
      <footer className="bg-black text-gray-400 py-3 text-center border-t border-yellow-600">

        {/* TRUST BADGES */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-2 mb-4 text-white/80 text-sm">

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
            <span className="text-orange-400">✔</span>
            Fully Insured
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            <span className="text-orange-400">✔</span>
            ABN Registered
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            <span className="text-orange-400">✔</span>
            Perth Based
          </div>

        </div>

        {/* POLICY LINKS */}
        <div className="flex justify-center gap-6 mb-4 text-sm">

          <a
            href="/policies"
            className="hover:text-white transition"
          >
            Maintenance & Defects Policy
          </a>

        </div>

        {/* COPYRIGHT */}
        <p>
          © 2026 Bravo Interiors. All Rights Reserved.
        </p>

      </footer>
    </div>
  );
}
