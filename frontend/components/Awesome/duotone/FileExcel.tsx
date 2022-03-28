import * as React from "react";

const SvgFileExcel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zM280.51 446.09A12 12 0 01274 448h-34.9a12 12 0 01-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8a11.89 11.89 0 01-10.5 6.3H110a12 12 0 01-10.1-18.5l60.3-93.5-60.3-93.5a12 12 0 0110.1-18.5h34.8a12 12 0 0110.6 6.3c26.1 48.8 20 33.6 36.6 68.5 0 0 6.1-11.7 36.6-68.5a12 12 0 0110.6-6.3H274a11.93 11.93 0 0110.1 18.4L224 336l60.1 93.5a12 12 0 01-3.59 16.59z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zM224 336l60.1-93.5a11.93 11.93 0 00-10.1-18.4h-34.8a12 12 0 00-10.6 6.3c-30.5 56.8-36.6 68.5-36.6 68.5-16.6-34.9-10.5-19.7-36.6-68.5a12 12 0 00-10.6-6.3H110a12 12 0 00-10.1 18.5l60.3 93.5-60.3 93.5a12 12 0 0010.1 18.5h34.9a11.89 11.89 0 0010.5-6.3c26.6-48.8 30.2-54 36.6-68.8 0 0 16.9 32.5 36.5 68.7a12 12 0 0010.6 6.3H274a12 12 0 0010.1-18.5z"
      className="file-excel_svg__fa-primary"
    />
  </svg>
);

SvgFileExcel.displayName = "SvgFileExcel";
SvgFileExcel.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileExcel;