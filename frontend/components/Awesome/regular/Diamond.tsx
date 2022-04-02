import * as React from "react";

const SvgDiamond = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z" />
  </svg>
);

SvgDiamond.displayName = "SvgDiamond";
SvgDiamond.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiamond;
