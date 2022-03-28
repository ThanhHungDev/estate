import * as React from "react";

const SvgFootballHelmet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M480 320H355.46l-15.2-76-31.8 4.1 14.4 71.9h-49.3s18.7 46.8 12.8 32h42.9l9.5 47.3c9.5 47.4 48 85.3 95.9 91.3 44 5.5 42.5 5.4 45.3 5.4 22.5 0 32-19.7 32-32V352A32 32 0 00480 320zm0 144l-41.3-5.2a79.72 79.72 0 01-60.1-40.7H480zm0-80H368.26l-6.4-32H480z"
      opacity={0.4}
    />
    <path
      d="M491 207.46C466.2 82.56 347.9-8.64 211.9 10.56c-107.3 15.1-194.1 102-209.3 209.3-10.2 72.1 10.7 139.1 51.1 190a16.26 16.26 0 0012.8 6.1H120l85.7 45a65.58 65.58 0 0075.7-12.3c36.2-36.2 10.9-81.9 5-96.7l-23.1-57.7a32 32 0 0125.6-43.6l188.2-24.5c8.96-1.16 15.56-9.8 13.9-18.7zM176 360a24 24 0 1124-24 23.94 23.94 0 01-24 24z"
      className="football-helmet_svg__fa-primary"
    />
  </svg>
);

SvgFootballHelmet.displayName = "SvgFootballHelmet";
SvgFootballHelmet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFootballHelmet;
