import * as React from "react";

const SvgCameraPolaroid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M288 128a80 80 0 1080 80 80.12 80.12 0 00-80-80zm0 112a32 32 0 1132-32 32 32 0 01-32 32zm282.63 103.94L512 256V80a48 48 0 00-48-48H112a48 48 0 00-48 48v176L5.38 343.94A32 32 0 000 361.69V448a32 32 0 0032 32h512a32 32 0 0032-32v-86.31a32 32 0 00-5.37-17.75zM112 270.53V80h352v190.53L507.64 336H68.36zM528 432H48v-48h480zM424 112h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8z" />
  </svg>
);

SvgCameraPolaroid.displayName = "SvgCameraPolaroid";
SvgCameraPolaroid.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCameraPolaroid;
