function Button({ text, variant = "primary", onClick }) {
  const baseStyle = "w-full py-2 rounded-md font-bold transition cursor-pointer"
  const variants = {
    primary: "bg-[#661CF1] text-white",
    secondary: "bg-purple-200 text-gray-800",
    tertiary: "bg-gray-400 text-white"
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
    {text}
    </button>
  )
}

export default Button
