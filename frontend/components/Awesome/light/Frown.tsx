import * as React from "react";

const SvgFrown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm0-152c-44.4 0-86.2 19.6-114.8 53.8-5.7 6.8-4.8 16.9 2 22.5 6.8 5.7 16.9 4.8 22.5-2 22.4-26.8 55.3-42.2 90.2-42.2s67.8 15.4 90.2 42.2c5.3 6.4 15.4 8 22.5 2 6.8-5.7 7.7-15.8 2-22.5C334.2 339.6 292.4 320 248 320zm-80-80c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </svg>
);

SvgFrown.displayName = "SvgFrown";
SvgFrown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFrown;