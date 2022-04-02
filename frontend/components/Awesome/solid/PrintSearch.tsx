import * as React from "react";

const SvgPrintSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M128 448v-96h163.23a160.64 160.64 0 01-3.23-32c0-36.16 12.51-69.18 32.81-96H128V64h192v48a16 16 0 0016 16h48v45.56A158.69 158.69 0 01448 160V77.25a32 32 0 00-9.37-22.63L393.37 9.37A32 32 0 00370.74 0H96a32 32 0 00-32 32v160a64 64 0 00-64 64v112a16 16 0 0016 16h48v96a32 32 0 0032 32h320a32 32 0 0032-32c-35.7 0-68.37-12.16-95-32zm507.31 14.06l-77.41-77.41c11.22-19 18.1-40.95 18.1-64.65a128 128 0 10-128 128c23.7 0 45.61-6.88 64.65-18.11l77.41 77.42a16 16 0 0022.63 0l22.62-22.62a16 16 0 000-22.63zM448 384a64 64 0 1164-64 64 64 0 01-64 64z" />
  </svg>
);

SvgPrintSearch.displayName = "SvgPrintSearch";
SvgPrintSearch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPrintSearch;
