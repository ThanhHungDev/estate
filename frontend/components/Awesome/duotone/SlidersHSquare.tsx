import * as React from "react";

const SvgSlidersHSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-16 324a12 12 0 01-12 12h-52v24a23.94 23.94 0 01-24 24h-16a23.94 23.94 0 01-24-24v-24H76a12 12 0 01-12-12v-40a12 12 0 0112-12h180v-24a23.94 23.94 0 0124-24h16a23.94 23.94 0 0124 24v24h52a12 12 0 0112 12zm0-160a12 12 0 01-12 12H192v24a23.94 23.94 0 01-24 24h-16a23.94 23.94 0 01-24-24v-24H76a12 12 0 01-12-12v-40a12 12 0 0112-12h52v-24a23.94 23.94 0 0124-24h16a23.94 23.94 0 0124 24v24h180a12 12 0 0112 12z"
      opacity={0.4}
    />
    <path
      d="M168 256a23.94 23.94 0 0024-24V120a23.94 23.94 0 00-24-24h-16a23.94 23.94 0 00-24 24v112a23.94 23.94 0 0024 24zm112 160h16a23.94 23.94 0 0024-24V280a23.94 23.94 0 00-24-24h-16a23.94 23.94 0 00-24 24v112a23.94 23.94 0 0024 24z"
      className="sliders-h-square_svg__fa-primary"
    />
  </svg>
);

SvgSlidersHSquare.displayName = "SvgSlidersHSquare";
SvgSlidersHSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSlidersHSquare;
