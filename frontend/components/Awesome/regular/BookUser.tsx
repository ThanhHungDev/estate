import * as React from "react";

const SvgBookUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M240 208a64 64 0 10-64-64 64 64 0 0064 64zm208 176V16a16 16 0 00-16-16H80A80 80 0 000 80v352a80 80 0 0080 80h352a16 16 0 0016-16v-16a16 16 0 00-12.9-15.7c-4.2-13-4.2-51.6 0-64.6A16 16 0 00448 384zm-54 80H80a32 32 0 010-64h314c-2.7 17.3-2.7 46.7 0 64zm6-112H80a79.37 79.37 0 00-32 6.7V80a32 32 0 0132-32h320zm-256-32h192a16 16 0 0016-16v-22.4c0-31.81-30.09-57.6-67.2-57.6h-4.95a103.25 103.25 0 01-79.7 0h-5c-37.11 0-67.2 25.79-67.2 57.6V304A16 16 0 00144 320z" />
  </svg>
);

SvgBookUser.displayName = "SvgBookUser";
SvgBookUser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBookUser;
