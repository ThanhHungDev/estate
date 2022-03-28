import * as React from "react";

const SvgImagePolaroid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 320H64V96h320z"
      opacity={0.4}
    />
    <path
      d="M64 96v256h320V96zm64 32a32 32 0 11-32 32 32 32 0 0132-32zM96 320l50.69-76a16 16 0 0126.62 0l20.57 30.85 49.32-65.75a16 16 0 0125.6 0L352 320z"
      className="image-polaroid_svg__fa-primary"
    />
  </svg>
);

SvgImagePolaroid.displayName = "SvgImagePolaroid";
SvgImagePolaroid.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgImagePolaroid;
