import * as React from "react";

const SvgDiceOne = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M384 32H64A64 64 0 000 96v320a64 64 0 0064 64h320a64 64 0 0064-64V96a64 64 0 00-64-64zM224 288a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M256 256a32 32 0 11-32-32 32 32 0 0132 32z"
      className="dice-one_svg__fa-primary"
    />
  </svg>
);

SvgDiceOne.displayName = "SvgDiceOne";
SvgDiceOne.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiceOne;
