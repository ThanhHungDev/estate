import * as React from "react";

const SvgFileExport = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z" />
  </svg>
);

SvgFileExport.displayName = "SvgFileExport";
SvgFileExport.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileExport;
