import * as React from "react";

const SvgChartScatter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 400H48V80a16 16 0 00-16-16H16A16 16 0 000 80v336a32 32 0 0032 32h464a16 16 0 0016-16v-16a16 16 0 00-16-16zm-336-80a32 32 0 10-32-32 32 32 0 0032 32zm256-160a32 32 0 10-32-32 32 32 0 0032 32zm-224 0a32 32 0 10-32-32 32 32 0 0032 32zm192 160a32 32 0 10-32-32 32 32 0 0032 32zm-96-64a32 32 0 10-32-32 32 32 0 0032 32z" />
  </svg>
);

SvgChartScatter.displayName = "SvgChartScatter";
SvgChartScatter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChartScatter;
