import * as React from "react";

const SvgOven = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M96 432h256a16 16 0 0016-16V256a16 16 0 00-16-16H96a16 16 0 00-16 16v160a16 16 0 0016 16zm32-144h192v32H128zM104 80a24 24 0 1024 24 24 24 0 00-24-24zm240 0a24 24 0 1024 24 24 24 0 00-24-24zm-160 0a24 24 0 1024 24 24 24 0 00-24-24zM384 0H64A64 64 0 000 64v416a32 32 0 0032 32h384a32 32 0 0032-32V64a64 64 0 00-64-64zm16 464H48V208h352zm0-304H48V64a16 16 0 0116-16h320a16 16 0 0116 16zM264 80a24 24 0 1024 24 24 24 0 00-24-24z" />
  </svg>
);

SvgOven.displayName = "SvgOven";
SvgOven.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOven;
