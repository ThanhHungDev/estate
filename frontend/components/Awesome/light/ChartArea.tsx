import * as React from "react";

const SvgChartArea = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M500 416c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v340h468zM372 162l-84 54-86.5-84.5c-5.1-5.1-13.4-4.6-17.9 1L64 288v96h416l-90.3-216.7c-3-6.9-11.5-9.4-17.7-5.3zM96 299.2l98.7-131.3 89.3 89.3 85.8-57.2 61.7 152H96v-52.8z" />
  </svg>
);

SvgChartArea.displayName = "SvgChartArea";
SvgChartArea.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChartArea;
