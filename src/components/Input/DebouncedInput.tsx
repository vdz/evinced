'use client';

import React, { useEffect } from "react";
import { DebouncedInputProps } from "./types";

// A typical debounced input react component
export const  DebouncedInput: React.FC<DebouncedInputProps> = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = React.useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value, debounce, onChange])

  return (
    <input {...props} value={value} onChange={e => setValue(e.target.value)} />
  )
}