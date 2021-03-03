import { ChangeEvent, useState } from "react";

export const useForm = <T extends object>(initial: T = {} as T) => {
  const [inputs, setInputs] = useState<T>(initial);

  const getTypedValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { type, value } = e.target;
    switch (type) {
      case "number":
        return parseInt(value);
      case "file":
        return [e.target.files];
      default:
        return value;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: getTypedValue(e),
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => {
        if (typeof value === "number") return [key, 0];
        if (Array.isArray(value)) return [key, []];
        return [key, ""];
      })
    );
    setInputs(blankState);
  };

  return { inputs, handleChange, resetForm, clearForm };
};
