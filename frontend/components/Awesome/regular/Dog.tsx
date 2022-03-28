import * as React from "react";

const SvgDog = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M576 104v48a88.09 88.09 0 01-88 88h-8v240a32 32 0 01-32 32h-80a32 32 0 01-32-32v-96H208v96a32 32 0 01-32 32H96a32 32 0 01-32-32V312a118.82 118.82 0 017.88-41.63A88 88 0 010 184a24 24 0 0148 0 40 40 0 0040 40h15.06c21.38-19.69 49.66-32 80.94-32h120V16c0-14.25 17.22-21.39 27.31-11.31L358.59 32l-.12.15c.53 0 1-.15 1.53-.15h76.22a55.65 55.65 0 0150.09 31l.53 1H536a40 40 0 0140 40zM432 268.73L317.06 240H184a72.09 72.09 0 00-72 72v152h48V336h224v128h48zM528 112h-70.84l-13.78-27.58a8 8 0 00-7.16-4.42H360a8 8 0 00-8 8v111.26l80 20V192h56a40 40 0 0040-40zm-96 0a16 16 0 11-16-16 16 16 0 0116 16z" />
  </svg>
);

SvgDog.displayName = "SvgDog";
SvgDog.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDog;
