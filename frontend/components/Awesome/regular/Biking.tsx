import * as React from "react";

const SvgBiking = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M400 96a48 48 0 10-48-48 48 48 0 0048 48zM128 256a128 128 0 10128 128 128 128 0 00-128-128zm0 208a80 80 0 1180-80 80.09 80.09 0 01-80 80zm384-208a128 128 0 10128 128 128 128 0 00-128-128zm0 208a80 80 0 1180-80 80.09 80.09 0 01-80 80zM401 210.73a24 24 0 0015 5.27h64a24 24 0 000-48h-55.59L351 109.27a24 24 0 00-30.62.51l-104 89.11a32 32 0 003.06 50.94l76.53 51V416a24 24 0 0048 0V288a24 24 0 00-10.69-20l-50.11-33.4 71.29-61.1z" />
  </svg>
);

SvgBiking.displayName = "SvgBiking";
SvgBiking.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBiking;
