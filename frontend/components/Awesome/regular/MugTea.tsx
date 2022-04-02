import * as React from "react";

const SvgMugTea = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M599.87 432H8.16c-18.19 0-5.29 48 32 48h527.62c37.28 0 50.22-48 32.09-48zM176 384h224a80 80 0 0080-80v-16h32c70.59 0 128-57.41 128-128S582.56 32 512 32H112a16 16 0 00-16 16v256a80 80 0 0080 80zM480 80h32a80 80 0 010 160h-32zm-256 99.88l16-16 16 16V224h-32zM144 80h72v40l-30.63 30.63a32 32 0 00-9.37 22.62V240a32 32 0 0032 32h64a32 32 0 0032-32v-66.75a32 32 0 00-9.38-22.62L264 120V80h168v224a32.11 32.11 0 01-32 32H176a32.1 32.1 0 01-32-32z" />
  </svg>
);

SvgMugTea.displayName = "SvgMugTea";
SvgMugTea.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMugTea;
