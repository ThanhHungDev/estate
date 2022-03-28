import * as React from "react";

const SvgDog = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M448 278l-149-54 21-26 128 46z" opacity={0.4} />
    <path
      d="M128 224a32 32 0 01-32-32 32 32 0 00-64 0c0 41.66 26.83 76.85 64 90.1V496a16 16 0 0016 16h64a16 16 0 0016-16V384h160v112a16 16 0 0016 16h64a16 16 0 0016-16V277.55L298.05 224zM528 96h-64l-7.16-14.31A32 32 0 00428.22 64H374.6l-27.28-27.28C337.23 26.64 320 33.78 320 48v149.87l128 45.71V208h32a64 64 0 0064-64v-32a16 16 0 00-16-16zm-112 32a16 16 0 1116-16 16 16 0 01-16 16z"
      className="dog_svg__fa-primary"
    />
  </svg>
);

SvgDog.displayName = "SvgDog";
SvgDog.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDog;
