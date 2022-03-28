import * as React from "react";

const SvgMoonCloud = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M574.1 377a191.7 191.7 0 01-271.7 26.7c29.5-16.4 49.7-47.5 49.7-83.6a96 96 0 00-106.7-95.4 109.19 109.19 0 00-6.9-12.6C258.4 127.2 334.3 64 425.1 64a196.43 196.43 0 0135 3.2c8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 00-76.1 130.8c0 94 85.4 165.4 178.5 147.7 8.2-1.6 14 8 8.8 14.6z"
      opacity={0.4}
    />
    <path
      d="M320 320a64.06 64.06 0 01-64 64H64a64 64 0 010-128c.6 0 1.1.2 1.6.2a79.75 79.75 0 01157.7 9A63.72 63.72 0 01320 320z"
      className="moon-cloud_svg__fa-primary"
    />
  </svg>
);

SvgMoonCloud.displayName = "SvgMoonCloud";
SvgMoonCloud.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMoonCloud;
