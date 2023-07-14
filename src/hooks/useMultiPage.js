import React, { ReactElement } from "react";

export function useMultiPage(steps) {
  return (
    <div>
      {steps.map((step, index) => (
        <div key={index}>{step}</div>
      ))}
    </div>
  );
}
