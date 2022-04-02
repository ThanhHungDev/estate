import * as React from "react";

const SvgChartPie = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 544 512" {...props}>
    <path
      d="M379.86 443.87c6.85 6.85 6.33 18.48-1.57 24.08A238.14 238.14 0 01243 512C114.83 513.59 4.5 408.51.14 280.37-4.1 155.6 87 51.49 206.16 34.65c9.45-1.34 17.84 6.51 17.84 16.06V288z"
      opacity={0.4}
    />
    <path
      d="M512 223.2C503.72 103.74 408.26 8.28 288.8 0 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.23-16.8zm15.79 64.8H290.5l158 158c6 6 16 6.53 22.19.68a239.5 239.5 0 0073.13-140.86c1.37-9.43-6.48-17.82-16.03-17.82z"
      className="chart-pie_svg__fa-primary"
    />
  </svg>
);

SvgChartPie.displayName = "SvgChartPie";
SvgChartPie.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChartPie;
