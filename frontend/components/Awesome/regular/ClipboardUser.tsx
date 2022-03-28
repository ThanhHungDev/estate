import * as React from "react";

const SvgClipboardUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M336 64h-80a64 64 0 00-128 0H48a48 48 0 00-48 48v352a48 48 0 0048 48h288a48 48 0 0048-48V112a48 48 0 00-48-48zM192 40a24 24 0 11-24 24 24 24 0 0124-24zm144 418a6 6 0 01-6 6H54a6 6 0 01-6-6V118a6 6 0 016-6h42v36a12 12 0 0012 12h168a12 12 0 0012-12v-36h42a6 6 0 016 6zm-99.2-106h-5a103.25 103.25 0 01-79.7 0h-5c-37.01 0-67.1 25.79-67.1 57.6v6.4a16 16 0 0016 16h192a16 16 0 0016-16v-6.4c0-31.81-30.09-57.6-67.2-57.6zM192 336a64 64 0 10-64-64 64 64 0 0064 64z" />
  </svg>
);

SvgClipboardUser.displayName = "SvgClipboardUser";
SvgClipboardUser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClipboardUser;
