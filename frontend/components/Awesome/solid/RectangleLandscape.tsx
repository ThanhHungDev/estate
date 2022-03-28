import * as React from "react";

const SvgRectangleLandscape = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 448H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48z" />
  </svg>
);

SvgRectangleLandscape.displayName = "SvgRectangleLandscape";
SvgRectangleLandscape.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRectangleLandscape;
