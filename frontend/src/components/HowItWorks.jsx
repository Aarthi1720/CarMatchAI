export default function HowItWorks() {
  const steps = [
    "📝 Describe Your Lifestyle Tell us your budget, family size, driving habits and preferences.",
    "🧠 AI Recommendation Engine Our intelligent scoring system analyzes your priorities.",
    "🚗 Get Personalized Matches Receive tailored recommendations with explanations and trade-offs.",
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-600">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-6 shadow-sm"
          >
            <h3 className="font-semibold text-lg mb-2 text-cyan-900">
              Step {index + 1}
            </h3>

            <p className="text-gray-700">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
