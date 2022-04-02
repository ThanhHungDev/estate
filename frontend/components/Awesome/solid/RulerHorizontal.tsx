import * as React from "react";

const SvgRulerHorizontal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M544 128h-48v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8H88c-4.42 0-8-3.58-8-8v-88H32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32z" />
  </svg>
);

SvgRulerHorizontal.displayName = "SvgRulerHorizontal";
SvgRulerHorizontal.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRulerHorizontal;
