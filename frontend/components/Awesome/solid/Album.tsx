import * as React from "react";

const SvgAlbum = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M224 224a32 32 0 1032 32 32 32 0 00-32-32zM416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zM224 416a160 160 0 11160-160 160 160 0 01-160 160z" />
  </svg>
);

SvgAlbum.displayName = "SvgAlbum";
SvgAlbum.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlbum;
