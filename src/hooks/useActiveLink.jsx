import React, { useState } from "react";

export default function useActiveLink(defaultValue) {
  const [active, setActive] = useState(defaultValue);

  function activeSet(value) {
    setActive((currentValue) => {
      typeof value === "string" ? value : !currentValue;
    });
  }
  return { active, activeSet };
}
