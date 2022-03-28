import * as React from "react";

const SvgPlug = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M352 128h-48V16a16 16 0 00-32 0v112H112V16a16 16 0 00-32 0v112H32a32 32 0 00-32 32v32a32 32 0 0032 32v32c0 82.75 63.37 150.22 144 158.38V512h32v-97.62c80.63-8.16 144-75.63 144-158.38v-32a32 32 0 0032-32v-32a32 32 0 00-32-32zm-32 128a128 128 0 01-256 0v-32h256zm32-64H32v-32h320z" />
  </svg>
);

SvgPlug.displayName = "SvgPlug";
SvgPlug.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlug;
