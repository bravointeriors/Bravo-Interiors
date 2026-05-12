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

  return (
    <section
      id="calculator"
      className="py-28 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm mb-4">
            Instant Estimate
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Detailed Pricing Calculator
          </h2>

          <p className="text-gray-400 text-lg">
            Add one or multiple services to
            generate an estimate instantly.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white text-black rounded-3xl p-10 shadow-2xl">

          {/* SERVICES */}
          <div className="space-y-10">

            {services.map((service, index) => (
              <div
                key={service.id}
                className="border rounded-3xl p-6"
              >

                {/* TOP */}
                <div className="flex justify-between items-center mb-6">

                  <h3 className="text-2xl font-bold">
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

                      Floor Levelling &
                      Screeding
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

          {/* ADD BUTTON */}
          <button
            onClick={addService}
            className="w-full mt-8 border-2 border-dashed border-gray-400 py-4 rounded-2xl font-bold hover:bg-gray-100 transition"
          >
            + Add Another Service
          </button>

          {/* CALCULATE */}
          <button
            onClick={calculatePrice}
            className="w-full mt-8 bg-yellow-500 hover:bg-yellow-400 text-black py-5 rounded-2xl font-bold text-lg transition"
          >
            Calculate Estimate
          </button>

          {/* RESULT */}
          {result && (
            <div className="mt-10 bg-gray-100 rounded-3xl p-8 text-center">

              <p className="text-gray-500 mb-3">
                Estimated Project Range
              </p>

              <h3 className="text-5xl font-bold">
                ${result.low} – ${result.high}
              </h3>

              <p className="text-gray-500 mt-4">
                Final pricing subject to
                on-site inspection.
              </p>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}