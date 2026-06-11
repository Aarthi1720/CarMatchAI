import { useState } from "react";

const examplePrompts = [
  "Family SUV under 15 lakh",
  "Safest car for city driving",
  "Best mileage car under 10 lakh",
  "Comfortable highway cruiser",
];

export default function UserInput({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSubmit(query);
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Describe Your Needs
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Tell us what matters most to you.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {examplePrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => setQuery(prompt)}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
            >
              {prompt}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            rows={5}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="I have a family of 4. My budget is 15 lakh. Safety and mileage are important."
            className="w-full bg-white border border-gray-300 rounded-2xl p-5 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-200 text-lg"
          />

          <button
            type="submit"
            className="mt-5 w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition"
          >
            Find My Perfect Car
          </button>
        </form>
      </div>
    </section>
  );
}