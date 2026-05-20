export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-white text-black">

      <section className="bg-black text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Maintenance & Defects Policy
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Bravo Interiors is committed to delivering high-quality workmanship and professional service.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Flooring Maintenance
          </h2>

          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li>• Avoid excessive moisture and standing water.</li>
            <li>• Use felt pads under furniture.</li>
            <li>• Clean flooring using manufacturer-approved products only.</li>
            <li>• Avoid dragging heavy objects across flooring.</li>
            <li>• Maintain indoor temperature and humidity where possible.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Defects Liability Period
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Bravo Interiors provides a workmanship defects liability period of 12 months from practical completion unless otherwise stated in writing.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Exclusions
          </h2>

          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li>• Damage caused by water leaks or flooding.</li>
            <li>• Damage resulting from misuse or neglect.</li>
            <li>• Wear and tear considered normal use.</li>
            <li>• Movement in building structure or subfloor.</li>
            <li>• Third-party modifications or repairs.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Reporting Defects
          </h2>

          <p className="text-gray-700 leading-relaxed">
            All defect claims must be submitted in writing with supporting photographs and project details.
          </p>
        </div>

      </section>
    </div>
  );
}