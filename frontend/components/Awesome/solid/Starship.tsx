import * as React from "react";

const SvgStarship = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M448 224a32 32 0 1032 32 32.037 32.037 0 00-32-32zm-208-96a32 32 0 00-32-32H24a24 24 0 00-24 24v16a24.001 24.001 0 0024 24h62.238l55.323 56.95-10.795.98a38.226 38.226 0 000 76.138l10.797.983L64 352H24a24 24 0 00-24 24v16a24.001 24.001 0 0024 24h184a32 32 0 000-64h-70.238l70.488-50.887 20.78 1.889a222.146 222.146 0 010-94.004l-20.782 1.889L160 160h48a32 32 0 0032-32zm208-64c-106.04 0-192 85.96-192 192s85.96 192 192 192 192-85.96 192-192S554.04 64 448 64zm0 256a64 64 0 1164-64 64.073 64.073 0 01-64 64z" />
  </svg>
);

SvgStarship.displayName = "SvgStarship";
SvgStarship.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStarship;
