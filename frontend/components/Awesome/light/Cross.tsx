import * as React from "react";

const SvgCross = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M352 128h-96V32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h96v224c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V256h96c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 96H224v256h-64V224H32v-64h128V32h64v128h128v64z" />
  </svg>
);

SvgCross.displayName = "SvgCross";
SvgCross.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCross;
