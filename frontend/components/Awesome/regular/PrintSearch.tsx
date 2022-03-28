import * as React from "react";

const SvgPrintSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M128 464v-64h163.43a174.58 174.58 0 01-16.37-48H48v-96a32 32 0 0132-32h220.68a177.28 177.28 0 0146.45-48H128V48h192v48a16 16 0 0016 16h48v44.22a174.63 174.63 0 0148-11.41V99.88a48 48 0 00-14.06-33.94l-51.88-51.88A48 48 0 00332.12 0H110.48C93.64 0 80 14.33 80 32v144a80 80 0 00-80 80v128a16 16 0 0016 16h64v96a16 16 0 0016 16h320a16 16 0 0016-16v-.81A174.82 174.82 0 01347.13 464zm507.31 9.38l-81.46-81.46a128.12 128.12 0 10-33.94 33.93l81.47 81.46a16 16 0 0022.62 0L635.31 496a16 16 0 000-22.62zM448 400a80 80 0 1180-80 80 80 0 01-80 80z" />
  </svg>
);

SvgPrintSearch.displayName = "SvgPrintSearch";
SvgPrintSearch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPrintSearch;
