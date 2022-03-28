import * as React from "react";

const SvgListAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M464 32H48A48 48 0 000 80v352a48 48 0 0048 48h416a48 48 0 0048-48V80a48 48 0 00-48-48zM128 392a40 40 0 1140-40 40 40 0 01-40 40zm0-96a40 40 0 1140-40 40 40 0 01-40 40zm0-96a40 40 0 1140-40 40 40 0 01-40 40zm288 168a12 12 0 01-12 12H204a12 12 0 01-12-12v-32a12 12 0 0112-12h200a12 12 0 0112 12zm0-96a12 12 0 01-12 12H204a12 12 0 01-12-12v-32a12 12 0 0112-12h200a12 12 0 0112 12zm0-96a12 12 0 01-12 12H204a12 12 0 01-12-12v-32a12 12 0 0112-12h200a12 12 0 0112 12z"
      opacity={0.4}
    />
    <path
      d="M128 200a40 40 0 10-40-40 40 40 0 0040 40zm0 16a40 40 0 1040 40 40 40 0 00-40-40zm0 96a40 40 0 1040 40 40 40 0 00-40-40z"
      className="list-alt_svg__fa-primary"
    />
  </svg>
);

SvgListAlt.displayName = "SvgListAlt";
SvgListAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgListAlt;
