export default function ReviewsPage() {
  const reviews = [
    {
      name: "Residential Client",
      location: "Perth WA",
      text: "Bravo Interiors delivered a clean and professional finish. The flooring work was completed on time and with great attention to detail.",
    },
    {
      name: "Builder / Site Supervisor",
      location: "Commercial Project",
      text: "Reliable, organised, and easy to work with. The team completed the installation to a high standard.",
    },
    {
      name: "Home Renovation Client",
      location: "Perth Metro",
      text: "Very happy with the vinyl flooring and finishing work. Communication was clear and the final result looked excellent.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="bg-black text-white py-28 text-center">
        <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-4">
          Bravo Interiors
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Customer Reviews & Testimonials
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto px-6">
          Feedback from residential and commercial clients across Perth.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Real feedback helps us build trust and continue improving our service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-3xl shadow-lg border border-gray-200"
            >
              <div className="text-orange-400 text-2xl mb-4">★★★★★</div>

              <p className="text-gray-700 leading-relaxed mb-6">
                “{review.text}”
              </p>

              <h3 className="font-bold text-lg">{review.name}</h3>
              <p className="text-gray-500 text-sm">{review.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Worked With Bravo Interiors?
        </h2>

        <p className="text-gray-300 mb-8">
          Your feedback helps future customers choose with confidence.
        </p>

        <a
          href="#"
          className="bg-orange-400 hover:bg-orange-300 text-black px-8 py-4 rounded-2xl font-bold transition"
        >
          Leave a Google Review
        </a>
      </section>
    </main>
  );
}