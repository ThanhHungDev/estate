import * as React from "react";

const SvgPiano = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M476.62 270.31l-57.24-28.62A64 64 0 01384 184.45 184.45 184.45 0 00199.55 0h-15.1A184.45 184.45 0 000 184.45V480a32 32 0 0032 32h448a32 32 0 0032-32V327.55a64 64 0 00-35.38-57.24zM480 480H32v-96h48v40a8 8 0 008 8h16a8 8 0 008-8v-40h32v40a8 8 0 008 8h16a8 8 0 008-8v-40h32v40a8 8 0 008 8h16a8 8 0 008-8v-40h96v40a8 8 0 008 8h16a8 8 0 008-8v-40h32v40a8 8 0 008 8h16a8 8 0 008-8v-40h48zm0-128H32V184.45C32 100.39 100.39 32 184.45 32h15.1C283.61 32 352 100.39 352 184.45a95.49 95.49 0 0053.07 85.86l57.24 28.62A31.83 31.83 0 01480 327.55z" />
  </svg>
);

SvgPiano.displayName = "SvgPiano";
SvgPiano.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPiano;
