import { useState } from "react";

import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import UserInput from "./components/UserInput";
import LoadingSpinner from "./components/LoadingSpinner";
import PersonalityCard from "./components/PersonalityCard";
import RecommendationCard from "./components/RecommendationCard";
import WhyNotOthers from "./components/WhyNotOthers";

import api from "./services/api";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleRecommendation = async (query) => {
    try {
      setLoading(true);

      const { data } = await api.post("/recommend", {
        query,
      });

      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />

      <HowItWorks />

      <UserInput onSubmit={handleRecommendation} />

      {loading && <LoadingSpinner />}

      {result && (
        <>
          <PersonalityCard personality={result.personality} />

          <section className="max-w-6xl mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold mb-8 text-gray-700">
              Top Recommendations
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {result.recommendations.map((car, index) => (
                <RecommendationCard key={car.name} car={car} index={index} />
              ))}
            </div>
          </section>

          <WhyNotOthers items={result.whyNotOthers} />
        </>
      )}
      <Footer />
    </main>
  );
}

export default App;
