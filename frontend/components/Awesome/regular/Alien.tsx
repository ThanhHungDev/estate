import * as React from "react";

const SvgAlien = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M224 0C100.281 0 0 88.03 0 232.451 0 344.23 134.215 457.05 194.863 502.324a48.708 48.708 0 0058.274 0C313.785 457.05 448 344.23 448 232.451 448 88.03 347.719 0 224 0zm-.422 463.86C113.637 381.786 48 295.28 48 232.45 48 122.125 118.729 48 224 48s176 74.125 176 184.451c0 62.828-65.637 149.336-176.422 231.408zM129.812 224h-32a16 16 0 00-16 16 80 80 0 0080 80h32a16 16 0 0016-16 79.999 79.999 0 00-80-80zm224 0h-32a79.999 79.999 0 00-80 80 16 16 0 0016 16h32a80 80 0 0080-80 16 16 0 00-16-16z" />
  </svg>
);

SvgAlien.displayName = "SvgAlien";
SvgAlien.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlien;
