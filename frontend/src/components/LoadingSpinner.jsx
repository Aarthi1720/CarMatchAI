export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center py-12">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

      <p className="mt-6 text-gray-600 text-lg">
        Analyzing your requirements...
      </p>
    </div>
  );
}
