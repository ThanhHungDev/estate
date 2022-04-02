import * as React from "react";

const SvgRectangleWide = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M592 96.5H48c-26.5 0-48 21.5-48 48v223c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48v-223c0-26.5-21.5-48-48-48zm-6 271H54c-3.3 0-6-2.7-6-6v-211c0-3.3 2.7-6 6-6h532c3.3 0 6 2.7 6 6v211c0 3.3-2.7 6-6 6z" />
  </svg>
);

SvgRectangleWide.displayName = "SvgRectangleWide";
SvgRectangleWide.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRectangleWide;
