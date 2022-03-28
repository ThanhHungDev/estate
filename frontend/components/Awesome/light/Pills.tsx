import * as React from "react";

const SvgPills = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M112 32C50.2 32 0 82.2 0 144v224c0 61.8 50.2 112 112 112s112-50.2 112-112V144c0-61.8-50.2-112-112-112zm80 336c0 44.1-35.9 80-80 80s-80-35.9-80-80v-80h160v80zm0-112H32V144c0-44.1 35.9-80 80-80s80 35.9 80 80v112zm224-96c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 288c-70.7 0-128-57.3-128-128 0-29.6 10.4-56.4 27.3-78.1l178.9 178.9C472.4 437.6 445.6 448 416 448zm100.7-49.9L337.9 219.3c21.7-16.8 48.5-27.3 78.1-27.3 70.7 0 128 57.3 128 128 0 29.6-10.4 56.4-27.3 78.1z" />
  </svg>
);

SvgPills.displayName = "SvgPills";
SvgPills.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPills;