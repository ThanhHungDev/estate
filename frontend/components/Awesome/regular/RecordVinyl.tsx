import * as React from "react";

const SvgRecordVinyl = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.28 0-200-89.72-200-200S145.72 56 256 56s200 89.72 200 200-89.72 200-200 200zm0-304a104 104 0 10104 104 104 104 0 00-104-104zm0 128a24 24 0 1124-24 24 24 0 01-24 24z" />
  </svg>
);

SvgRecordVinyl.displayName = "SvgRecordVinyl";
SvgRecordVinyl.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRecordVinyl;
