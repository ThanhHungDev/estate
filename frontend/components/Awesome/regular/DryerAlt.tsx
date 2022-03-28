import * as React from "react";

const SvgDryerAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M224 160a136 136 0 10136 136 136 136 0 00-136-136zm0 224c-40.15 0-73.73-27.18-84.25-64H176a16 16 0 0016-16v-16a16 16 0 00-16-16h-36.25c10.52-36.82 44.1-64 84.25-64a88 88 0 010 176zm-96-280a24 24 0 10-24 24 24 24 0 0024-24zm56 24a24 24 0 10-24-24 24 24 0 0024 24zM384 0H64A64 64 0 000 64v416a32 32 0 0032 32h384a32 32 0 0032-32V64a64 64 0 00-64-64zm16 464H48V64a16 16 0 0116-16h320a16 16 0 0116 16z" />
  </svg>
);

SvgDryerAlt.displayName = "SvgDryerAlt";
SvgDryerAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDryerAlt;
