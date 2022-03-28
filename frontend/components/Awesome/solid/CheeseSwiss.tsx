import * as React from "react";

const SvgCheeseSwiss = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M368 336a48 48 0 01-48-48H0v160a32 32 0 0032 32h448a32 32 0 0032-32V288h-96a48 48 0 01-48 48zm-192 96a48 48 0 1148-48 48 48 0 01-48 48zM299.83 32a32 32 0 00-21.13 7l-61.76 48.06a47.91 47.91 0 01-75.1 58.48L0 256h512c0-119.89-94-217.8-212.17-224z" />
  </svg>
);

SvgCheeseSwiss.displayName = "SvgCheeseSwiss";
SvgCheeseSwiss.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCheeseSwiss;
