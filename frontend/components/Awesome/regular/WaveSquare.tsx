import * as React from "react";

const SvgWaveSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M472 480H328a32 32 0 01-32-32V80H184v168a32 32 0 01-32 32H8a8 8 0 01-8-8v-32a8 8 0 018-8h128V64a32 32 0 0132-32h144a32 32 0 0132 32v368h112V264a32 32 0 0132-32h144a8 8 0 018 8v32a8 8 0 01-8 8H504v168a32 32 0 01-32 32z" />
  </svg>
);

SvgWaveSquare.displayName = "SvgWaveSquare";
SvgWaveSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWaveSquare;
