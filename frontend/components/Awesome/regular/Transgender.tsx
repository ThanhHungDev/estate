import * as React from "react";

const SvgTransgender = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M372 0h-63c-10.7 0-16 12.9-8.5 20.5L315 35l-87.6 87.6C203.9 105.9 175.1 96 144 96 64.5 96 0 160.5 0 240c0 71.4 51.9 130.6 120 142v34H76c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h44v36c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-36h44c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12h-44v-34c68.1-11.4 120-70.6 120-142 0-31.1-9.9-59.9-26.6-83.4L349 69l14.5 14.5c7.6 7.6 20.5 2.2 20.5-8.5V12c0-6.6-5.4-12-12-12zM144 336c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z" />
  </svg>
);

SvgTransgender.displayName = "SvgTransgender";
SvgTransgender.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTransgender;
