import * as React from "react";

const SvgMicrowave = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 64H32A32 32 0 000 96v320a32 32 0 0032 32h16l24 32h48l24-32h224l24 32h48l24-32h16a32 32 0 0032-32V96a32 32 0 00-32-32zm0 352H32V96h448zm-48-160a16 16 0 10-16-16 16 16 0 0016 16zm0-64a16 16 0 10-16-16 16 16 0 0016 16zM96 384h256a32 32 0 0032-32V160a32 32 0 00-32-32H96a32 32 0 00-32 32v192a32 32 0 0032 32zm0-224h256v192H96z" />
  </svg>
);

SvgMicrowave.displayName = "SvgMicrowave";
SvgMicrowave.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMicrowave;
