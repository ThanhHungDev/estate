import * as React from "react";

const SvgHouse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M570.53 242L512 190.75V48a16 16 0 00-16-16h-96a16 16 0 00-16 16v30.75L298.53 4a16 16 0 00-21.06 0l-272 238a16 16 0 0021.07 24.09L64 233.27V464a48.05 48.05 0 0048 48h352a48.05 48.05 0 0048-48V233.27l37.46 32.79A16 16 0 00570.53 242zM480 464a16 16 0 01-16 16H112a16 16 0 01-16-16V205.27l192-168 192 168zm0-301.25l-64-56V64h64zm-272 55.92v106.67A26.75 26.75 0 00234.66 352H341.3a26.76 26.76 0 0026.7-26.66V218.67A26.75 26.75 0 00341.3 192H234.66A26.74 26.74 0 00208 218.67zm32 5.33h96v96h-96z" />
  </svg>
);

SvgHouse.displayName = "SvgHouse";
SvgHouse.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHouse;
