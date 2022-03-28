import * as React from "react";

const SvgPause = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M192 79v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48zm-48 346V85c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h84c3.3 0 6-2.7 6-6zM448 79v352c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48zm-48 346V85c0-3.3-2.7-6-6-6h-84c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h84c3.3 0 6-2.7 6-6z" />
  </svg>
);

SvgPause.displayName = "SvgPause";
SvgPause.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPause;