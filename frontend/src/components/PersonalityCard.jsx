export default function PersonalityCard({ personality }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-3">
          🧠 Buyer Personality
        </h2>

        <p className="text-2xl font-semibold text-blue-700 mb-3">
          {personality}
        </p>

        <p className="text-gray-700 leading-relaxed">
          Based on your preferences, you prioritize
          practicality, comfort, and value while looking
          for a car that aligns with your lifestyle and
          driving needs.
        </p>
      </div>
    </div>
  );
}