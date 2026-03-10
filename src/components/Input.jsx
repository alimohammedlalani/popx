function Input({ label, required, type = "text", placeholder }) {
  return (
    <div className="relative mb-5">
      <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-xs text-purple-600 font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-3 border border-gray-300 rounded-md outline-none focus:border-purple-500 text-sm"
      />
    </div>
  )
}

export default Input