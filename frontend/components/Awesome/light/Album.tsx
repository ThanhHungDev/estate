import * as React from "react";

const SvgAlbum = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M224 416c88.22 0 160-71.78 160-160S312.22 96 224 96 64 167.78 64 256s71.78 160 160 160zm0-288A128 128 0 1196 256a128.14 128.14 0 01128-128zm0 152a24 24 0 10-24-24 24 24 0 0024 24zM416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zm0 416H32V64h384z" />
  </svg>
);

SvgAlbum.displayName = "SvgAlbum";
SvgAlbum.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlbum;
