import * as React from "react";

const SvgCameraPolaroid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M570.63 343.94L512 256V80a48 48 0 00-48-48H112a48 48 0 00-48 48v176L5.38 343.94A32 32 0 000 361.69V448a32 32 0 0032 32h512a32 32 0 0032-32v-86.31a32 32 0 00-5.37-17.75zM392 112a8 8 0 018-8h32a8 8 0 018 8v32a8 8 0 01-8 8h-32a8 8 0 01-8-8zm-104 16a64 64 0 11-64 64 64.1 64.1 0 0164-64zm192 280a8 8 0 01-8 8H104a8 8 0 01-8-8v-16a8 8 0 018-8h368a8 8 0 018 8z" />
  </svg>
);

SvgCameraPolaroid.displayName = "SvgCameraPolaroid";
SvgCameraPolaroid.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCameraPolaroid;
