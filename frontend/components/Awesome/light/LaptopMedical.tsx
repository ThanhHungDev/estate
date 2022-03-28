import * as React from "react";

const SvgLaptopMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M624 368h-48V96a64.07 64.07 0 00-64-64H128a64.07 64.07 0 00-64 64v272H16a16 16 0 00-16 16v48a80.09 80.09 0 0080 80h480a80.09 80.09 0 0080-80v-48a16 16 0 00-16-16zM96 96a32 32 0 0132-32h384a32 32 0 0132 32v272H391.13c-4.06 0-7 3.13-7.92 7.09A32 32 0 01352 400h-64a32 32 0 01-31.21-24.91c-.9-4-3.86-7.09-7.92-7.09H96zm512 336a48.05 48.05 0 01-48 48H80a48.05 48.05 0 01-48-48v-32h194.75A48.06 48.06 0 00272 432h96a48 48 0 0045.25-32H608zM288 312a8 8 0 008 8h48a8 8 0 008-8v-56h56a8 8 0 008-8v-48a8 8 0 00-8-8h-56v-56a8 8 0 00-8-8h-48a8 8 0 00-8 8v56h-56a8 8 0 00-8 8v48a8 8 0 008 8h56z" />
  </svg>
);

SvgLaptopMedical.displayName = "SvgLaptopMedical";
SvgLaptopMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLaptopMedical;
