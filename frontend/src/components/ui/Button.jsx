const Button = ({
  children,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`
        w-full
        py-3
        rounded-2xl
        font-semibold
        text-white
        bg-gradient-to-r
        from-purple-600
        to-blue-600
        hover:scale-[1.02]
        transition-all
        duration-300
        shadow-lg
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;