const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        h-12
        px-4
        rounded-2xl
        bg-white/10
        border
        border-white/20
        backdrop-blur-lg
        text-white
        placeholder:text-gray-300
        outline-none
        focus:border-purple-500
      "
    />
  );
};

export default Input;