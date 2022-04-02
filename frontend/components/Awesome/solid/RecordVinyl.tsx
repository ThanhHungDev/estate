import * as React from "react";

const SvgRecordVinyl = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 152a104 104 0 10104 104 104 104 0 00-104-104zm0 128a24 24 0 1124-24 24 24 0 01-24 24zm0-272C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 376a128 128 0 11128-128 128 128 0 01-128 128z" />
  </svg>
);

SvgRecordVinyl.displayName = "SvgRecordVinyl";
SvgRecordVinyl.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRecordVinyl;
