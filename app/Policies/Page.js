export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="bg-black text-white py-24 text-center">
        <p className="text-red-600 uppercase tracking-[0.3em] text-sm mb-4">
          Bravo Interiors
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Maintenance & Defects Policy
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto px-6 leading-relaxed">
          This policy outlines the procedures, responsibilities, and warranty
          conditions relating to flooring installations, carpentry works, and
          interior finishing services completed by Bravo Interiors.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-14">
        <PolicySection title="1. Purpose">
          <p>
            The purpose of this policy is to ensure high-quality workmanship,
            clear client expectations, proper maintenance procedures, and
            efficient handling of defects and warranty claims.
          </p>
        </PolicySection>

        <PolicySection title="2. Scope">
          <p>This policy applies to residential and commercial projects involving:</p>
          <List
            items={[
              "Vinyl flooring installations",
              "Carpet tile installations",
              "Floor preparation and levelling works",
              "Skirting board installations",
              "Door installations",
              "Interior finishing works",
              "Caulking and sealant applications",
            ]}
          />
        </PolicySection>

        <PolicySection title="3. Workmanship Warranty">
          <p className="mb-4">
            Bravo Interiors provides a workmanship warranty on completed
            installation works, subject to the conditions below.
          </p>

          <h3 className="font-bold text-xl mb-3">Warranty Coverage</h3>
          <List
            items={[
              "Installation defects",
              "Poor workmanship",
              "Incorrect fitting or fixing",
              "Loose skirting or trims caused by installation failure",
              "Defective caulking application caused by workmanship",
            ]}
          />

          <h3 className="font-bold text-xl mt-6 mb-3">Warranty Exclusions</h3>
          <List
            items={[
              "Normal wear and tear",
              "Damage caused by misuse or abuse",
              "Water damage or flooding",
              "Structural movement",
              "Improper cleaning methods",
              "Damage caused by other contractors or trades",
              "Manufacturer product defects",
              "Excessive moisture issues",
              "Impact damage",
              "Scratches, dents, or cuts after handover",
            ]}
          />
        </PolicySection>

        <PolicySection title="4. Defect Liability Period">
          <List
            items={[
              "Residential projects: 12 months workmanship warranty unless otherwise agreed in writing.",
              "Commercial projects: as per contract or builder agreement.",
              "Clients must notify Bravo Interiors in writing within the applicable defect liability period.",
            ]}
          />
        </PolicySection>

        <PolicySection title="5. Client Maintenance Responsibilities">
          <h3 className="font-bold text-xl mb-3">Flooring</h3>
          <List
            items={[
              "Use manufacturer-recommended cleaning products.",
              "Avoid excessive water exposure.",
              "Use protective furniture pads.",
              "Prevent dragging heavy furniture across surfaces.",
              "Maintain appropriate indoor conditions.",
            ]}
          />

          <h3 className="font-bold text-xl mt-6 mb-3">Carpet Tiles</h3>
          <List
            items={[
              "Vacuum regularly.",
              "Clean spills immediately.",
              "Replace damaged tiles where necessary.",
            ]}
          />

          <h3 className="font-bold text-xl mt-6 mb-3">Skirting Boards & Doors</h3>
          <List
            items={[
              "Avoid excessive impact.",
              "Maintain painted or sealed finishes.",
              "Prevent prolonged moisture exposure.",
            ]}
          />

          <h3 className="font-bold text-xl mt-6 mb-3">Caulking & Sealants</h3>
          <List
            items={[
              "Inspect periodically for movement or cracking.",
              "Avoid harsh chemical cleaners.",
            ]}
          />
        </PolicySection>

        <PolicySection title="6. Defect Reporting Procedure">
          <p>All defects or warranty claims must be submitted in writing and include:</p>
          <List
            items={[
              "Client name",
              "Project address",
              "Description of defect",
              "Photos of affected area",
              "Date defect was identified",
            ]}
          />

          <div className="mt-6 bg-gray-100 rounded-2xl p-6">
            <p><strong>Phone:</strong> 0435 767 933</p>
            <p><strong>Email:</strong> bravo.interiors.au@gmail.com</p>
            <p><strong>Website:</strong> Bravo Interiors</p>
          </div>
        </PolicySection>

        <PolicySection title="7. Inspection & Rectification Process">
          <List
            items={[
              "Bravo Interiors will review the claim.",
              "A site inspection may be scheduled.",
              "Defects determined to be workmanship-related will be rectified within a reasonable timeframe.",
              "Non-warranty items may be quoted separately.",
            ]}
          />
        </PolicySection>

        <PolicySection title="8. Limitation of Liability">
          <p>
            Bravo Interiors’ liability is limited to the rectification or
            replacement of defective workmanship only.
          </p>

          <p className="mt-4">Bravo Interiors is not liable for:</p>
          <List
            items={[
              "Consequential losses",
              "Loss of business or income",
              "Product manufacturer defects",
              "Damage caused by third parties",
              "Pre-existing site conditions outside our control",
            ]}
          />
        </PolicySection>

        <PolicySection title="9. Commercial Project Conditions">
          <List
            items={[
              "Builder contracts and project specifications take precedence where applicable.",
              "Defect liability periods may vary according to contract requirements.",
              "Site access must be provided for inspections and rectification works.",
            ]}
          />
        </PolicySection>

        <PolicySection title="10. Acceptance">
          <p>
            By engaging Bravo Interiors, the client acknowledges and accepts the
            terms outlined within this Maintenance & Defects Policy.
          </p>
        </PolicySection>

        <div className="bg-black text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Bravo Interiors</h2>
          <p className="text-gray-300 mb-4">
            Commercial Flooring & Interior Fit-Out Specialists
          </p>
          <p>Phone: 0435 767 933</p>
          <p>Email: bravo.interiors.au@gmail.com</p>
        </div>
      </section>
    </main>
  );
}

function PolicySection({ title, children }) {
  return (
    <section className="border-b border-gray-200 pb-10">
      <h2 className="text-3xl font-bold mb-5">{title}</h2>
      <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="mt-4 space-y-3 text-gray-700">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="text-red-600 font-bold">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}