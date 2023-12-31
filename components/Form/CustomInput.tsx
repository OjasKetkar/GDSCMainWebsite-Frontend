import React, {
    ChangeEventHandler,
    HTMLInputTypeAttribute,
    ReactHTML,
    useState,
    useEffect,
  } from "react";
  
  type CustomInputProps = {
    label: string;
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    type?: HTMLInputTypeAttribute;
    inputClass?: string;
    autofocus?: boolean;
  };
  
  const CustomInput = ({
    label,
    name,
    value,
    onChange,
    type,
    inputClass,
    autofocus,
  }: CustomInputProps) => {
    const [isFocused, setFocused] = useState<boolean>(!(value == "") || false);
  
    useEffect(() => {
      if (value != "") {
        setFocused(true);
      }
    }, [value]);
  
    const toggleFocus = () => {
      if (value == "") {
        setFocused(!isFocused);
      } else {
        setFocused(true);
      }
    };
  
    return (
      <div className="relative flex w-full flex-col">
        <input
          type={type || "text"}
          className={`bg-background1 w-full border-b-2 border-b-black outline-none ${inputClass} `}
          onChange={onChange}
          onFocus={toggleFocus}
          onBlur={toggleFocus}
          name={name}
          id={name}
          value={value}
          autoFocus={autofocus}
        />
        <label
          htmlFor={name}
          className={`absolute transition-all duration-150 ease-in-out ${
            isFocused ? "-translate-y-5 text-xs" : ""
          }`}
        >
          {label}
        </label>
      </div>
    );
  };
  
  export default CustomInput;
  