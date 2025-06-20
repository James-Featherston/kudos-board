import { useState } from "react";

/* Used for the forms */
const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const inputProps = {
    value: value,
    onChange: handleChange,
    className: "input-field",
    type: "text",
  };
  return { inputProps, value, setValue };
};

export { useFormInput };
