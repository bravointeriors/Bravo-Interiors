"use client";

import { useState } from "react";

export default function PricingCalculator() {
  const [services, setServices] = useState([
    { id: 1, type: "vinyl" },
  ]);

  const [sqm, setSqm] = useState("");
  const [vinylSupply, setVinylSupply] = useState(false);
  const [levelling, setLevelling] = useState(false);
  const [removal, setRemoval] = useState(false);

  const [skirtingLm, setSkirtingLm] = useState("");
  const [skirtingSupply, setSkirtingSupply] = useState(false);

  const [doors, setDoors] = useState("");
  const [doorSupply, setDoorSupply] = useState(false);
  const [handles, setHandles] = useState(false);
  const [locks, setLocks] = useState(false);

  const [result, setResult] = useState(null);

  const [showCustomerForm, setShowCustomerForm] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");

  // =========================
  // ADD SERVICE
  // =========================

  const addService = () => {
    setServices([
      ...services,
      {
        id: Date.now(),
        type: "vinyl",
      },
    ]);
  };

  // =========================
  // REMOVE SERVICE
  // =========================

  const removeService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  // =========================
  // CHANGE SERVICE TYPE
  // =========================

  const changeServiceType = (
    id,
    value
  ) => {
    setServices(
      services.map((service) =>
        service.id === id
          ? { ...service, type: value }
          : service
      )
    );
  };

  // =========================
  // CALCULATE
  // =========================

  const calculatePrice = () => {
    let lowTotal = 0;
    let highTotal = 0;

    const sqmValue = parseFloat(sqm) || 0;
    const skirtingValue =
      parseFloat(skirtingLm) || 0;
    const doorsValue = parseFloat(doors) || 0;

    services.forEach((service) => {
      // =========================
      // VINYL
      // =========================

      if (service.type === "vinyl") {
        // Installation auto-applied
        lowTotal += sqmValue * 25;
        highTotal += sqmValue * 40;

        if (vinylSupply) {
          lowTotal += sqmValue * 30;
          highTotal += sqmValue * 55;
        }

        if (levelling) {
          lowTotal += sqmValue * 15;
          highTotal += sqmValue * 25;
        }

        if (removal) {
          lowTotal += sqmValue * 10;
          highTotal += sqmValue * 18;
        }
      }

      // =========================
      // SKIRTING
      // =========================

      if (service.type === "skirting") {
        // Installation auto-applied
        lowTotal += skirtingValue * 12;
        highTotal += skirtingValue * 20;

        if (skirtingSupply) {
          lowTotal += skirtingValue * 8;
          highTotal += skirtingValue * 15;
        }
      }

      // =========================
      // DOORS
      // =========================

      if (service.type === "doors") {
        // Installation auto-applied
        lowTotal += doorsValue * 120;
        highTotal += doorsValue * 220;

        if (doorSupply) {
          lowTotal += doorsValue * 180;
          highTotal += doorsValue * 450;
        }

        if (handles) {
          lowTotal += doorsValue * 35;
          highTotal += doorsValue * 90;
        }

        if (locks) {
          lowTotal += doorsValue * 45;
          highTotal += doorsValue * 120;
        }
      }
    });

      setResult({
        low: lowTotal.toFixed(0),
        high: highTotal.toFixed(0),
      });
    };

    const submitLead = async () => {

  // VALIDATION
  if (
    !customerName ||
    !phone ||
    !email ||
    !suburb
  ) {
    alert("Please complete all fields.");
    return;
  }

  // CALCULATE INTERNALLY
  calculatePrice();

  try {

    const response = await fetch("/api/send", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        customerName,
        phone,
        email,
        suburb,
        services,
        sqm,
        skirtingLm,
        doors,
      }),
    });

    if (response.ok) {

      setResult(true);

    } else {

      alert("Something went wrong.");

    }

  } catch (error) {

    console.error(error);
    alert("Server error.");

  }
};

  return (
  <section
    id="calculator"
    className="py-28 bg-black text-white"
  >
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT SIDE */}
      <div>

        <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-4">
          Free Estimate
        </p>

        <h2 className="text-5xl font-bold leading-tight">
          Interior &
          Flooring Solutions
        </h2>

        <p className="text-gray-400 text-lg mt-6 leading-relaxed">
          Get a professional project estimate tailored to your property.
          Our team will review your project and contact you with pricing,
          recommendations, and availability.
        </p>

        <div className="mt-10 space-y-4 text-gray-300">

          <div className="flex items-center gap-3">
            <span>✔</span>
            <span>Residential & Commercial</span>
          </div>

          <div className="flex items-center gap-3">
            <span>✔</span>
            <span>Fast Turnaround Times</span>
          </div>

          <div className="flex items-center gap-3">
            <span>✔</span>
            <span>Professional Installation Team</span>
          </div>

          <div className="flex items-center gap-3">
            <span>✔</span>
            <span>Premium Materials Available</span>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center lg:justify-end">

        {/* FLOATING CARD */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

          <h3 className="text-3xl font-bold mb-2">
            Get Your Estimate
          </h3>

          <p className="text-gray-300 mb-8">
            Complete the form below and our team will contact you shortly.
          </p>

          {/* SERVICES */}
          {!showCustomerForm && (
          <div className="space-y-8">

            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white text-black rounded-3xl p-6"
              >

                {/* TOP */}
                <div className="flex justify-between items-center mb-6">

                  <h3 className="text-xl font-bold">
                    Service {index + 1}
                  </h3>

                  <button
                    onClick={() =>
                      removeService(service.id)
                    }
                    className="text-red-500 font-semibold"
                  >
                    Remove
                  </button>

                </div>

                {/* DROPDOWN */}
                <div className="mb-6">

                  <label className="block mb-2 font-semibold">
                    Select Service
                  </label>

                  <select
                    value={service.type}
                    onChange={(e) =>
                      changeServiceType(
                        service.id,
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-2xl p-4"
                  >
                    <option value="vinyl">
                      Vinyl Flooring
                    </option>

                    <option value="skirting">
                      Skirting Boards
                    </option>

                    <option value="doors">
                      Door Installation
                    </option>

                  </select>

                </div>

                {/* VINYL */}
                {service.type === "vinyl" && (
                  <div className="space-y-5">

                    <div>
                      <label className="block mb-2 font-semibold">
                        Floor Area (sqm)
                      </label>

                      <input
                        type="number"
                        value={sqm}
                        onChange={(e) =>
                          setSqm(e.target.value)
                        }
                        placeholder="e.g. 60"
                        className="w-full border border-gray-300 rounded-2xl p-4"
                      />
                    </div>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={vinylSupply}
                        onChange={() =>
                          setVinylSupply(
                            !vinylSupply
                          )
                        }
                      />

                      Include Vinyl Supply
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={levelling}
                        onChange={() =>
                          setLevelling(!levelling)
                        }
                      />

                      Floor Levelling & Screeding
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={removal}
                        onChange={() =>
                          setRemoval(!removal)
                        }
                      />

                      Tile/Carpet Removal
                    </label>

                  </div>
                )}

                {/* SKIRTING */}
                {service.type === "skirting" && (
                  <div className="space-y-5">

                    <div>
                      <label className="block mb-2 font-semibold">
                        Lineal Metres
                      </label>

                      <input
                        type="number"
                        value={skirtingLm}
                        onChange={(e) =>
                          setSkirtingLm(
                            e.target.value
                          )
                        }
                        placeholder="e.g. 40"
                        className="w-full border border-gray-300 rounded-2xl p-4"
                      />
                    </div>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={skirtingSupply}
                        onChange={() =>
                          setSkirtingSupply(
                            !skirtingSupply
                          )
                        }
                      />

                      Include Skirting Supply
                    </label>

                  </div>
                )}

                {/* DOORS */}
                {service.type === "doors" && (
                  <div className="space-y-5">

                    <div>
                      <label className="block mb-2 font-semibold">
                        Number of Doors
                      </label>

                      <input
                        type="number"
                        value={doors}
                        onChange={(e) =>
                          setDoors(e.target.value)
                        }
                        placeholder="e.g. 5"
                        className="w-full border border-gray-300 rounded-2xl p-4"
                      />
                    </div>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={doorSupply}
                        onChange={() =>
                          setDoorSupply(
                            !doorSupply
                          )
                        }
                      />

                      Include Door Supply
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={handles}
                        onChange={() =>
                          setHandles(!handles)
                        }
                      />

                      Include Door Handles
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={locks}
                        onChange={() =>
                          setLocks(!locks)
                        }
                      />

                      Include Door Locks
                    </label>

                  </div>
                )}

              </div>
            ))}

          </div>
          )}
                    
          {/* CUSTOMER INFO */}
          {showCustomerForm && (
          <div className="mt-10 bg-white text-black rounded-3xl p-6">

            <h3 className="text-2xl font-bold mb-6">
              Your Details
            </h3>

            <div className="space-y-5">

              {/* NAME */}
              <div>
                <label className="block mb-2 font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  value={customerName}
                  onChange={(e) =>
                    setCustomerName(e.target.value)
                  }
                  placeholder="John Smith"
                  className="w-full border border-gray-300 rounded-2xl p-4"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block mb-2 font-semibold">
                  Phone Number
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  placeholder="0412 345 678"
                  className="w-full border border-gray-300 rounded-2xl p-4"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2 font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="john@email.com"
                  className="w-full border border-gray-300 rounded-2xl p-4"
                />
              </div>

              {/* SUBURB */}
              <div>
                <label className="block mb-2 font-semibold">
                  Suburb
                </label>

                <input
                  type="text"
                  value={suburb}
                  onChange={(e) =>
                    setSuburb(e.target.value)
                  }
                  placeholder="Perth"
                  className="w-full border border-gray-300 rounded-2xl p-4"
                />
              </div>
            </div>
            {/* SUBMIT BUTTON */}
            <button
              onClick={submitLead}
              className="w-full mt-8 bg-orange-400 hover:bg-orange-300 text-black py-5 rounded-2xl font-bold text-lg transition"
            >
              Submit Request
            </button>
          </div>
          )}

          {/* ADD BUTTON */}
          {!showCustomerForm && (
          <button
            onClick={addService}
            className="w-full mt-8 border border-white/30 py-4 rounded-2xl font-bold hover:bg-white/10 transition"
          >
            + Add Another Service
          </button>
          )}
          {/* SHOW ESTIMATE BUTTON */}
          {!showCustomerForm && (
          <button
            onClick={() => setShowCustomerForm(true)}
            className="w-full mt-8 bg-orange-400 hover:bg-orange-300 text-black py-5 rounded-2xl font-bold text-lg transition"
          >
            Continue
          </button>
          )}
          {/* SUCCESS MESSAGE */}
{result && (
  <div className="mt-10 bg-green-500/10 border border-green-500/30 rounded-3xl p-8 text-center">

    <div className="text-5xl mb-4">
      ✓
    </div>

    <h3 className="text-3xl font-bold mb-4 text-white">
      Request Submitted Successfully
    </h3>

    <p className="text-gray-300 text-lg leading-relaxed">
      Thank you for contacting Bravo Interiors.
      <br /><br />
      Your project request has been received and
      our team will email you your estimate shortly.
    </p>

  </div>
)}

        </div>
      </div>
    </div>
  </section>
);
}