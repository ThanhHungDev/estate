import * as React from "react";

const SvgStarship = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M208 96H24a24 24 0 00-24 24v16a24.001 24.001 0 0024 24h184a32 32 0 000-64zm0 256H24a24 24 0 00-24 24v16a24.001 24.001 0 0024 24h184a32 32 0 000-64zM448 64c-106.04 0-192 85.96-192 192s85.96 192 192 192 192-85.96 192-192S554.04 64 448 64zm0 256a64 64 0 1164-64 64.073 64.073 0 01-64 64z"
      opacity={0.4}
    />
    <path
      d="M208.25 210.887L160 160H86.238l55.325 56.95-10.797.98a38.226 38.226 0 000 76.138l10.797.983L64 352h73.762l70.488-50.887 54.402 4.285a186.736 186.736 0 010-98.796zM448 192a64 64 0 1064 64 64.073 64.073 0 00-64-64zm0 96a32 32 0 1132-32 32.002 32.002 0 01-32 32z"
      className="starship_svg__fa-primary"
    />
  </svg>
);

SvgStarship.displayName = "SvgStarship";
SvgStarship.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStarship;
