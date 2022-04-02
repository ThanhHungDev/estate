import * as React from "react";

const SvgDailymotion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M298.93 267a48.4 48.4 0 00-24.36-6.21q-19.83 0-33.44 13.27t-13.61 33.42q0 21.16 13.28 34.6t33.43 13.44q20.5 0 34.11-13.78T322 307.47a47.13 47.13 0 00-6.1-23.47 44.13 44.13 0 00-16.97-17zM0 32v448h448V32zm374.71 373.26h-53.1v-23.89h-.67q-15.79 26.2-55.78 26.2-27.56 0-48.89-13.1a88.29 88.29 0 01-32.94-35.77q-11.6-22.68-11.59-50.89 0-27.56 11.76-50.22a89.9 89.9 0 0132.93-35.78q21.18-13.09 47.72-13.1a80.87 80.87 0 0129.74 5.21q13.28 5.21 25 17V153l55.79-12.09z" />
  </svg>
);

SvgDailymotion.displayName = "SvgDailymotion";
SvgDailymotion.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDailymotion;
