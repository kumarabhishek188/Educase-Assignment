import React from "react";

const Input = ({
  label,
  placeholder,
  type,
  id,
  value,
  isRequired,
  onchange,
  maxLength,
  pattern,
  inputMode,
}) => {
  return (
    <div className="border border-gray-300 rounded-md relative ">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="py-2 px-3 outline-none placeholder:text-sm placeholder:text-gray-400 text-sm w-full bg-transparent"
        value={value}
        onChange={onchange}
        required={!!isRequired}
        autoComplete="off"
        maxLength={maxLength}
        pattern={pattern}
        inputMode={inputMode}
      />
      <label
        style={{ color: "#6C25FF", backgroundColor: "#F7F8F9" }}
        htmlFor={id}
        className="absolute top-[-12px] left-2 pl-1 pr-3 text-[14px]"
      >
        {label}
        {isRequired && <span className="text-red-600">*</span>}
      </label>
    </div>
  );
};

export default Input;
