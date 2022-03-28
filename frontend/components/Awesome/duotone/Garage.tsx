import * as React from "react";

const SvgGarage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M128 512h384V352H128.11zm144-96h96a16 16 0 010 32h-96a16 16 0 010-32zm240-192H128v96h383.52z"
      opacity={0.4}
    />
    <path
      d="M640 161.28V496a16 16 0 01-16 16h-64a16 16 0 01-16-16V224c0-17.59-14.59-32-32.59-32H128.59c-18 0-32.59 14.41-32.59 32v272a16 16 0 01-16 16H16a16 16 0 01-16-16V161.28A48.14 48.14 0 0129.5 117l272-113.3A57.4 57.4 0 01320 0a57.4 57.4 0 0118.46 3.67L610.5 117a48.14 48.14 0 0129.5 44.28z"
      className="garage_svg__fa-primary"
    />
  </svg>
);

SvgGarage.displayName = "SvgGarage";
SvgGarage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGarage;
