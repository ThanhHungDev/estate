import * as React from "react";

const SvgAlien = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M224 0C100.281 0 0 88.03 0 232.451 0 344.23 134.215 457.05 194.863 502.324a48.708 48.708 0 0058.274 0C313.785 457.05 448 344.23 448 232.451 448 88.03 347.719 0 224 0zm-48 320h-32a80 80 0 01-80-80 16 16 0 0116-16h32a79.999 79.999 0 0180 80 16 16 0 01-16 16zm128 0h-32a16 16 0 01-16-16 79.999 79.999 0 0180-80h32a16 16 0 0116 16 80 80 0 01-80 80z"
      opacity={0.4}
    />
    <path
      d="M112 224H80a16 16 0 00-16 16 80 80 0 0080 80h32a16 16 0 0016-16 79.999 79.999 0 00-80-80zm256 0h-32a79.999 79.999 0 00-80 80 16 16 0 0016 16h32a80 80 0 0080-80 16 16 0 00-16-16z"
      className="alien_svg__fa-primary"
    />
  </svg>
);

SvgAlien.displayName = "SvgAlien";
SvgAlien.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlien;
