import * as React from "react";

const SvgHeadSideHeadphones = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M509.21 273c-20.94-47.12-48.44-151.73-73.1-186.75A207.87 207.87 0 00266.09-2H256v107.19c37.74 18 64 56.21 64 100.81a112 112 0 11-224 0c0-44.6 26.26-82.79 64-100.81V.88C69.23 16.14 0 94.88 0 190a191.27 191.27 0 0064 142.81V510h256v-64h64a64 64 0 0064-64v-64h32a32 32 0 0029.21-45zM128 206a80 80 0 1080-80 80 80 0 00-80 80zm80-32a32 32 0 11-32 32 32 32 0 0132-32z" />
  </svg>
);

SvgHeadSideHeadphones.displayName = "SvgHeadSideHeadphones";
SvgHeadSideHeadphones.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeadSideHeadphones;
