import * as React from "react";

const SvgEquals = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M368 304H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm0-160H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
  </svg>
);

SvgEquals.displayName = "SvgEquals";
SvgEquals.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEquals;
