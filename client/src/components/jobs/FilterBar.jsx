function FilterBar() {
  return (
    <div className="flex gap-4 mt-6 flex-wrap">

      <select className="border rounded-xl p-3">
        <option>All Roles</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Full Stack</option>
      </select>

      <select className="border rounded-xl p-3">
        <option>All Locations</option>
        <option>Remote</option>
        <option>Hyderabad</option>
        <option>Bangalore</option>
      </select>

    </div>
  );
}

export default FilterBar;