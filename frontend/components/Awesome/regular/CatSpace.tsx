import * as React from "react";

const SvgCatSpace = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M448 0a176 176 0 00-176 176c0 1.322.168 2.602.197 3.916-66.56 10.658-122.96 46.52-160.197 97.1V184a88.09 88.09 0 00-88-88 23.997 23.997 0 10.688 47.984C47.03 143.375 64 164.562 64 186.922v212.375C64 472.703 103.406 512 152 512h184a15.99 15.99 0 0016-16 32.012 32.012 0 00-32-32h-16.125A163.002 163.002 0 00302 442.187l82-48.234V480a32.012 32.012 0 0032 32h64a32.012 32.012 0 0032-32V339.818c65.52-25.62 112-89.224 112-163.818A175.999 175.999 0 00448 0zm0 48a127.066 127.066 0 0172.938 23.063L480 112h-64l-40.938-40.938A127.066 127.066 0 01448 48zm56 128a16 16 0 11-16-16 15.99 15.99 0 0116 16zm-80 0a16 16 0 11-16-16 15.99 15.99 0 0116 16zM287.437 395.078A163.536 163.536 0 00234 331.968c-7.531-5.265-18.094-2.202-22.531 5.813l-7.438 13.39c-3.969 7.141-2.562 16.485 4.063 21.282A115.856 115.856 0 01255.719 464H152a40.037 40.037 0 01-40-40c0-98.664 70.43-180.979 167.672-196.6a176.345 176.345 0 00102.715 111.827zM464 464h-32v-98.016a31.92 31.92 0 00-3.96-15.193 162.03 162.03 0 0035.96.402zm-16-160a128.145 128.145 0 01-128-128c0-32.17 12.334-61.254 32-83.764V176a96 96 0 00192 0V92.236c19.666 22.51 32 51.594 32 83.764a128.144 128.144 0 01-128 128zM146.945 68.77l39.711 16.56 16.563 39.711a5.323 5.323 0 009.539 0l16.558-39.71 39.715-16.561a5.336 5.336 0 000-9.541l-39.715-16.56-16.558-39.712a5.325 5.325 0 00-9.54 0L186.657 42.67l-39.71 16.558a5.336 5.336 0 000 9.541z" />
  </svg>
);

SvgCatSpace.displayName = "SvgCatSpace";
SvgCatSpace.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCatSpace;
