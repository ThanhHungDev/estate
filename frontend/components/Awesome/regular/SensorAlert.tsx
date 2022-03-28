import * as React from "react";

const SvgSensorAlert = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M633.09 403.37L492.27 159.22c-19.66-34.1-68.87-34.1-88.53 0L262.91 403.36c-19.65 34.07 4.94 76.64 44.27 76.64h281.64c39.33 0 63.92-42.57 44.27-76.63zM448 432a24 24 0 1124-24 24 24 0 01-24 24zm19.08-82.8a12 12 0 01-11.94 10.8h-14.27a12 12 0 01-11.95-10.8l-9.59-96a12 12 0 0111.94-13.2h33.47a12 12 0 0111.94 13.2zM176 152v112a24 24 0 0048 0V152a24 24 0 00-48 0zm48.35 280H64a16 16 0 01-16-16V96a16 16 0 0116-16h320a16 16 0 0116 16v21.57c13.8-9.9 30.16-15.92 48-15.92V96a64 64 0 00-64-64H64A64 64 0 000 96v320a64 64 0 0064 64h178.51c-2.47-3.15-5.24-6-7.29-9.54A82.69 82.69 0 01224.35 432zM96 152v112a24 24 0 0048 0V152a24 24 0 00-48 0z" />
  </svg>
);

SvgSensorAlert.displayName = "SvgSensorAlert";
SvgSensorAlert.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSensorAlert;
