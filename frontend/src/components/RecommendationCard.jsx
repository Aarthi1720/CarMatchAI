export default function RecommendationCard({ car, index }) {
  const badges = ["🥇 Best Match", "🥈 Runner Up", "🥉 Alternative Pick"];

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={
          car.image ||
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        }
        alt={car.name}
        className="w-full h-56 object-cover"
        onError={(e) => {
          e.target.src =
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70";
        }}
      />

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
            {badges[index]}
          </span>

          <span className="text-sm font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">
            {car.matchScore}% Match
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-700">{car.name}</h3>

        <p className="text-gray-500 mb-4">{car.brand}</p>

        <div className="space-y-2 text-sm font-medium text-gray-600">
          <p>💰 Price: ₹{car.price} Lakh</p>
          <p>⛽ Fuel: {car.fuelType}</p>
          <p>🛡️ Safety: {car.safety}/5</p>
        </div>

        <div className="mt-5">
          <h4 className="font-semibold mb-2">Why It Matches</h4>

          <ul className="space-y-1 text-sm font-medium text-gray-600">
            {car.reasons.map((reason, index) => (
              <li key={index}>✅ {reason}</li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <h4 className="font-semibold mb-2">Trade-offs</h4>

          <ul className="space-y-1 text-sm text-red-600 font-medium">
            {car.tradeOffs.map((tradeoff, index) => (
              <li key={index}>⚠️ {tradeoff}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
