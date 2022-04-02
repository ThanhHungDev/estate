import * as React from "react";

const SvgVenus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 288 512" {...props}>
    <path d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 74.1 56 135.2 128 143.1V384H76c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h52v52c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-52h52c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-52v-64.9c72-7.9 128-69 128-143.1zm-256 0c0-61.9 50-112 112-112 61.9 0 112 50 112 112 0 61.9-50 112-112 112-61.9 0-112-50-112-112z" />
  </svg>
);

SvgVenus.displayName = "SvgVenus";
SvgVenus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVenus;
