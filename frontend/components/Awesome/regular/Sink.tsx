import * as React from "react";

const SvgSink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 288h-96v-32h64a16 16 0 0016-16v-16a16 16 0 00-16-16h-80a32 32 0 00-32 32v48h-72V88a40 40 0 0144.17-39.79C345 50.33 360 69.43 360 90.35V112a16 16 0 0016 16h16a16 16 0 0016-16V88A88.09 88.09 0 00311.22.43C265.5 4.88 232 46 232 91.9V288h-72v-48a32 32 0 00-32-32H48a16 16 0 00-16 16v16a16 16 0 0016 16h64v32H16a16 16 0 00-16 16v16a16 16 0 0016 16h16v80a96 96 0 0096 96h256a96 96 0 0096-96v-80h16a16 16 0 0016-16v-16a16 16 0 00-16-16zm-64 128a48.05 48.05 0 01-48 48H128a48.05 48.05 0 01-48-48v-80h352z" />
  </svg>
);

SvgSink.displayName = "SvgSink";
SvgSink.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSink;
