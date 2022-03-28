import * as React from "react";

const SvgAlbum = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zm-16 400H48V80h352zm-176-32A144 144 0 1080 256a144 144 0 00144 144zm0-168a24 24 0 11-24 24 24 24 0 0124-24z" />
  </svg>
);

SvgAlbum.displayName = "SvgAlbum";
SvgAlbum.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlbum;
