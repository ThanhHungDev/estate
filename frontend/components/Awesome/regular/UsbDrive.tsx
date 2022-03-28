import * as React from "react";

const SvgUsbDrive = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M624 128H480v-16a16 16 0 00-16-16H64a64 64 0 00-64 64v192a64 64 0 0064 64h400a16 16 0 0016-16v-16h144a16 16 0 0016-16V144a16 16 0 00-16-16zM432 368H64a16 16 0 01-16-16V160a16 16 0 0116-16h368zm152-56a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm0-96a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16z" />
  </svg>
);

SvgUsbDrive.displayName = "SvgUsbDrive";
SvgUsbDrive.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUsbDrive;
