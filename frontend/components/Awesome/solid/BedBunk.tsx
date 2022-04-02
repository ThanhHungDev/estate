import * as React from "react";

const SvgBedBunk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M464 0H240a16 16 0 00-16 16v112H64V16A16 16 0 0048 0H16A16 16 0 000 16v480a16 16 0 0016 16h32a16 16 0 0016-16v-48h448v48a16 16 0 0016 16h32a16 16 0 0016-16V112A112 112 0 00464 0zm48 267.19A110.9 110.9 0 00464 256H240a16 16 0 00-16 16v112H64V192h448zM144 352a48 48 0 10-48-48 48.05 48.05 0 0048 48zm0-256a48 48 0 10-48-48 48.05 48.05 0 0048 48z" />
  </svg>
);

SvgBedBunk.displayName = "SvgBedBunk";
SvgBedBunk.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBedBunk;
