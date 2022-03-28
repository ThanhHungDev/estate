import * as React from "react";

const SvgAlignCenter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M108.1 88h231.81A12.09 12.09 0 00352 75.9V52.09A12.09 12.09 0 00339.91 40H108.1A12.09 12.09 0 0096 52.09V75.9A12.1 12.1 0 00108.1 88zM432 424H16a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16zm0-256H16a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16zm-92.09 176A12.09 12.09 0 00352 331.9v-23.81A12.09 12.09 0 00339.91 296H108.1A12.09 12.09 0 0096 308.09v23.81a12.1 12.1 0 0012.1 12.1z" />
  </svg>
);

SvgAlignCenter.displayName = "SvgAlignCenter";
SvgAlignCenter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlignCenter;
