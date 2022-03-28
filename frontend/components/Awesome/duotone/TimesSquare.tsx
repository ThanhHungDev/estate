import * as React from "react";

const SvgTimesSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-54.4 289.1a12 12 0 010 17L306 377.6a12 12 0 01-17 0L224 312l-65.1 65.6a12 12 0 01-17 0L102.4 338a12 12 0 010-17l65.6-65-65.6-65.1a12 12 0 010-17l39.6-39.6a12 12 0 0117 0l65 65.7 65.1-65.6a12 12 0 0117 0l39.6 39.6a12 12 0 010 17L280 256z"
      opacity={0.4}
    />
    <path
      d="M102.4 190.9a12 12 0 010-17l39.6-39.6a12 12 0 0117 0l65 65.7 65.1-65.6a12 12 0 0117 0l39.6 39.6a12 12 0 010 17L280 256l65.6 65.1a12 12 0 010 17L306 377.6a12 12 0 01-17 0L224 312l-65.1 65.6a12 12 0 01-17 0L102.4 338a12 12 0 010-17l65.6-65z"
      className="times-square_svg__fa-primary"
    />
  </svg>
);

SvgTimesSquare.displayName = "SvgTimesSquare";
SvgTimesSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTimesSquare;
