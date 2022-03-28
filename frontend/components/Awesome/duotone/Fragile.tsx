import * as React from "react";

const SvgFragile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 288 512" {...props}>
    <path
      d="M192.21 0l30.6 63.7-85.5 56 49.4 104.3-121.5-119.7 85.5-56L117.91 0z"
      opacity={0.4}
    />
    <path
      d="M160 350.3V480h53.9c24.5 0 33.1 32 20 32H54.11c-13.2 0-4.5-32 20-32H128V350.3C51.31 341.6-6.59 272.7.61 192.7l16-178.1A15.79 15.79 0 0132.31 0h85.6l32.8 48.3-85.5 56L186.71 224l-49.4-104.3 85.5-56L192.21 0h63.5a15.79 15.79 0 0115.7 14.6l16 178.1c7.2 80-50.7 148.8-127.41 157.6z"
      className="fragile_svg__fa-primary"
    />
  </svg>
);

SvgFragile.displayName = "SvgFragile";
SvgFragile.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFragile;
