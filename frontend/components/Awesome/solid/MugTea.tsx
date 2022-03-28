import * as React from "react";

const SvgMugTea = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M595.6 416H12.36c-25 0-11.6 64 36 64h511.35c47.69 0 60.89-64 35.89-64zM192 384h192a96 96 0 0096-96h32a128 128 0 000-256H240v64l38.63 38.63a32 32 0 019.37 22.62V224a32 32 0 01-32 32h-64a32 32 0 01-32-32v-66.75a32 32 0 019.37-22.62L208 96V32h-88a23.94 23.94 0 00-24 24v232a96 96 0 0096 96zM480 96h32a64 64 0 010 128h-32z" />
  </svg>
);

SvgMugTea.displayName = "SvgMugTea";
SvgMugTea.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMugTea;
