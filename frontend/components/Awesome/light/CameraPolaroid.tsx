import * as React from "react";

const SvgCameraPolaroid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M288 128a80 80 0 1080 80 80.12 80.12 0 00-80-80zm0 128a48 48 0 1148-48 48.05 48.05 0 01-48 48zM104 416h368a8 8 0 008-8v-16a8 8 0 00-8-8H104a8 8 0 00-8 8v16a8 8 0 008 8zm470.43-87.94a32.12 32.12 0 00-3.8-8.06L512 256V80a48 48 0 00-48-48H112a48 48 0 00-48 48v176L5.38 320A33.45 33.45 0 000 337.75V448a32 32 0 0032 32h512a32 32 0 0032-32V337.75a31.81 31.81 0 00-1.57-9.69zM96 268.44V80a16 16 0 0116-16h352a16 16 0 0116 16v188.44L527.23 320H48.77zM544 448H32v-96h512zM432 104h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8z" />
  </svg>
);

SvgCameraPolaroid.displayName = "SvgCameraPolaroid";
SvgCameraPolaroid.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCameraPolaroid;
