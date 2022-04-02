import * as React from "react";

const SvgFileMinus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M369.9 98L286 14.1A48 48 0 00252.1 0H48A48.16 48.16 0 000 48.1v416a48 48 0 0048 48h288a48 48 0 0048-48V132a48.23 48.23 0 00-14.1-34zM256 52l76.1 76.1H256zm80 412.1H48v-416h160v104a23.94 23.94 0 0024 24h104zM111.48 280.35a16 16 0 00-16 16v16a16 16 0 0016 16h160a16 16 0 0016-16v-16a16 16 0 00-16-16z" />
  </svg>
);

SvgFileMinus.displayName = "SvgFileMinus";
SvgFileMinus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileMinus;
