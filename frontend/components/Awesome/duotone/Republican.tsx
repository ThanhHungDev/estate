import * as React from "react";

const SvgRepublican = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M0 464V288h544v112a16 16 0 0032 0v-64a16 16 0 0116-16h32a16 16 0 0116 16v64a80.14 80.14 0 01-88.4 79.6c-41.6-4.2-71.6-42.5-71.6-84.3V352h-32v112a16 16 0 01-16 16h-96a16 16 0 01-16-16v-80H128v80a16 16 0 01-16 16H16a16 16 0 01-16-16z"
      opacity={0.4}
    />
    <path
      d="M384 32H160A160 160 0 000 192v64h544v-64A160 160 0 00384 32zM176.3 170.4l-19.8 19.3 4.7 27.3a6 6 0 01-8.7 6.3L128 210.4l-24.5 12.9a6 6 0 01-8.7-6.3l4.7-27.3-19.8-19.3a6 6 0 013.3-10.2l27.4-4 12.2-24.8a6 6 0 0110.7 0l12.2 24.8 27.4 4a6 6 0 013.4 10.2zm144 0l-19.8 19.3 4.7 27.3a6 6 0 01-8.7 6.3L272 210.4l-24.5 12.9a6 6 0 01-8.7-6.3l4.7-27.3-19.8-19.3a6 6 0 013.3-10.2l27.4-4 12.2-24.8a6 6 0 0110.7 0l12.2 24.8 27.4 4a6 6 0 013.4 10.2zm144 0l-19.8 19.3 4.7 27.3a6 6 0 01-8.7 6.3L416 210.4l-24.5 12.9a6 6 0 01-8.7-6.3l4.7-27.3-19.8-19.3a6 6 0 013.3-10.2l27.4-4 12.2-24.8a6 6 0 0110.7 0l12.2 24.8 27.4 4a6 6 0 013.4 10.2z"
      className="republican_svg__fa-primary"
    />
  </svg>
);

SvgRepublican.displayName = "SvgRepublican";
SvgRepublican.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRepublican;
