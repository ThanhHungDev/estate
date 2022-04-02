import * as React from "react";

const SvgChartScatter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M504 416H32V72a8 8 0 00-8-8H8a8 8 0 00-8 8v360a16 16 0 0016 16h488a8 8 0 008-8v-16a8 8 0 00-8-8zM160 312a24 24 0 10-24-24 24 24 0 0024 24zm256-160a24 24 0 10-24-24 24 24 0 0024 24zm-224 0a24 24 0 10-24-24 24 24 0 0024 24zm192 160a24 24 0 10-24-24 24 24 0 0024 24zm-96-64a24 24 0 10-24-24 24 24 0 0024 24z" />
  </svg>
);

SvgChartScatter.displayName = "SvgChartScatter";
SvgChartScatter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChartScatter;
