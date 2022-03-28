import * as React from "react";

const SvgBracketsCurly = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M208 32h-88a56 56 0 00-56 56v77.49a40 40 0 01-11.72 28.29L7 239a24 24 0 000 34l45.24 45.24A40 40 0 0164 346.52V424a56 56 0 0056 56h88a16 16 0 0016-16v-16a16 16 0 00-16-16h-88a8 8 0 01-8-8v-77.48a88.06 88.06 0 00-25.78-62.24L57.93 256l28.29-28.28A88.06 88.06 0 00112 165.48V88a8 8 0 018-8h88a16 16 0 0016-16V48a16 16 0 00-16-16zm361 207l-45.25-45.24A40.07 40.07 0 01512 165.48V88a56 56 0 00-56-56h-88a16 16 0 00-16 16v16a16 16 0 0016 16h88a8 8 0 018 8v77.48a88 88 0 0025.78 62.24L518.06 256l-28.28 28.28A88 88 0 00464 346.52V424a8 8 0 01-8 8h-88a16 16 0 00-16 16v16a16 16 0 0016 16h88a56 56 0 0056-56v-77.49a40 40 0 0111.72-28.29L569 273a24 24 0 000-34z" />
  </svg>
);

SvgBracketsCurly.displayName = "SvgBracketsCurly";
SvgBracketsCurly.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBracketsCurly;
