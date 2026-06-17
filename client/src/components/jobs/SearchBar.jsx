function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search jobs..."
      className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default SearchBar;