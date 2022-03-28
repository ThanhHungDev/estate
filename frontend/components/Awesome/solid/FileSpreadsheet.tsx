import * as React from "react";

const SvgFileSpreadsheet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M296 368h-48v48h48v-48zm-80-80h-48v48h48v-48zm80 0h-48v48h48v-48zm-80 80h-48v48h48v-48zm8-232V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm104 104v192c0 8.84-7.16 16-16 16H72c-8.84 0-16-7.16-16-16V240c0-8.84 7.16-16 16-16h240c8.84 0 16 7.16 16 16zm49-135L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zM136 288H88v48h48v-48zm0 80H88v48h48v-48z" />
  </svg>
);

SvgFileSpreadsheet.displayName = "SvgFileSpreadsheet";
SvgFileSpreadsheet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileSpreadsheet;