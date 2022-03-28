import * as React from "react";

const SvgBallPile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M80 352c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm208-192c44.2 0 80-35.8 80-80S332.2 0 288 0s-80 35.8-80 80 35.8 80 80 80zm-32 88c0-44.2-35.8-80-80-80s-80 35.8-80 80 35.8 80 80 80 80-35.8 80-80zm32 104c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm208 0c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm-16-104c0-44.2-35.8-80-80-80s-80 35.8-80 80 35.8 80 80 80 80-35.8 80-80z" />
  </svg>
);

SvgBallPile.displayName = "SvgBallPile";
SvgBallPile.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBallPile;
