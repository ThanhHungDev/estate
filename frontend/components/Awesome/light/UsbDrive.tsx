import * as React from "react";

const SvgUsbDrive = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M536 240h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16zm0 80h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16zm88-192H480v-16a16 16 0 00-16-16H64a64 64 0 00-64 64v192a64 64 0 0064 64h400a16 16 0 0016-16v-16h144a16 16 0 0016-16V144a16 16 0 00-16-16zM448 384H64a32 32 0 01-32-32V160a32 32 0 0132-32h384zm160-32H480V160h128z" />
  </svg>
);

SvgUsbDrive.displayName = "SvgUsbDrive";
SvgUsbDrive.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUsbDrive;
