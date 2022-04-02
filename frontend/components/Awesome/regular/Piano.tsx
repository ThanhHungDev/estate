import * as React from "react";

const SvgPiano = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M476.62 270.31l-57.24-28.62A64 64 0 01384 184.44C384 82.58 301.42 0 199.55 0h-15.1C82.58 0 0 82.58 0 184.44V480a32 32 0 0032 32h448a32 32 0 0032-32V327.55a64 64 0 00-35.38-57.24zM464 464H48v-80h32v40a8 8 0 008 8h16a8 8 0 008-8v-40h32v40a8 8 0 008 8h16a8 8 0 008-8v-40h32v40a8 8 0 008 8h16a8 8 0 008-8v-40h96v40a8 8 0 008 8h16a8 8 0 008-8v-40h32v40a8 8 0 008 8h16a8 8 0 008-8v-40h32zm0-128H48V184.44C48 109.21 109.21 48 184.45 48h15.1C274.79 48 336 109.21 336 184.44a111.38 111.38 0 0061.91 100.18l57.24 28.62a15.9 15.9 0 018.85 14.31z" />
  </svg>
);

SvgPiano.displayName = "SvgPiano";
SvgPiano.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPiano;
