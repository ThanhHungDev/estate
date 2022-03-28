import * as React from "react";

const SvgHeartCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path d="M361.8 162.8c-38.3-32.8-89-17.8-113.8 7.8-24.8-25.6-75.5-40.6-113.8-7.8-42.4 36.2-36.1 95.2-6 126.3l98.7 102c13 13.4 32.5 10.2 42.4 0l98.7-102c29.9-31.1 36.2-90.1-6.2-126.3zm-27.7 92.7l-86.1 89-86.1-89.1c-13-13.5-16.2-39.7 2.7-55.9 14.1-12 36.1-9 49.3 4.7l34.1 35.4 34.1-35.4c13.2-13.7 35.3-16.7 49.3-4.7 18.9 16.2 15.8 42.5 2.7 56zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200z" />
  </svg>
);

SvgHeartCircle.displayName = "SvgHeartCircle";
SvgHeartCircle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeartCircle;
