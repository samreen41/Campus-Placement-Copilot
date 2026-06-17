function Input({
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        p-3
        rounded-xl
        border
        border-gray-300
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
      "
    />
  );
}

export default Input;