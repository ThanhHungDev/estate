import * as React from "react";

const SvgJug = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M448 168a71.72 71.72 0 00-126.68-46.35L311 108.77A31.66 31.66 0 01305.23 96H142.77a31.66 31.66 0 01-5.77 12.77l-76.95 96.17a128 128 0 00-28 80V448a64 64 0 0064 64H352a64 64 0 0064-64V284.9a127.59 127.59 0 00-11.1-51A72 72 0 00448 168zm-96 216a32 32 0 01-32 32H128a32 32 0 01-32-32v-64a32 32 0 0132-32h192a32 32 0 0132 32zm25.38-192.28l-24.09-30.1C356.14 151.54 365 144 376 144a23.88 23.88 0 011.38 47.72zM152 64h144a23.94 23.94 0 0024-24V24a23.94 23.94 0 00-24-24H152a23.94 23.94 0 00-24 24v16a23.94 23.94 0 0024 24z" />
  </svg>
);

SvgJug.displayName = "SvgJug";
SvgJug.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgJug;
