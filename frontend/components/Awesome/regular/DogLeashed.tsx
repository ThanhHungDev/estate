import * as React from "react";

const SvgDogLeashed = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M576 104v48a88.09 88.09 0 01-88 88h-8v240a32 32 0 01-32 32h-80a32 32 0 01-32-32v-96H208v96a32 32 0 01-32 32H96a32 32 0 01-32-32V312a118.82 118.82 0 017.88-41.63A88 88 0 010 184a24 24 0 0148 0 40 40 0 0040 40h15c21.39-19.68 49.67-32 81-32h55.59L38.42 41.63a16 16 0 01-3.23-22.4l9.58-12.81a16 16 0 0122.39-3.23L304 180.22V16c0-14.25 17.23-21.39 27.31-11.31L358.6 32l-.14.16c.53 0 1-.16 1.54-.16h76.22a55.67 55.67 0 0150.09 31l.53 1H536a40 40 0 0140 40zM280 240h-96a72.09 72.09 0 00-72 72v152h48V336h120zm152 28.73l-104-26V336h56v128h48zM528 112h-70.84l-13.78-27.58a8 8 0 00-7.16-4.42H360a8 8 0 00-8 8v111.27l80 20V192h56a40 40 0 0040-40zm-96 0a16 16 0 11-16-16 16 16 0 0116 16z" />
  </svg>
);

SvgDogLeashed.displayName = "SvgDogLeashed";
SvgDogLeashed.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDogLeashed;
