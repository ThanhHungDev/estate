import * as React from "react";

const SvgAnalytics = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M510.62 92.63l-95.32 76.28a48.66 48.66 0 01.7 7.09 48 48 0 01-96 0 47.44 47.44 0 01.71-7.1l-95.33-76.27a45.11 45.11 0 01-29.66 1.59l-101.5 101.5A47.9 47.9 0 1148 160a47.87 47.87 0 0112.28 1.78l101.5-101.5A47.87 47.87 0 01160 48a48 48 0 0196 0 47.44 47.44 0 01-.71 7.1l95.32 76.26a46.5 46.5 0 0134.76 0l95.34-76.27A48.66 48.66 0 01480 48a48.36 48.36 0 1130.62 44.63z"
      opacity={0.4}
    />
    <path
      d="M400 320h-64a16 16 0 00-16 16v160a16 16 0 0016 16h64a16 16 0 0016-16V336a16 16 0 00-16-16zm160-128h-64a16 16 0 00-16 16v288a16 16 0 0016 16h64a16 16 0 0016-16V208a16 16 0 00-16-16zm-320 0h-64a16 16 0 00-16 16v288a16 16 0 0016 16h64a16 16 0 0016-16V208a16 16 0 00-16-16zM80 352H16a16 16 0 00-16 16v128a16 16 0 0016 16h64a16 16 0 0016-16V368a16 16 0 00-16-16z"
      className="analytics_svg__fa-primary"
    />
  </svg>
);

SvgAnalytics.displayName = "SvgAnalytics";
SvgAnalytics.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAnalytics;
