import * as React from "react";

const SvgDogLeashed = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M448 244v34l-128-46.39V384h-48V224L38.17 41.25a16 16 0 01-2.8-22.45l9.82-12.62a16 16 0 0122.45-2.81L320 192z"
      opacity={0.4}
    />
    <path
      d="M96 192a32 32 0 00-64 0c0 41.66 26.83 76.85 64 90.1V496a16 16 0 0016 16h64a16 16 0 0016-16V384h80V224H128a32 32 0 01-32-32zm224 192h32v112a16 16 0 0016 16h64a16 16 0 0016-16V277.55l-128-45.71zM528 96h-64l-7.16-14.31A32 32 0 00428.22 64H374.6l-27.28-27.28C337.23 26.64 320 33.78 320 48v144l128 51.58V208h32a64 64 0 0064-64v-32a16 16 0 00-16-16zm-112 32a16 16 0 1116-16 16 16 0 01-16 16z"
      className="dog-leashed_svg__fa-primary"
    />
  </svg>
);

SvgDogLeashed.displayName = "SvgDogLeashed";
SvgDogLeashed.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDogLeashed;
