import * as React from "react";

const SvgAirConditioner = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M544 0H32A32 32 0 000 32v160a32 32 0 0032 32h512a32 32 0 0032-32V32a32 32 0 00-32-32zm-32 160H64v-32h448zM216 424a40 40 0 01-40 40h-6.22c-20 0-38.18-13.88-41.28-33.61-2.88-18.41 6.92-34.22 21.84-41.47 5.73-2.78 9.66-8.25 9.66-14.63v-17.62a16.1 16.1 0 00-21.42-15.17 87.55 87.55 0 00-57.88 93.74c5.56 44.58 45.85 76.76 90.77 76.76H176a88 88 0 0088-88V256h-48zm221.42-114.5A16.1 16.1 0 00416 324.67v17.62c0 6.38 3.93 11.85 9.66 14.63 14.92 7.25 24.72 23.06 21.84 41.47-3.1 19.73-21.3 33.61-41.28 33.61H400a40 40 0 01-40-40V256h-48v136a88 88 0 0088 88h4.53c44.92 0 85.21-32.18 90.77-76.76a87.55 87.55 0 00-57.88-93.74z" />
  </svg>
);

SvgAirConditioner.displayName = "SvgAirConditioner";
SvgAirConditioner.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAirConditioner;
