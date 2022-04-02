import * as React from "react";

const SvgBarcodeAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M360 384h48c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zm96 0h48c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zm-160 0h16c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zM592 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm0 464H48V48h544v416zm-456-80h48c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zm96 0h16c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8z" />
  </svg>
);

SvgBarcodeAlt.displayName = "SvgBarcodeAlt";
SvgBarcodeAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBarcodeAlt;
