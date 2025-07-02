import { useState } from "react";

export function CustomSelect(data) {
  const [value, setValue] = useState();

  return [value, setValue];
}
