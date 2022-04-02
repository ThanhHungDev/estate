import * as React from "react";

const SvgRadio = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M208 336h-96a16 16 0 00-16 16v16a16 16 0 0016 16h96a16 16 0 0016-16v-16a16 16 0 00-16-16zm16-80H96a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16zm128-16a80 80 0 1080 80 80 80 0 00-80-80zm96-112H211.5l288.83-81.21a16 16 0 0011.07-19.74l-4.33-15.38A16 16 0 00487.33.6L46.68 124.5A64 64 0 000 186.11V448a64 64 0 0064 64h384a64 64 0 0064-64V192a64 64 0 00-64-64zm16 320a16 16 0 01-16 16H64a16 16 0 01-16-16V192a16 16 0 0116-16h384a16 16 0 0116 16z" />
  </svg>
);

SvgRadio.displayName = "SvgRadio";
SvgRadio.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRadio;
