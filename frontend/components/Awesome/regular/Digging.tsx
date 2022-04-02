import * as React from "react";

const SvgDigging = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M272 96a48 48 0 10-48-48 48 48 0 0048 48zm39.06 320a32 32 0 00-30.35 21.88L256 512h320L474.07 305.69a32 32 0 00-56.07-2.15l-31.52 53.69-75-40.52L289 194.56a121.81 121.81 0 00-65.47-85.62A123 123 0 00168.72 96H96a24 24 0 00-17.94 8.06L21.2 170.38a32 32 0 009 49l331.6 179.9L352 416zM107.84 206L70 185.38 106.78 144h55.33zm82.51 45l49.18-54.63 18 91.15zm203 189.26l50.84-86.63L498.75 464H379.48zM195.5 346.94L65.33 273.88l-64.24 207a24 24 0 1045.81 14.23l46.35-149.27L160 382.25V488a24 24 0 0048 0V368a24 24 0 00-12.5-21.06z" />
  </svg>
);

SvgDigging.displayName = "SvgDigging";
SvgDigging.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDigging;
