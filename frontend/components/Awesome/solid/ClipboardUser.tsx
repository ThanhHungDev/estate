import * as React from "react";

const SvgClipboardUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M336 64h-80a64 64 0 00-128 0H48a48 48 0 00-48 48v352a48 48 0 0048 48h288a48 48 0 0048-48V112a48 48 0 00-48-48zM192 40a24 24 0 11-24 24 24 24 0 0124-24zm0 152a64 64 0 11-64 64 64 64 0 0164-64zm112 236.8c0 10.61-10 19.2-22.4 19.2H102.4C90 448 80 439.4 80 428.8v-19.2c0-31.81 30.09-57.6 67.2-57.6h5a103.25 103.25 0 0079.7 0h5c37.11 0 67.2 25.79 67.2 57.6z" />
  </svg>
);

SvgClipboardUser.displayName = "SvgClipboardUser";
SvgClipboardUser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClipboardUser;
