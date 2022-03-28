import * as React from "react";

const SvgPiano = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M476.62 269.81l-57.24-28.62A64 64 0 01384 184 184.45 184.45 0 00199.55-.5h-15.1A184.45 184.45 0 000 184v295.5a32 32 0 0032 32h448a32 32 0 0032-32V327.05a64 64 0 00-35.38-57.24zM448 447.5H64v-96h32v56a8 8 0 008 8h16a8 8 0 008-8v-56h32v56a8 8 0 008 8h16a8 8 0 008-8v-56h32v56a8 8 0 008 8h16a8 8 0 008-8v-56h64v56a8 8 0 008 8h16a8 8 0 008-8v-56h32v56a8 8 0 008 8h16a8 8 0 008-8v-56h32z" />
  </svg>
);

SvgPiano.displayName = "SvgPiano";
SvgPiano.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPiano;
