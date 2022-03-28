import * as React from "react";

const SvgBold = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M306 234.12c27.74-20.38 46-53.01 46-90.12A112 112 0 00240 32H40a8 8 0 00-8 8v16a8 8 0 008 8h24v384H40a8 8 0 00-8 8v16a8 8 0 008 8h216a128 128 0 0050-245.88zM96 64h144a80 80 0 010 160H96zm160 384H96V256h160a96 96 0 010 192z" />
  </svg>
);

SvgBold.displayName = "SvgBold";
SvgBold.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBold;
