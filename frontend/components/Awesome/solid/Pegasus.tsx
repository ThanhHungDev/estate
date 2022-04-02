import * as React from "react";

const SvgPegasus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M575.92 76.6c-.01-8.13-3.02-15.87-8.58-21.8-3.78-4.03-8.58-9.12-13.69-14.5 11.06-6.84 19.5-17.49 22.18-30.66C576.85 4.68 572.96 0 567.9 0H447.92c-70.69 0-128 57.31-128 128-63.92 0-104.2-36.78-127.66-90.27-3.22-7.35-13.61-7.76-17.04-.5C165.49 57.82 160 80.8 160 105.1c0 67.04 51.01 133.09 128 147.74v3.17c-82.89 0-143.33-57.52-157.03-122.86-16.72 5.47-31.62 14.98-42.97 27.97V160c-48.53 0-88 39.47-88 88v56c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-56c0-13.22 6.87-24.39 16.78-31.68-.21 2.58-.78 5.05-.78 7.68 0 27.64 11.84 52.36 30.54 69.88l-25.72 68.6a63.945 63.945 0 00-2.16 37.99l24.85 99.41A15.982 15.982 0 00107.02 512h65.96c10.41 0 18.05-9.78 15.52-19.88l-26.31-105.26 23.84-63.59L320 345.6V496c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V318.22c19.74-20.19 32-47.75 32-78.22 0-.22-.07-.42-.08-.64V136.89l16 7.11 18.9 37.7c7.45 14.87 25.05 21.55 40.49 15.37l32.55-13.02a31.997 31.997 0 0020.12-29.74l-.06-77.71zm-64 19.4c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z" />
  </svg>
);

SvgPegasus.displayName = "SvgPegasus";
SvgPegasus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPegasus;
