import * as React from "react";

const SvgFlashlight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M288 208h-32a48 48 0 000 96h32a48 48 0 000-96zm0 64h-32a16 16 0 010-32h32a16 16 0 010 32zM608 96h-32c-59 0-116.52 17-166.59 48H64a64 64 0 00-64 64v96a64 64 0 0064 64h345.42C459.48 399 517 416 576 416h32a32 32 0 0032-32V128a32 32 0 00-32-32zm-96 280.49a289.65 289.65 0 01-85.74-35.7l-7.74-4.79H64a32 32 0 01-32-32v-96a32 32 0 0132-32h354.52l7.73-4.79a289.7 289.7 0 0185.75-35.7zm96 7.51h-32a275.75 275.75 0 01-32-1.88V129.88a275.75 275.75 0 0132-1.88h32z" />
  </svg>
);

SvgFlashlight.displayName = "SvgFlashlight";
SvgFlashlight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlashlight;
