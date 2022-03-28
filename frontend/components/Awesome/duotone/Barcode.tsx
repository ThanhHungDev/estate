import * as React from "react";

const SvgBarcode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M179.71 447.73h8.86V64h-8.86zm36 0h8.86V64h-8.86zm-116.85 0h8.85V64h-8.85zm-72 0H36V64h-9.14zM494 64v384h18V64zm-53.71 383.73h26.85V64h-26.85zm-144 0h18V64h-18zm72 0h18V64h-18z"
      opacity={0.4}
    />
    <path
      d="M134.86 447.73h17.71V64h-17.71zm62.85 0h8.86V64h-8.86zM0 448h18V64H0zm54-.27h8.86V64H54zm341.14 0h18V64h-18zM476 64v383.73h9.14V64zM251.43 447.73h18V64h-18zm80.86 0h18V64h-18z"
      className="barcode_svg__fa-primary"
    />
  </svg>
);

SvgBarcode.displayName = "SvgBarcode";
SvgBarcode.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBarcode;
