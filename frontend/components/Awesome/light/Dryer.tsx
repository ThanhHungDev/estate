import * as React from "react";

const SvgDryer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M384-1H64A64 64 0 000 63v416a32 32 0 0032 32h384a32 32 0 0032-32V63a64 64 0 00-64-64zm32 480H32V63a32 32 0 0132-32h320a32 32 0 0132 32zM80 95a16 16 0 10-16-16 16 16 0 0016 16zm64 0a16 16 0 10-16-16 16 16 0 0016 16zm80 32a160 160 0 10160 160 160 160 0 00-160-160zm0 288a128 128 0 11128-128 128.14 128.14 0 01-128 128zm-7.11-156.42c0-20.12-10.63-30.75-18.39-38.51-5.18-5.18-8.21-8.4-9.43-13a7.11 7.11 0 00-6.82-5.4h-14.51a7.25 7.25 0 00-7.06 8.47c2.45 14.79 11.11 23.45 17.71 30 7 7 10.06 10.4 10.06 18.4S185.36 270 178.39 277c-7.77 7.75-18.39 18.38-18.39 38.5s10.62 30.72 18.39 38.47c5.17 5.18 8.21 8.39 9.42 13a7.13 7.13 0 006.83 5.39h14.5a7.25 7.25 0 007.07-8.47c-2.46-14.76-11.12-23.42-17.71-30-7-7-10.05-10.39-10.05-18.36s3.08-11.43 10.05-18.4c7.76-7.8 18.39-18.42 18.39-38.55zm71.11 0c0-20.12-10.62-30.75-18.39-38.51-5.18-5.18-8.21-8.4-9.43-13a7.11 7.11 0 00-6.82-5.4h-14.51a7.25 7.25 0 00-7.06 8.47c2.46 14.79 11.12 23.45 17.71 30 7 7 10.05 10.4 10.05 18.4S256.47 270 249.5 277c-7.76 7.76-18.39 18.39-18.39 38.51s10.63 30.71 18.39 38.49c5.17 5.18 8.21 8.39 9.43 13a7.11 7.11 0 006.82 5.39h14.51a7.25 7.25 0 007.06-8.47c-2.46-14.76-11.12-23.42-17.71-30-7-7-10.06-10.39-10.06-18.36s3.09-11.43 10.06-18.4c7.77-7.83 18.39-18.45 18.39-38.58z" />
  </svg>
);

SvgDryer.displayName = "SvgDryer";
SvgDryer.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDryer;
