import * as React from "react";

const SvgImagePolaroid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zm-16 400H48v-64h352zm0-112h-16l-97.07-121c-7.46-9.31-22.4-9.31-29.86 0l-63.38 79-33.05-45.78c-7.92-11-25.36-11-33.28 0L64 320H48V80h352zM144 176a32 32 0 10-32-32 32 32 0 0032 32z" />
  </svg>
);

SvgImagePolaroid.displayName = "SvgImagePolaroid";
SvgImagePolaroid.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgImagePolaroid;
