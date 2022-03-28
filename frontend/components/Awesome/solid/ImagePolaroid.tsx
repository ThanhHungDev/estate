import * as React from "react";

const SvgImagePolaroid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M128 192a32 32 0 10-32-32 32 32 0 0032 32zM416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 320H64V96h320zM268.8 209.07a16 16 0 00-25.6 0l-49.32 65.75L173.31 244a16 16 0 00-26.62 0L96 320h256z" />
  </svg>
);

SvgImagePolaroid.displayName = "SvgImagePolaroid";
SvgImagePolaroid.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgImagePolaroid;
