import * as React from "react";

const SvgCctv = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M517.45 168.58L139.24 2.29a32 32 0 00-39.67 13.84L4.23 183a32 32 0 0016.85 46l156.57 64.85L137.81 400H64v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v128a16 16 0 0016 16h32a16 16 0 0016-16v-32h96a32 32 0 0030-20.77l46.85-124.94 68.52 28.38a32 32 0 0027.89-2.94l189.26-118.31c22.21-13.88 19.25-47.11-5.07-56.84zm48.47 105.2l-35.45-15.59-138.4 86.5 119.58 52.58a16.86 16.86 0 0022.22-8.65l40.7-92.62a16.85 16.85 0 00-8.65-22.22z" />
  </svg>
);

SvgCctv.displayName = "SvgCctv";
SvgCctv.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCctv;
