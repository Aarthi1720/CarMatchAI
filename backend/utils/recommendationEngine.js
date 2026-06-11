const extractPreferences = (query) => {
  const text = query.toLowerCase();

  const budgetMatch = text.match(/(\d+)/);

  return {
    budget: budgetMatch ? Number(budgetMatch[1]) : null,

    family:
      /(family|kids|children|wife|husband|parents)/.test(text),

    safety:
      /(safe|safety|secure|safest)/.test(text),

    mileage:
      /(mileage|fuel efficient|economical|fuel economy)/.test(text),

    comfort:
      /(comfort|comfortable|spacious|luxury)/.test(text),

    city:
      /(city|traffic|daily commute)/.test(text),

    highway:
      /(highway|long drive|road trip)/.test(text),
  };
};

const generatePersonality = (prefs) => {
  if (prefs.family && prefs.safety)
    return "Safety First Family Planner";

  if (prefs.mileage)
    return "Budget Conscious Commuter";

  if (prefs.comfort)
    return "Comfort Seeking Explorer";

  if (prefs.highway)
    return "Highway Touring Enthusiast";

  return "Balanced Car Buyer";
};

const scoreCar = (car, prefs) => {
  let score = 0;

  if (prefs.budget && car.price <= prefs.budget)
    score += 20;

  if (prefs.family && car.bestFor.includes("family"))
    score += 15;

  if (prefs.safety)
    score += car.safety * 5;

  if (prefs.mileage)
    score += car.mileage;

  if (prefs.comfort)
    score += car.comfort * 4;

  if (prefs.city && car.bestFor.includes("city"))
    score += 10;

  if (prefs.highway && car.bestFor.includes("highway"))
    score += 10;

  return score;
};

const buildReasons = (car, prefs) => {
  const reasons = [];

  if (prefs.safety)
    reasons.push(`Safety rating: ${car.safety}/5`);

  if (prefs.mileage)
    reasons.push(`Mileage: ${car.mileage} km/l`);

  if (prefs.family)
    reasons.push("Suitable for family usage");

  if (prefs.comfort)
    reasons.push(`Comfort rating: ${car.comfort}/5`);

  return reasons;
};

const buildTradeOffs = (car) => {
  return car.cons.slice(0, 2);
};

export const getRecommendations = (cars, query) => {
  const prefs = extractPreferences(query);

  const personality = generatePersonality(prefs);

  const scoredCars = cars.map((car) => ({
    ...car.toObject(),
    matchScore: scoreCar(car, prefs),
  }));

  scoredCars.sort((a, b) => b.matchScore - a.matchScore);

  const recommendations = scoredCars
    .slice(0, 3)
    .map((car) => ({
      ...car,
      reasons: buildReasons(car, prefs),
      tradeOffs: buildTradeOffs(car),
    }));

  const whyNotOthers = scoredCars
    .slice(3, 6)
    .map(
      (car) =>
        `${car.name} was not selected because it scored lower against your priorities.`
    );

  return {
    personality,
    recommendations,
    whyNotOthers,
  };
};