import * as React from "react";

const SvgBlinds = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M96 226.94V160H16L0 256h66.94A47.82 47.82 0 0196 226.94zM157.06 288a47.73 47.73 0 01-90.12 0H16L0 384h512l-16-96zM16 416L0 512h512l-16-96zM512 48V16a16 16 0 00-16-16H16A16 16 0 000 16v32a15.85 15.85 0 0010.84 15L0 128h96V64h32v64h384l-10.84-65A15.85 15.85 0 00512 48zM128 160v66.94A47.82 47.82 0 01157.06 256H512l-16-96z" />
  </svg>
);

SvgBlinds.displayName = "SvgBlinds";
SvgBlinds.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlinds;
