export default function WhyNotOthers({ items }) {
  return (
    <section className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        Why Not Other Cars?
      </h2>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="bg-gray-200 p-4 rounded-lg">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
