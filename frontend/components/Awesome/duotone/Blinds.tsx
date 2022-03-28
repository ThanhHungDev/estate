import * as React from "react";

const SvgBlinds = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M96 226.94V160H16L0 256h66.94A47.82 47.82 0 0196 226.94zM16 416L0 512h512l-16-96zm112-256v66.94A47.82 47.82 0 01157.06 256H512l-16-96zm29.06 128a47.73 47.73 0 01-90.12 0H16L0 384h512l-16-96zM493.34 64H128v64h384zM96 64H18.66L0 128h96z"
      opacity={0.4}
    />
    <path
      d="M512 16v32a16 16 0 01-16 16H128v162.94a48 48 0 11-32 0V64H16A16 16 0 010 48V16A16 16 0 0116 0h480a16 16 0 0116 16z"
      className="blinds_svg__fa-primary"
    />
  </svg>
);

SvgBlinds.displayName = "SvgBlinds";
SvgBlinds.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlinds;
