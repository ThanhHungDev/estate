import * as React from "react";

const SvgTriangleMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256.06 263.89a56.77 56.77 0 1052.55 37.34l198.66-198.65a16 16 0 000-22.62L496 68.66a16 16 0 00-22.62 0L274.69 267.31a55.41 55.41 0 00-18.63-3.42zM497.79 368.1l-80.46-130.34-34.87 34.87L457 393.32c9 14.55 9.42 31.33 1.07 46.22A48.13 48.13 0 01415.83 464H96.15A48 48 0 0154 439.6c-8.34-14.86-8-31.71 1-46.27l159.86-258.94A47.93 47.93 0 01256 111.74c17.24 0 32.24 8.27 41.13 22.66L322 174.73l34.87-34.87L338 109.2a95.21 95.21 0 00-58-42.42V16a16 16 0 00-16-16h-16a16 16 0 00-16 16v50.78a95.14 95.14 0 00-58 42.38l-159.86 259a92.38 92.38 0 00-2 94.94c16.72 30.08 49 48.92 84 48.92h319.69A96.14 96.14 0 00500 462.84c16.73-29.84 16-65.35-2.21-94.74z" />
  </svg>
);

SvgTriangleMusic.displayName = "SvgTriangleMusic";
SvgTriangleMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTriangleMusic;
