import * as React from "react";

const SvgPumpSoap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M299.37 218.21A64 64 0 00235.63 160H84.37a64 64 0 00-63.74 58.21l-20.36 224A64 64 0 0064 512h192a64 64 0 0063.74-69.79zM160 416c-33.12 0-60-26.33-60-58.75 0-25 35.7-75.47 52-97.27a10 10 0 0116 .02c16.33 21.8 52 72.27 52 97.27 0 32.4-26.88 58.73-60 58.73z"
      opacity={0.4}
    />
    <path
      d="M379.31 94.06L336 50.74A64 64 0 00290.75 32H224a32 32 0 00-32-32h-64a32 32 0 00-32 32v96h128V96h66.75l43.31 43.31a16 16 0 0022.63 0l22.62-22.62a16 16 0 000-22.63zM152 260c-16.33 21.8-52 72.27-52 97.27 0 32.42 26.88 58.75 60 58.75s60-26.33 60-58.75c0-25-35.7-75.47-52-97.27a10 10 0 00-16 0z"
      className="pump-soap_svg__fa-primary"
    />
  </svg>
);

SvgPumpSoap.displayName = "SvgPumpSoap";
SvgPumpSoap.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPumpSoap;
