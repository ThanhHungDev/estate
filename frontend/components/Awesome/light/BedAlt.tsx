import * as React from "react";

const SvgBedAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 226.15V80a48 48 0 00-48-48H80a48 48 0 00-48 48v146.15C13.74 231 0 246.89 0 266.67V472a8 8 0 008 8h16a8 8 0 008-8v-56h448v56a8 8 0 008 8h16a8 8 0 008-8V266.67c0-19.78-13.74-35.67-32-40.52zM64 192a32 32 0 0132-32h112a32 32 0 0132 32v32H64zm384 32H272v-32a32 32 0 0132-32h112a32 32 0 0132 32zM80 64h352a16 16 0 0116 16v56.9a63.27 63.27 0 00-32-8.9H304a63.9 63.9 0 00-48 21.71A63.9 63.9 0 00208 128H96a63.27 63.27 0 00-32 8.9V80a16 16 0 0116-16zM32 384V266.67A10.69 10.69 0 0142.67 256h426.66A10.69 10.69 0 01480 266.67V384z" />
  </svg>
);

SvgBedAlt.displayName = "SvgBedAlt";
SvgBedAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBedAlt;
