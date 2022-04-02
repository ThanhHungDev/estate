import * as React from "react";

const SvgDewpoint = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M176 0c-12.4 0-24.7 6.8-29.2 20.7C100 168.6 0 240.8 0 345c0 92.3 78.7 167 176 167s176-74.7 176-167c0-104.8-99.8-175.8-146.8-324.3C201.2 7.1 188.6 0 176 0zm128 345c0 65.6-57.4 119-128 119S48 410.6 48 345c0-42.9 25.1-82.9 56.8-133.5 23.7-37.8 49.9-79.6 71.2-131 21.4 51.7 47.6 93.4 71.4 131.2C279 262.1 304 301.9 304 345zM368 0c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80zm0 112c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
  </svg>
);

SvgDewpoint.displayName = "SvgDewpoint";
SvgDewpoint.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDewpoint;
