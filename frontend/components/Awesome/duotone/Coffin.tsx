import * as React from "react";

const SvgCoffin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M237.53 48l96.65 94.92L252.44 464H131.57L49.83 142.91 146.45 48h91.08"
      opacity={0.4}
    />
    <path
      d="M237.53 48l96.65 94.92L252.44 464H131.57L49.83 142.91 146.45 48h91.08m6.14-48H140.32a32.93 32.93 0 00-23 9.37L9.54 115.19A31.61 31.61 0 001 145.58l87.08 342.18A32.47 32.47 0 00119.69 512h144.62a32.5 32.5 0 0031.62-24.24L383 145.58a31.65 31.65 0 00-8.59-30.39L266.7 9.37a32.89 32.89 0 00-23-9.37z"
      className="coffin_svg__fa-primary"
    />
  </svg>
);

SvgCoffin.displayName = "SvgCoffin";
SvgCoffin.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCoffin;
